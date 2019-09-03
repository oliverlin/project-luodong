import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import SkillBar from './SkillBar'
import Difficulty from './Difficulty'

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
    return <StyledTask>
      Finished
    </StyledTask>
  }
  return (
    <StyledTask>
      <div>
        <SkillBar
          withBackground
          type={taskType}
          value={progress}/>
      </div>
      <Difficulty value={difficulty} />
      {
        dev ? (
          <StyledWorker>
            {dev.name}
            <div className='cancel-btn' onClick={_onRemove(dev.id)}>
              Cancel
            </div>
          </StyledWorker>
        ) : (
          <Droppable droppableId={id} isCombineEnabled>
            {(droppableProvided, droppableSnapshot) => (
                <StyledDropZone isHovering={droppableSnapshot.isDraggingOver} ref={droppableProvided.innerRef}>
                  <div className='wi'>
                    <div  index={0} className='a'></div>
                    <div  index={1} className='b'></div>
                    <div  index={2} className='c'></div>
                    {droppableProvided.placeholder && <div className='xxx'>Drop</div>}
                    <div style={{ display: 'none' }}>{droppableProvided.placeholder}</div>
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
  background: ${props => props.isHovering ? '#999' : '#e1e1e1'};
  padding: 5px;
  .a{
    height: 30px;
  }
  .b{
    height: 30px;
  }
  .c{
    height: 30px;
  }
  .dz{
    background: red;
  }
`

const StyledTask = styled.div`
  background: #fff;
  margin-right: 10px;
  overflow: hidden;
  width: 80px;
  height: 60px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  &:last-child{
    margin: 0;
  }
`
const StyledWorker = styled.div`
  .cancel-btn{
    cursor: pointer;
  }
`
