import React from 'react'
import styled from 'styled-components'
import SkillBar from './SkillBar'

const Dev = ({
  draggableProvided = {
    draggableProps: {},
    dragHandleProps: {},
    innerRef: {}
  },
  isDragging,
  resourceName,
  backend,
  cooldown,
  design,
  frontend,
  cooldownReason,
  used,
  onClick,
  actionText,
  avatar
}) => {
  const reason = cooldownReason === 'manual'
    ? 'Context switch'
    : cooldownReason
  return (
    <StyledResource
      isDragging={isDragging}
      isUsed={used}
      ref={draggableProvided.innerRef}
      {...draggableProvided.draggableProps}
      {...draggableProvided.dragHandleProps}>
      <div className='avatar'>
        <img src={avatar} width={30} height={30} />
      </div>
      <div>
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
                {reason}
              </div>
            </div>
          )
        }
        <div className='info'>
          <div className='name'>{resourceName}</div>
        </div>
      </div>
      {
        onClick && (
          <div
            className='cancel'
            onClick={onClick}>
            {actionText}
          </div>
        )
      }
      {
        used && (
          <div className='busy'>BUSY</div>
        )
      }
    </StyledResource>
  )
}
const StyledResource = styled.div`
  display: flex;
  width: 110px;
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
  .avatar{
    border-radius: 6px;
    padding: 3px;
    overflow: hidden;
    background: #eee;
    margin-right: 5px;
    img{
      width: 30px;
      height: 30px;
    }
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
    bottom: 0;
    right: 0;
    background: rgba(100, 100, 100, 0.2);
    color: #999;
    font-size: 12px;
    padding: 3px 8px;
    background: #555;
    color: #aaa;
    font-weight: bold
  }
  .cancel{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.85);
    color: #f25158;
    display: none;
    cursor: pointer;
    align-items: center;
    text-align: center;
    z-index: 3;
    line-height: 48px;
  }
  &:hover{
    .cancel{
      display: block;
    }
  }
  @media only screen and (max-width: 480px) {
    display: inline-flex;
    margin: 0 10px 0 0;
    &:last-child{
      margin: 0;
    }
  }
`

export default Dev
