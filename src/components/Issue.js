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
  expiredAt
}) => {
  return (
    <StyledIssue position={position}>
      {/* <div>{id}</div> */}
      <div>{required}</div>
      {/* <div>{expiredAt}</div> */}
      <StyledTaskList>
        {
          tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                onRemove={onRemove}
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
    </StyledIssue>
  )
}

export default Issue


const StyledIssue = styled.div`
  position: absolute;
  top: 0;
  background: grey;
  border: 1px solid red;
  margin-bottom: 5px;
  transform: translateY(${props => props.position}px);
  transition-property: transform;
  transition-duration: ${tickFrequencyInSec}s;
  transition-timing-function: linear;
`
const StyledTaskList = styled.div`
  display: flex;
  padding: 10px;
`
