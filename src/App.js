import React, { Component } from 'react'
import ProductionLine from './containers/ProductionLine'
import ResourcePanel from './containers/ResourcePanel'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { DROPPABLE_RESOURCE_PANEL } from './constants'

const mockedResources = ['hi', 'me', 'no', 'way']
const prepareResources = (resources) => {
  return resources.map((res, index) => {
    return {
      label: res
    }
  })
}
// const defaultResources = prepareResources(mockedResources)

const defaultResources = [{
    backend: 15,
    cooldown: 7,
    design: 2,
    frontend: 15,
    id: 'ced99000-cd3b-11e9-b6ef-fbc0080f2bb91',
    name: 'Ben',
    used: true
  },
  {
    backend: 3,
    cooldown: 0,
    design: 12,
    frontend: 12,
    id: 'ced99000-cd3b-11e9-b6ef-fbc0080f2bb92',
    name: 'Oliver',
    used: false
  },
  {
    backend: 19,
    cooldown: 0,
    design: 5,
    frontend: 5,
    id: 'ced99000-cd3b-11e9-b6ef-fbc0080f2bb93',
    name: 'Bruce',
    used: false
  }]

const defaultIssues = [{
  id: '088649d1-cd35-11e9-ab98-67b9481d4d551',
  tasks: [{
    id: '0886bf00-cd35-11e9-ab98-67b9481d4d552',
    devId: '088649d0-cd35-11e9-ab98-67b9481d4d553',
    progress: 8,
    complexity: 83,
    taskType: 'design',
    state: 'created'
  },
  {
    id: '08873431-cd35-11e9-ab98-67b9481d4d554',
    devId: null,
    progress: 0,
    complexity: 38,
    taskType: 'design',
    state: 'created'
  }],
  required: false,
  expiredAt: 19
},
{
  id: '08873430-cd35-11e9-ab98-67b9481d4d555',
  tasks: [],
  required: false,
  expiredAt: 19
}]

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

class App extends Component {
  state = {
    resources: defaultResources,
    issues: defaultIssues
  }

  render() {
    const { resources, issues } = this.state
    return (
      <DragDropContext onDragEnd={this._onDragEnd}>
        <StyledLayout>
          <div className='production-line'>
            <ProductionLine
              issues={issues} />
          </div>
          <div className='resource-panel'>
            <ResourcePanel
              resources={resources} />
          </div>
        </StyledLayout>
      </DragDropContext>
    )

  }

  _onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    if (result.destination.droppableId === DROPPABLE_RESOURCE_PANEL) {
      this._reorder(result)
    } else {
      this._assignResource(result)
    }
  }

  _assignResource = (result) => {
    console.log(result)
  }

  _reorder = (result) => {
    const resources = reorder(
      this.state.resources,
      result.source.index,
      result.destination.index,
    )

    this.setState({ resources })
  }
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
