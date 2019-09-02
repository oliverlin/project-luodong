const uuidv1 = require('uuid/v1')

function newIssue(startedAt) {
  if (startedAt > 0 && Math.random() > 0.2) {
    return null
  }

  const id = uuidv1()
  const duration = 3 + Math.floor(Math.random() * 8)
  const expiredAt = startedAt + duration
  const required = Math.random() > 0.8
  const taskCount = 1 + Math.floor(Math.random() * 3)
  const score = 100 + Math.floor(Math.random() * duration * 50)
  let i = 0
  const tasks = []
  while (i < taskCount) {
    const taskType = ['frontend', 'backend', 'design'][
      Math.floor(Math.random() * 3)
    ]

    const complexityFactor = duration >= 7 ? 7 : duration
    const complexity =
      10 + 10 * Math.floor(Math.random() * 12 * complexityFactor)
    tasks.push(newTask({ taskType, expiredAt, complexity, issueId: id }))
    i += 1
  }

  return {
    id,
    tasks,
    required,
    startedAt,
    expiredAt
  }
}

function newTask({ taskType, expiredAt, complexity, issueId }) {
  const id = uuidv1()
  const progress = 0
  const state = 'created'
  return {
    id,
    issueId,
    progress,
    complexity,
    expiredAt,
    taskType,
    state
  }
}

module.exports.newIssue = newIssue
