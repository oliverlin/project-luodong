import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const _restart = () => {
  window.location.reload()
}

const ResultModal = ({
  show
}) => {
  return (
    <div>
      asdfasdfasd
    <Modal
      show={show}
      onHide={()=>{}}>
      <Modal.Header>
        <Modal.Title>Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Result
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

export default ResultModal
