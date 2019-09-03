import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ResultPanel from './ResultPanel'
import styled from 'styled-components'
import times from 'lodash/times'

const _restart = () => {
  window.location.reload()
}

class ResultModal extends Component {
  render() {
    const { score, show, star, scoreSeries } = this.props
    return (
      <div>
        <Modal
          show={show}
          onHide={() => {}}>
          <Modal.Header>
            <Modal.Title>
              <StyledTitle>
                {this._getResultTitle()}
              </StyledTitle>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StyledRevenue>
              <span>
                Revenue
            </span>
              <span>
                ${score}
              </span>
            </StyledRevenue>
            <StyledScore>
              <span>
                Score
              </span>
              {this._renderStars()}
            </StyledScore>
            <ResultPanel star={star} scoreSeries={scoreSeries} />
          </Modal.Body>
          <Modal.Footer>
            <StyledButton
              variant='primary'
              onClick={_restart}>
              Restart
            </StyledButton>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

  _getResultTitle = () => {
    const { star } = this.props
    let title
    switch(star){
      case 0:
        title = 'Your product failed!'
        break
      case 1:
        title = 'Your product barely survived.'
        break
      case 2:
        title = 'Your product survived.'
        break
      case 3:
        title = 'You are a Project Management Master!'
        break
    }
    return title
  }

  _renderStars = () => {
    const { star } = this.props
    const solidStars = times(star, () => '★')
    return solidStars.join('').padEnd(3, '☆')
  }
}

export default ResultModal

const StyledTitle = styled.div`
  text-align: center;
  padding: 0 20px;
  font-size: 20px;
`
const StyledBase = styled.div`
  display: flex;
  font-size: 20px;
  padding: 0 20px;
  justify-content: space-between;
`
const StyledRevenue = styled(StyledBase)`
  color: #4185f4;
`
const StyledScore = styled(StyledBase)`
  color: #e7711b;
`
const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px 0;
`
