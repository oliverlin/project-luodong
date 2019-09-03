import React from 'react'
import styled from 'styled-components'

const RemainingTicks = ({ ticks }) => {
  const remainingWeeks = Math.floor(ticks / 4) + 1
  return (
    <StyledContainer>
      {
        remainingWeeks === 1
          ? 'Last week!'
          : (
            <div>
              <b>{remainingWeeks}</b> weeks remain
            </div>
          )
      }

    </StyledContainer>
  )
}

export default RemainingTicks

const StyledContainer = styled.div`
  margin: 0;
  font-size: 12px;
  background: #fff;
  padding: 10px 10px 0 10px;
  b{
    font-size: 15px;
    font-weight: bold;
  }
`
