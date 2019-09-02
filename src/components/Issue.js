import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { TICK_PER_MS } from '../constants'

const tickFrequencyInSec = TICK_PER_MS / 1000 - 0.05

const Issue = ({
  id,
  tasks,
  position,
  required,
  onRemove,
  expiredAt,
  resuired
}) => {
  return (
    <StyledIssue position={position}>
      <div className='container'>
        <div>{required ? 'True' : ''}</div>
        {/* <div>{expiredAt}</div> */}
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
      {/* <div>{id}</div> */}
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
  .container{
    /* width: auto; */
    /* margin: 0 auto; */
    background: grey;
  }
`
const StyledTaskList = styled.div`
  display: flex;
  padding: 10px;
`
