import React from 'react'
import times from 'lodash/times'
import styled from 'styled-components'

const Difficulty = ({ value, color }) => {
  // let difficultyStars = ''
  const difficultyStars = times(value, () => '♣︎')

  return (
    <StyledDifficulty color={color}>
      {difficultyStars}
    </StyledDifficulty>
  )
}

export default Difficulty

const StyledDifficulty = styled.div`
  color: ${props=>props.color};
  font-size: 12px;
`
