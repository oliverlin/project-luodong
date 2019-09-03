import React, { useState } from 'react'
import App from './App'
import styled from 'styled-components'

const Entry = () => {
  const [started, setStarted] = useState(false)
  return started
    ? (
      <App />
    ) : (
      <StyledCover>
        <div className='info'>
          <div className='description'>
            Assign your resources properly to complete issue and tasks as many as possible!
          </div>
          <div
            className='btn'
            onClick={() => setStarted(true)}>
            Start Game!!
          </div>
        </div>
      </StyledCover>

    )
}

export default Entry

const StyledCover = styled.div`
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  .info{
    font-family: 'Permanent Marker', cursive;
    text-align: center;
    font-size: 22px;
    color: #f4427d;
  }
  .description{
    padding: 0 20px;
  }
  .btn{
    display: inline-block;
    padding: 15px 25px;
    border-radius: 0;
    font-size: 36px;
    border: 2px solid #f983aa;
    color: #f4427d;
    transition: 0.2s;
    cursor: pointer;
    margin: 36px 0;
    &:hover{
      transform: scale(1.1);
      box-shadow: 0 12px 15px rgba(0,0,0,0.2)
      color: #999;
    }
  }
`
