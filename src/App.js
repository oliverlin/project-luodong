import React from 'react'
import ProductionLine from './containers/ProductionLine'
import ResourcePanel from './containers/ResourcePanel'
import styled from 'styled-components'

function App() {
  return (
    <StyledLayout>
      <div className='production-line'>
        <ProductionLine />
      </div>
      <div className='resource-panel'>
        <ResourcePanel />
      </div>
    </StyledLayout>
  )
}

export default App

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .production-line{
    flex: 1;
    background: blue;
  }
  .resource-panel{
    flex: 0 0 200px;
    background: red;
  }
`
