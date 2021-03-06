import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import SkillBar from './SkillBar'
import Difficulty from './Difficulty'
import Dev from './Dev'
import { getColor } from '../constants'

const Task = ({
  id,
  progress,
  difficulty,
  taskType,
  onRemove,
  dev
}) => {
  const _onRemove = devId => () => {
    onRemove(devId)
  }

  if (progress === 1){
    return <StyledFinished>
      Finished
    </StyledFinished>
  }
  return (
    <StyledTask>
      <div>
        <SkillBar
          withBackground
          type={taskType}
          value={progress}/>
      </div>
      {
        dev ? (
          <StyledWorker>
            <Dev
              key={dev.id}
              draggableId={dev.id}
              cooldownReason={dev.cooldownReason}
              resourceName={dev.name}
              backend={dev.backend}
              cooldown={dev.cooldown}
              avatar={dev.avatar}
              design={dev.design}
              frontend={dev.frontend}
              onClick={_onRemove(dev.id)}
              actionText='Cancel'
            />
          </StyledWorker>
        ) : (
          <Droppable droppableId={id} isCombineEnabled>
            {(droppableProvided, droppableSnapshot) => (
                <StyledDropZone isHovering={droppableSnapshot.isDraggingOver} ref={droppableProvided.innerRef}>
                  <div className='wi'>
                    <div index={0} className='a'>
                      <Difficulty value={difficulty} color={getColor(taskType)}/>
                    </div>
                    <div index={1} className='b'>Drop here!</div>
                    <div index={2} className='c'></div>
                    {droppableProvided.placeholder}
                  </div>
                </StyledDropZone>
            )}
          </Droppable>
        )
      }

    </StyledTask>
  )
}

export default Task


const StyledDropZone = styled.div`
  background: ${props => props.isHovering ? '#e1e1e1' : '#fff'};
  padding: 5px;
  .a, .b, .c{
    height: 20px;
  }
  .b{
    font-size: 12px;
    text-align: center;
    color: #ababab;
    font-weight: bold;
    font-family: 'Modak', cursive;
  }
`

const StyledBase = styled.div`
  margin-right: 10px;
  overflow: hidden;
  width: 110px;
  height: 56px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`

const StyledFinished = styled(StyledBase)`
  background: rgba(255, 255, 255, 0.5);
  line-height: 56px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #666;
`

const StyledTask = styled(StyledBase)`
  background: #fff;
  &:last-child{
    margin: 0;
  }
`
const StyledWorker = styled.div`
  .cancel-btn{
    cursor: pointer;
  }
`
