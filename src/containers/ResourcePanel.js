import React from 'react'
import ResourceItem from '../components/ResourceItem'
import CurrentScore from '../components/CurrentScore'
import { Droppable } from 'react-beautiful-dnd'
import { DROPPABLE_RESOURCE_PANEL } from '../constants'

const ResourcePanel = ({ resources, score }) => {
  return (
    <div>
      <CurrentScore value={score}/>
      <Droppable droppableId={DROPPABLE_RESOURCE_PANEL}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            ref={droppableProvided.innerRef}>
            {
              resources.map((res, index) => {
                return (
                  <ResourceItem
                    key={res.id}
                    draggableId={res.id}
                    index={index}
                    resourceName={res.name}
                    backend={res.backend}
                    cooldown={res.cooldown}
                    design={res.design}
                    frontend={res.frontend}
                    used={res.used}
                    />
                    )
                  })
                }
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default ResourcePanel
