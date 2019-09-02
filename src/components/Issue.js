import React from 'react'
import styled from 'styled-components'
import Task from './Task'

const Issue = ({
  id,
  tasks,
  required,
  expiredAt
}) => {
  return (
    <StyledIssue>
      <div>{id}</div>
      <div>{required}</div>
      <div>{expiredAt}</div>
      <StyledTaskList>
        {
          tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                devId={task.devId}
                progress={task.progress}
                complexity={task.complexity}
                taskType={task.taskType}
                state={task.state} />
            )
          })
        }
      </StyledTaskList>
      )}
    </StyledIssue>
  )
}

export default Issue


const StyledIssue = styled.div`
  background: grey;
  border: 1px solid red;
  margin-bottom: 5px;
`
const StyledTaskList = styled.div`
  display: flex;
  padding: 10px;
`
