import React, { Component } from 'react'
import ProductionLine from './containers/ProductionLine'
import ResourcePanel from './containers/ResourcePanel'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { DROPPABLE_RESOURCE_PANEL } from './constants'
import Game from './engine/game'

// const state = Game.state()


// game.assignDeveloper(devId, taskId)
// game.nextTick()
// game.removeDeveloper(devId)
// game.state()

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

class App extends Component {
  state = {
    resources: [],
    issues: [],
    intervalId: null,
    game: null,
    isDragging: false
  }

  componentDidMount(){
    const game = this._setUpGame()
    this.setState({ game }, this._startTicker)
  }

  _setUpGame = () => {
    const game = Game.newGame()
    return game
  }

  _startTicker = () => {
    const intervalId = window.setInterval(this._tick, 1000)
    this.setState({ intervalId })
  }

  _tick = () => {
    this.state.game.nextTick()
    this._refreshData()

  }

  _refreshData = () => {
    const { isDragging, game } = this.state
    const gameState = game.state()
    console.log(gameState.issues)
    console.log('isDragging: ', isDragging)
    if (!isDragging) {
      this.setState({
        issues: gameState.issues,
        resources: gameState.developers
      })
    }
  }

  _mapResourcesToIssues = () => {
    const { resources, issues } = this.state
    return issues.map(issue=>{

      const xx= {
        ...issue,
        tasks: issue.tasks.map(task => {
          const resourceId = task.devId
          const resource = resources.find(res => res.id === resourceId)
          return resource
            ? { ...task, dev: resource }
            : task
        })
      }
      return xx
    })
  }

  render() {
    const { resources, issues } = this.state
    const issuesWithResources = this._mapResourcesToIssues()
    return (
      <DragDropContext
        onBeforeDragStart={this._toggleDragging(true)}
        onDragEnd={this._onDragEnd}>
        <StyledLayout>
          <div className='production-line'>
            <ProductionLine
              issues={issuesWithResources} />
          </div>
          <div className='resource-panel'>
            <ResourcePanel
              resources={resources} />
          </div>
        </StyledLayout>
      </DragDropContext>
    )
  }

  _toggleDragging = isDragging => () => {
    this.setState({ isDragging })
  }

  _onDragEnd = (result) => {
    this._toggleDragging(false)()
    // dropped outside the list
    if (!result.destination) {
      return
    }

    if (result.destination.droppableId === DROPPABLE_RESOURCE_PANEL) {
      this._reorder(result)
    } else {
      const devId = result.draggableId
      const taskId = result.destination.droppableId
      this._assignResource(devId, taskId)
    }
  }

  _assignResource = (devId, taskId) => {
    this.state.game.assignDeveloper(devId, taskId)
    this._refreshData()
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
