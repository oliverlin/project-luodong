import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { TICK_PER_MS } from '../constants'
import Shaker from './Shaker'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// const tickFrequencyInSec = TICK_PER_MS / 1000 - 0.05

const ResultModal = ({

}) => {
  return (
    <div>
      asdfasdfasd
    <Modal
      show={false}
      onHide={()=>{}}>
      <Modal.Header>
        <Modal.Title>Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Result
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={()=>{}}>
          Restart
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ResultModal
