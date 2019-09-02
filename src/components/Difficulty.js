import React from 'react'
import times from 'lodash/times'
import styled from 'styled-components'

const Difficulty = ({ value }) => {
  // let difficultyStars = ''
  const difficultyStars = times(value, () => '♣︎')

  return (
    <StyledDifficulty>
      {difficultyStars}
    </StyledDifficulty>
  )
}

export default Difficulty

const StyledDifficulty = styled.div`
  color: #d76265;
  font-size: 12px;
`
