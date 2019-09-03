import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { TICK_PER_MS } from '../constants'

const tickFrequencyInSec = TICK_PER_MS / 1000 - 0.05

const Issue = ({
  tasks,
  position,
  required,
  onRemove,
  resuired
}) => {
  const allFinished = !tasks.some(task => task.progress !== 1)
  return (
    <StyledIssue allFinished={allFinished} position={position}>
      {
        allFinished ? (
          <div>
            Issue completed!
          </div>
        ) : (
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
  .container{
    background: grey;
    padding: 10px;
  }
  .critical{
    color: #ff5555;
    font-size: 13px;
    font-weight: bold;
  }
`
const StyledTaskList = styled.div`
  display: flex;
`
