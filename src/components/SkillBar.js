import React from 'react'
import styled from 'styled-components'
import { TICK_PER_MS } from '../constants'

const tickFrequencyInSec = TICK_PER_MS / 1000 - 0.05

const getColor = type => {
  switch (type) {
    case 'backend':
      return '#4185f4'
    case 'design':
      return '#fbbe08'
    case 'frontend':
      return '#3aab58'
  }
}

const SkillBar = ({
  type,
  value,
  withBackground
}) => {
  return (
    <StyledBar
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
  height: 4px;
  .bar{
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => 100 * props.value}%;
    background: ${props => props.color};
    height: 4px;
    z-index: 2;
    transition: ${tickFrequencyInSec}s width;
  }
  .bg{
    width: 100%;
    background: ${props => props.color};
    height: 4px;
    position: absolute;
    z-index: 1;
    opacity: 0.5;
  }
`
export default SkillBar
