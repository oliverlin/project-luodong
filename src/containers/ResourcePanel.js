import React from 'react'
import ResourceItem from '../components/ResourceItem'
import { Droppable } from 'react-beautiful-dnd'
import { DROPPABLE_RESOURCE_PANEL } from '../constants'
import CountUp from 'react-countup'

const ResourcePanel = ({ resources, score }) => {
  return (
    <div>
      <div>Score: <CountUp end={score}/></div>
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
