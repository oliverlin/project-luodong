import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import SkillBar from './SkillBar'

const ResourceItem = ({
  resourceName,
  draggableId,
  backend,
  cooldown,
  design,
  frontend,
  cooldownReason,
  used,
  index
}) => {
  return (
    <Draggable
      draggableId={draggableId}
      isDragDisabled={used}
      index={index}>
      {(draggableProvided, draggableSnapshot) => (
        <StyledResource
          isDragging={draggableSnapshot.isDragging}
          isUsed={used}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}>
          <SkillBar compact type='backend' value={backend / 120} />
          <SkillBar compact type='design' value={design / 120} />
          <SkillBar compact type='frontend' value={frontend / 120} />
          {
            cooldown > 0 && (
              <div className='cd'>
                <div className='time'>
                  CD {cooldown}
                </div>
                <div className='reason'>
                  {cooldownReason}
                </div>
              </div>
            )
          }
          <div className='info'>
            <div className='name'>{resourceName}</div>
          </div>
          {
            used && (
              <div className='busy'>BUSY</div>
            )
          }
        </StyledResource>
      )}
    </Draggable>
  )
}

export default ResourceItem

const StyledResource = styled.div`
  width: 80px;
  height: 48px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px 6px;
  opacity: ${props => (props.isDragging || props.isUsed) ? 0.6 : 1};
  position: relative;
  box-shadow: 0 1px 6px rgba(80,80,80,0.1);
  &:hover{
    box-shadow: ${props => (props.isDragging || props.isUsed) ? '0 1px 6px rgba(80,80,80,0.1)' : '0 2px 9px rgba(80,80,80,0.3)'};
  }
  .cd{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 48px;
    background: rgba(20, 20, 20, 0.2);
    z-index: 2;
    background: #f97376d9;
    color: #fff;
    text-align: left;
    padding-left: 5px;
    padding-top: 3px;
    text-shadow: 0 1px 5px rgba(189, 65, 68, 0.9);
    font-weight: bold;
    .time{
      font-size: 20px;
      line-height: 1.1;
    }
    .reason{
      font-size: 12px;
    }
  }
  .info{
    position: relative;
    display: flex;
    font-size: 14px;
    align-items: center;
    z-index: 1;
    .name{
      margin-right: 6px;
      font-size: 12px;
      font-weight: bold;
    }
  }
  .busy{
    position: absolute;
    background: rgba(100, 100, 100, 0.2);
    color: #999;
    font-size: 12px;
  }
`
