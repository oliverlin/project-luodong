const uuidv1 = require('uuid/v1')

const Issue = require('./issue')
const Developer = require('./developer')

function updateTask({ devId, taskId, gameState }) {
  const dev = gameState.developerMap[devId]
  if (dev === undefined) {
    console.error(`${devId} not found!`)
    return
  }

  const task = gameState.taskMap[taskId]
  if (task === undefined) {
    console.error(`${taskId} not found!`)
    return
  }

  // Each task need at lesat **minimumTick** tick to complete
  const minimumTick = 10

  task.resolved += dev[task.taskType]
  task.consumedTick += 1
  if (task.consumedTick >= minimumTick && task.resolved >= task.complexity) {
    task.gameState = 'completed'
    task.progress = 1
    delete gameState.ongoingMap[devId]
  } else {
    const progress1 = task.consumedTick / minimumTick
    const progress2 = task.resolved / task.complexity
    task.progress = progress1 < progress2 ? progress1 : progress2
  }
}

function updateTasks(gameState) {
  Object.keys(gameState.ongoingMap).forEach(devId => {
    const taskId = gameState.ongoingMap[devId]
    const opt = {
      devId,
      taskId
    }
    updateTask({ devId, taskId, gameState })
  })
}

function updateDevs(gameState) {
  Object.values(gameState.developerMap).forEach(dev => {
    if (dev.cooldown > 0) {
      dev.cooldown = dev.cooldown - 1
    }
  })
}

function newGame(debugState = {}) {
  let currentTime = 0

  const developerMap = debugState.developerMap || {}
  if (Object.keys(developerMap).length == 0) {
    const devs = Developer.newDevelopers(3)
    devs.forEach(dev => {
      developerMap[dev.id] = dev
    })
  }
  const issueMap = debugState.issueMap || {}
  const taskMap = debugState.taskMap || {}
  const ongoingMap = debugState.ongoingMap || {}
  const state = {
    developerMap,
    issueMap,
    taskMap,
    ongoingMap
  }

  const syncIssue = function() {
    const issue = Issue.newIssue(currentTime)
    if (issue !== null) {
      issueMap[issue.id] = issue
      issue.tasks.forEach(task => {
        taskMap[task.id] = task
      })
    }
  }

  const updateState = function() {
    syncIssue()
    updateTasks(state)
    updateDevs(state)
  }

  const assignDeveloper = function(devId, taskId) {
    const dev = developerMap[devId]
    const task = taskMap[taskId]

    if (dev === undefined) {
      console.error(`developer ${devId} not found`)
      return
    }

    if (task === undefined) {
      console.error(`task ${task.id} not found`)
      return
    }

    if (ongoingMap[devId] !== undefined) {
      console.error(`developer ${dev.name} is busy`)
      return
    }

    if (dev.cooldown > 0) {
      console.error(`developer ${dev.name} is on cooldown state`)
      return
    }

    ongoingMap[devId] = taskId
  }

  const removeDeveloper = function(devId) {
    const dev = state.developerMap[devId]
    if (dev === undefined) {
      console.error(`dev: ${devId} not found!`)
      return
    }

    const taskId = state.ongoingMap[devId]
    if (taskId === undefined) {
      console.error(`dev: ${devId} is not working!`)
      return
    }

    const task = state.taskMap[taskId]
    if (task === undefined) {
      console.error(`task: ${taskId} not found!`)
      return
    }

    if (ongoingMap[devId] !== taskId) {
      console.error(`dev: ${devId} doesn't work on task ${taskId} `)
      return
    }

    delete state.ongoingMap[devId]
    dev.cooldown = 10
  }

  syncIssue()
  return {
    removeDeveloper,
    assignDeveloper,
    nextTick: function() {
      currentTime += 1
      updateState()
    },
    state: function() {
      const ongoingTaskMap = {}
      const developers = Object.values(developerMap).map(dev => {
        const used = !!ongoingMap[dev.id]
        if (used) {
          const taskId = ongoingMap[dev.id]
          ongoingTaskMap[taskId] = dev.id
        }
        return Object.assign({}, dev, { used })
      })
      const issues = Object.values(issueMap).map(issue => {
        const tasks = issue.tasks.map(task => {
          const devId = ongoingTaskMap[task.id] || null
          return Object.assign({}, task, { devId })
        })
        return Object.assign({}, issue, { tasks })
      })

      return {
        currentTime,
        developers,
        issues
      }
    },
    debug: function() {
      return {
        developerMap,
        taskMap,
        issueMap,
        ongoingMap
      }
    }
  }
}

module.exports.newGame = newGame
