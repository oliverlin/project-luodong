import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Dev from './Dev'

const ResourceItem = ({
  resourceName,
  draggableId,
  backend,
  cooldown,
  design,
  frontend,
  cooldownReason,
  avatar,
  used,
  index
}) => {
  return (
    <Draggable
      draggableId={draggableId}
      isDragDisabled={used}
      index={index}>
      {(draggableProvided, draggableSnapshot) => (
        <Dev
          draggableProvided={draggableProvided}
          isDragging={draggableSnapshot.isDragging}
          resourceName={resourceName}
          backend={backend}
          cooldown={cooldown}
          design={design}
          avatar={avatar}
          frontend={frontend}
          cooldownReason={cooldownReason}
          used={used}
        />
      )}
    </Draggable>
  )
}

export default ResourceItem
