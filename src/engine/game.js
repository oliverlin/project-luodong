const Developer = require('./developer')
const DeveloperStore = require('./developerStore')
const IssueGenerator = require('./issueGenerator')
const IssueStore = require('./issueStore')

class Game {
  constructor(developers, duration) {
    this.developerStore = new DeveloperStore(developers)
    this.currentTime = 0
    this.duration = duration
    this.issueGenerator = new IssueGenerator(4)
    this.issueStore = new IssueStore()
    this.syncIssue()
    this.scoreSeries = [this.computeScore(this.issueStore.list())]
  }

  assignDeveloper(devId, taskId) {
    const task = this.issueStore.findTask(taskId)
    if (task === undefined) {
      console.error(`task ${taskId} not found`)
      return
    }

    this.developerStore.assignWork(devId, taskId)
  }

  removeDeveloper({ devId, reason = 'manual', cooldown = 10 }) {
    const dev = this.developerStore.find(devId)
    if (dev === undefined) {
      console.error(`dev ${devId} not found`)
      return
    }

    this.developerStore.releaseDeveloper(devId)
    dev.cooldown = cooldown
    dev.cooldownReason = reason
  }

  nextTick() {
    this.currentTime += 1
    this.syncIssue()
    this.updateTasks()
    this.updateDevs()
    this.updateIssues()
    this.randomRelease()
    this.scoreSeries.push(this.computeScore(this.issueStore.list()))
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
    const remainingTicks = this.duration - this.currentTime
    const scoreSeries = this.scoreSeries
    let star = 0
    if (score >= 15000) {
      star = 3
    } else if (score >= 10000) {
      star = 2
    } else if (score >= 5000) {
      star = 1
    }

    return {
      currentTime: this.currentTime,
      developers,
      issues,
      score,
      remainingTicks,
      scoreSeries,
      star
    }
  }

  syncIssue() {
    const issue = this.issueGenerator.generate(this.currentTime)
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
        if (dev.cooldown === 0) {
          dev.cooldownReason = ''
        }
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
          if (delay === 1) {
            issue.state = 'delayed'
            if (issue.required) {
              issue.penalty = issue.score * 1.5
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

  randomRelease() {
    const p = 0.08
    const removeDeveloper = this.removeDeveloper.bind(this)
    const reasonMap = {
      sick: 5,
      vacation: 10,
      marriage: 10,
      conference: 3,
      jail: 10
    }
    const reasons = Object.keys(reasonMap)
    if (p >= Math.random()) {
      const records = this.developerStore.workingDeveloperRecords()
      if (records.length > 0) {
        const { developer } = records[0]
        const devId = developer.id
        const reason = reasons[Math.floor(Math.random() * reasons.length)]
        const cooldown = reasonMap[reason]
        removeDeveloper({
          devId: devId,
          reason: reason,
          cooldown: cooldown
        })
      }
    }
  }
}

function newGame(duration = 120) {
  const devs = Developer.newDevelopers()
  const game = new Game(devs, duration)
  return {
    assignDeveloper: game.assignDeveloper.bind(game),
    removeDeveloper: function(devId) {
      game.removeDeveloper.bind(game)({ devId })
    },
    nextTick: game.nextTick.bind(game),
    state: game.state.bind(game)
  }
}

module.exports.newGame = newGame
