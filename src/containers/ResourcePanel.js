import React from 'react'
import useWindowDimensions from '../components/useWindowDimensions'
import ResourceItem from '../components/ResourceItem'
import CurrentScore from '../components/CurrentScore'
import RemainingTicks from '../components/RemainingTicks'
import { Droppable } from 'react-beautiful-dnd'
import { DROPPABLE_RESOURCE_PANEL } from '../constants'
import styled, { css } from 'styled-components'

const ResourcePanel = ({ resources, score, remainingTicks }) => {
  const { width } = useWindowDimensions()
  const isMobile = width < 480
  return (
    <StyledWrapper isMobile={isMobile}>
      {
        (remainingTicks > 0) && (
          <RemainingTicks ticks={remainingTicks} />
        )
      }
      <CurrentScore value={score} />
      <Droppable
        isDropDisabled={isMobile}
        droppableId={DROPPABLE_RESOURCE_PANEL}>
        {(droppableProvided, droppableSnapshot) => (
          <StyledResources isMobile={isMobile} ref={droppableProvided.innerRef}>
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
            {
              !isMobile && (droppableProvided.placeholder)
            }
          </StyledResources>
        )}
      </Droppable>
    </StyledWrapper>
  )
}

export default ResourcePanel


const StyledWrapper = styled.div`
  flex: 0 0 160px;
  background: rgba(255, 255, 255, 0.6);
  ${
    props => props.isMobile ? css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      overflow-x: auto;
      flex: auto;
    ` : css`;
      flex: 0 0 160px;
    `
  }
`
const StyledResources = styled.div`
  padding: 20px;
  ${
    props => props.isMobile && css`
      padding: 10px;
      /* display: flex; */
      overflow-y: hidden;
      overflow-x: auto;
      white-space: nowrap;
    `
  }
`
