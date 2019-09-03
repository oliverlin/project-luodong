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
    console.log('decreasedScore', decreasedScore)
    this.setState({ decreasedScore })
  }

  render() {
    const { value } = this.props
    const { decreasedScore } = this.state
    return (
      <StyledScores>
        <div>Score: <CountUp end={value} /></div>
        {
          <StyledDecreasedScores show={decreasedScore > 0}>
            -<CountUp duration={0.5} end={decreasedScore} />
          </StyledDecreasedScores>
        }
      </StyledScores>
    )
  }
}

export default CurrentScore

const StyledScores = styled.div`
`
const StyledDecreasedScores = styled.div`
  color: #f45b5d;
  opacity: ${props => props.show ? 1 : 0};
`
