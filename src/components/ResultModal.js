import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ResultPanel from './ResultPanel'


const _restart = () => {
  window.location.reload()
}

class ResultModal extends Component {
  render() {
    const {show, star, scoreSeries} = this.props
    return (
      <div>
      <Modal
        show={show}
        onHide={()=>{}}>
        <Modal.Header>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Result
          <ResultPanel star={star} scoreSeries={scoreSeries}/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' onClick={_restart}>
            Restart
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}

export default ResultModal
