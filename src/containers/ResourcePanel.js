import React from 'react'
import ResourceItem from '../components/ResourceItem'
import CurrentScore from '../components/CurrentScore'
import RemainingTicks from '../components/RemainingTicks'
import { Droppable } from 'react-beautiful-dnd'
import { DROPPABLE_RESOURCE_PANEL } from '../constants'
import styled from 'styled-components'

const ResourcePanel = ({ resources, score, remainingTicks }) => {
  return (
    <div>
      {
        (remainingTicks > 0) && (
          <RemainingTicks ticks={remainingTicks} />
        )
      }
      <CurrentScore value={score}/>
      <Droppable droppableId={DROPPABLE_RESOURCE_PANEL}>
        {(droppableProvided, droppableSnapshot) => (
          <StyledResources ref={droppableProvided.innerRef}>
            {
              resources.map((res, index) => {
                return (
                  <ResourceItem
                    key={res.id}
                    draggableId={res.id}
                    cooldownReason={res.cooldownReason}
                    index={index}
                    resourceName={res.name}
                    backend={res.backend}
                    cooldown={res.cooldown}
                    design={res.design}
                    avatar={res.avatar}
                    frontend={res.frontend}
                    used={res.used}
                    />
                    )
                  })
                }
            {droppableProvided.placeholder}
          </StyledResources>
        )}
      </Droppable>
    </div>
  )
}

export default ResourcePanel


const StyledResources = styled.div`
  padding: 20px;
`
