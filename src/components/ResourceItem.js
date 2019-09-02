import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ResourceItem = ({
  resourceName,
  backend,
  cooldown,
  design,
  frontend,
  used,
  index
}) => {

  return (
    <Draggable
      draggableId={resourceName}
      // isDragDisabled={index===1}
      index={index}>
      {(draggableProvided, draggableSnapshot) => (
        <StyledResource
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}>
          <div>BE: {backend}</div>
          <div>DE: {design}</div>
          <div>FE: {frontend}</div>
          ----
          <div>CD: {cooldown}</div>
          <div>Used: {used ? 'T' : 'F'}</div>
          <div>{resourceName}</div>
        </StyledResource>
      )}
    </Draggable>
  )
}

export default ResourceItem

const StyledResource = styled.div`
  width: 80px;
  /* height: 40px; */
  background: green;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
`
