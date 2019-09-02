import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const Task = ({
  id,
  devId,
  progress,
  complexity,
  taskType,
  state
}) => {
  return (
    <StyledTask>
      {/* {id} */}
      {/* {devId} */}
      <div>{progress}</div>
      <div>{complexity}</div>
      <div>{taskType}</div>
      <div>{state}</div>

      <Droppable droppableId={id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            ref={droppableProvided.innerRef}>
            <StyledDropZone>Add</StyledDropZone>
            {droppableSnapshot.isDraggingOver ? 'true' : 'false'}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </StyledTask>
  )
}

export default Task


const StyledDropZone = styled.div`
  width: 50px;
  height: 50px;
  background: #e1e1e1;
  border-radius: 4px;
  padding: 10px;
`

const StyledTask = styled.div`
  background: #fff;
  padding: 10px;
  margin-right: 10px;
  overflow: hidden;
  width: 80px;
  height: 150px;
`
