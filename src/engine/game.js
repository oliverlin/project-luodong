const Developer = require('./developer')
const DeveloperStore = require('./developerStore')
const IssueGenerator = require('./issueGenerator')
const IssueStore = require('./issueStore')

class Game {
  constructor(developers) {
    this.developerStore = new DeveloperStore(developers)
    this.currentTime = 0
    this.issueGenerator = new IssueGenerator(6)
    this.issueStore = new IssueStore()
    this.syncIssue()
  }

  assignDeveloper(devId, taskId) {
    const task = this.issueStore.findTask(taskId)
    if (task === undefined) {
      console.error(`task ${taskId} not found`)
      return
    }

    this.developerStore.assignWork(devId, taskId)
  }

  removeDeveloper(devId) {
    const dev = this.developerStore.find(devId)
    if (dev === undefined) {
      console.error(`dev ${devId} not found`)
      return
    }

    this.developerStore.releaseDeveloper(devId)
    dev.cooldown = 10
  }

  nextTick() {
    this.currentTime += 1
    this.syncIssue()
    this.updateTasks()
    this.updateDevs()
    this.updateIssues()
  }

  state() {
    const ongoingTaskMap = {}
    const queryDeveloperTaskId = this.developerStore.queryDeveloperTaskId.bind(
      this.developerStore
    )
    const developers = this.developerStore.list().map(dev => {
      const taskId = queryDeveloperTaskId(dev.id)
      const used = !!taskId
      if (used) {
        ongoingTaskMap[taskId] = dev.id
      }
      return Object.assign({}, dev, { used })
    })

    const issues = this.issueStore.list().map(issue => {
      const tasks = issue.tasks.map(task => {
        const devId = ongoingTaskMap[task.id] || null
        return Object.assign({}, task, { devId })
      })
      return Object.assign({}, issue, { tasks })
    })

    const score = this.computeScore(issues)

    return {
      currentTime: this.currentTime,
      developers,
      issues,
      score
    }
  }

  syncIssue() {
    const issue = this.issueGenerator.generate(this.currentTime)
    // console.log(issue)
    if (!!issue) {
      this.issueStore.add(issue)
    }
  }

  updateTasks() {
    const updateTask = this.updateTask.bind(this)
    this.developerStore.workingDeveloperRecords().forEach(record => {
      const { developer, taskId } = record
      const task = this.issueStore.findTask(taskId)
      if (task === undefined) {
        console.error(`task: ${taskId} not found!`)
        return
      }
      updateTask(developer, task)
    })
  }

  updateTask(dev, task) {
    // Each task need at lesat **minimumTick** tick to complete
    const minimumTick = 6

    task.resolved += dev[task.taskType]
    task.consumedTick += 1
    if (task.consumedTick >= minimumTick && task.resolved >= task.complexity) {
      task.state = 'completed'
      task.progress = 1
      this.developerStore.releaseDeveloper(dev.id)
    } else {
      const progress1 = task.consumedTick / minimumTick
      const progress2 = task.resolved / task.complexity
      task.progress = progress1 < progress2 ? progress1 : progress2
    }
  }

  updateDevs() {
    this.developerStore.list().forEach(dev => {
      if (dev.cooldown > 0) {
        dev.cooldown = dev.cooldown - 1
      }
    })
  }

  updateIssues() {
    const currentTime = this.currentTime
    this.issueStore.list().forEach(issue => {
      if (issue.state !== 'completed') {
        const tasks = issue.tasks
        const uncompletedTasks = tasks.filter(t => t.state !== 'completed')
        if (uncompletedTasks.length == 0) {
          issue.state = 'completed'
        } else {
          const delay = currentTime - issue.expiredAt
          const issueProgress =
            tasks.reduce((memo, task) => {
              return memo + task.progress
            }, 0) / tasks.length
          if (issue.required) {
            if (delay === 1) {
              issue.penalty = Math.floor(issue.score * (1 - issueProgress))
            }
          }
        }
      }
    })

    const delayedIssues = this.issueStore.delayedIssues(currentTime)

    const ongoingTaskMap = this.developerStore
      .workingDeveloperRecords()
      .reduce((memo, record) => {
        const { developer, taskId } = record
        memo[taskId] = developer.id
        return memo
      }, {})

    const releaseDeveloper = this.developerStore.releaseDeveloper.bind(
      this.developerStore
    )
    delayedIssues.forEach(issue => {
      issue.tasks.forEach(task => {
        if (ongoingTaskMap[task.id]) {
          const devId = ongoingTaskMap[task.id].devId
          releaseDeveloper(devId)
        }
      })
    })
  }

  computeScore(issues) {
    return issues.reduce((memo, issue) => {
      let score = issue.penalty * -1
      if (issue.state === 'completed') {
        score += issue.score
      }
      return memo + score
    }, 0)
  }
}

function newGame() {
  const devs = Developer.newDevelopers()
  const game = new Game(devs)
  return {
    assignDeveloper: game.assignDeveloper.bind(game),
    removeDeveloper: game.removeDeveloper.bind(game),
    nextTick: game.nextTick.bind(game),
    state: game.state.bind(game)
  }
}

module.exports.newGame = newGame
