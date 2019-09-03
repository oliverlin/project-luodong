import React, { Component } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'

class CurrentScore extends Component {
  state = {
    decreasedScore: 0
  }

  componentDidUpdate(prevProps) {
    const offset = prevProps.value - this.props.value
    if (offset > 0) {
      this._scheduleDeceasingScore(offset)
    }
  }

  _scheduleDeceasingScore = (decreasedScore) => {
    clearTimeout(this.timeoutId)
    this._setDeceasingScore(decreasedScore)
    this.timeoutId = setTimeout(this._setDeceasingScore.bind(this, 0), 3000)
  }

  _setDeceasingScore = (decreasedScore) => {
    this.setState({ decreasedScore })
  }

  render() {
    const { value } = this.props
    const { decreasedScore } = this.state
    return (
      <StyledContainer>
        <div className='score'>
          Revenue:
          <CountUp end={value} />
        </div>
        {
          <StyledDecreasedScores show={decreasedScore > 0}>
            -<CountUp duration={0.5} end={decreasedScore} />
          </StyledDecreasedScores>
        }
      </StyledContainer>
    )
  }
}

export default CurrentScore

const StyledContainer = styled.div`
  background: #fff;
  margin: 0;
  padding: 10px;
  .score{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    white-space: nowrap;
    color: #4185f4;
    font-weight: bold;
  }
`
const StyledDecreasedScores = styled.div`
  text-align: right;
  color: #f45b5d;
  font-size: 13px;
  opacity: ${props => props.show ? 1 : 0};
`
