import React from 'react'
import styled from 'styled-components'
import { TICK_PER_MS, getColor } from '../constants'

const tickFrequencyInSec = TICK_PER_MS / 1000 - 0.05

const SkillBar = ({
  type,
  value,
  withBackground,
  compact
}) => {
  return (
    <StyledBar
      compact={compact}
      value={value}
      color={getColor(type)}>
      <div className='bar'/>
      {
        withBackground && (
          <div className='bg' />
        )
      }
    </StyledBar>
  )
}

const StyledBar = styled.div`
  margin-bottom: 2px;
  position: relative;
  height: ${props => props.compact ? '4px' : '8px'};
  .bar{
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => 100 * props.value}%;
    background: ${props => props.color};
    height: ${props => props.compact ? '4px' : '8px'};
    z-index: 2;
    transition: ${tickFrequencyInSec}s width;
  }
  .bg{
    width: 100%;
    background: ${props => props.color};
    height: ${props => props.compact ? '4px' : '8px'};;
    position: absolute;
    z-index: 1;
    opacity: 0.5;
  }
  &:last-child{
    margin: 0;
  }
`
export default SkillBar
