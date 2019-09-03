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
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .info{
    font-family: 'Permanent Marker', cursive;
    text-align: center;
    font-size: 18px;
    color: #666;
  }
  .btn{
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 24px;
    border: 2px solid #999;
    color: #222;
    transition: 0.2s;
    cursor: pointer;
    margin: 20px 0;
    &:hover{
      transform: scale(1.1);
      box-shadow: 0 12px 15px rgba(0,0,0,0.2)
      color: #999;
    }
  }
`
