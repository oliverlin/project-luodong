import React, { Component } from 'react'
import ProductionLine from './containers/ProductionLine'
import ResourcePanel from './containers/ResourcePanel'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { TICK_PER_MS, DROPPABLE_RESOURCE_PANEL } from './constants'
import Game from './engine/game'

// const state = Game.state()
// 20/0.8
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
    currentTime: null,
    resources: [],
    issues: [],
    intervalId: null,
    game: null,
    isDragging: false,
    score: 0
  }

  componentDidMount(){
    const game = this._setUpGame()
    this.setState({ game }, this._startTicker)
    this.audio = new Audio("https://dl.dropbox.com/s/32fcidb4vs5wz1k/background_cat.mp3")
    this.audio.play()
  }

  _setUpGame = () => {
    const game = Game.newGame()
    return game
  }

  _startTicker = () => {
    const intervalId = window.setInterval(this._tick, TICK_PER_MS)
    this.setState({ intervalId })
  }

  _stopTicker = () => {
    window.clearInterval(this.state.intervalId)
  }

  _tick = () => {
    this.state.game.nextTick()
    this._refreshData()
  }

  _removeDeveloper = (devId) => {
    this.state.game.removeDeveloper(devId)
    this._refreshData()
  }

  _refreshData = () => {
    const { isDragging, game } = this.state
    const gameState = game.state()
    if (!isDragging) {
      this.setState({
        currentTime: gameState.currentTime,
        issues: gameState.issues,
        resources: gameState.developers,
        score: gameState.score,
      })
    }
  }

  _mapResourcesToIssues = () => {
    const { resources, issues } = this.state
    return issues.map(issue=>{
      return {
        ...issue,
        tasks: issue.tasks.map(task => {
          const resourceId = task.devId
          const resource = resources.find(res => res.id === resourceId)
          return resource
            ? { ...task, dev: resource }
            : task
        })
      }
    })
  }

  render() {
    const { resources, currentTime, score } = this.state
    const issuesWithResources = this._mapResourcesToIssues()
    return (
      <DragDropContext
        onBeforeDragStart={this._onBeforeDragStart}
        onDragEnd={this._onDragEnd}>
        <StyledLayout>
          <div className='production-line'>
            <ProductionLine
              currentTime={currentTime}
              onRemove={this._removeDeveloper}
              issues={issuesWithResources} />
          </div>
          <div className='resource-panel'>
            <ResourcePanel
              score={score}
              resources={resources} />
          </div>
        </StyledLayout>
      </DragDropContext>
    )
  }

  _onBeforeDragStart = () => {
    this._toggleDragging(true)
    this._stopTicker()
  }


  _toggleDragging = isDragging => () => {
    this.setState({ isDragging })
  }

  _onDragEnd = (result) => {
    this._toggleDragging(false)()
    this._tick()
    this._startTicker()
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
    flex: 0 0 100px;
    padding: 10px;
    background: #fff;
  }
`
