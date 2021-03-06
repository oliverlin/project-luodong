import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { TICK_PER_MS } from '../constants'
import Shaker from './Shaker'

const tickFrequencyInSec = TICK_PER_MS / 1000 - 0.05

const Issue = ({
  tasks,
  position,
  required,
  onRemove,
  percentage,
  resuired
}) => {
  const allFinished = !tasks.some(task => task.progress !== 1)
  const strengthPercentage = percentage
  return (
    <StyledIssue allFinished={allFinished} position={position}>
      {
        allFinished ? (
          <div className='completed'>
            Issue completed!
          </div>
        ) : (
            <Shaker strengthPercentage={strengthPercentage}>
              <div className='container'>
                {
                  required && (
                    <div className='critical'>Critical!</div>
                  )
                }
                <StyledTaskList>
                  {
                    tasks.map(task => {
                      return (
                        <Task
                          key={task.id}
                          id={task.id}
                          onRemove={onRemove}
                          difficulty={task.difficulty}
                          devId={task.devId}
                          dev={task.dev}
                          progress={task.progress}
                          complexity={task.complexity}
                          taskType={task.taskType}
                          state={task.state} />
                      )
                    })
                  }
                </StyledTaskList>
              </div>
            </Shaker>
          )
      }
    </StyledIssue>
  )
}

export default Issue


const StyledIssue = styled.div.attrs(props => ({
  style: {
    transform: `translateY(${props.position}px)`,
  }
}))`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transition-property: transform;
  transition-timing-function: linear;
  transition-duration: ${tickFrequencyInSec}s;
  justify-content: center;
  opacity: ${props => props.allFinished ? 0.4 : 1};
  .completed{
    color: #fff;
  }
  .container{
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(100, 100, 100, 0.4);
    border-radius: 8px;
    padding: 10px;
  }
  .critical{
    color: #fff;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`
const StyledTaskList = styled.div`
  display: flex;
`
