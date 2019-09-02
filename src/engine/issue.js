const uuidv1 = require('uuid/v1')
const MaxStrength = 120

function newIssue(startedAt) {
  const id = uuidv1()
  const duration = 60 + Math.floor(Math.random() * 120)
  const expiredAt = startedAt + duration
  const required = Math.random() > 0.8
  const taskCount = 1 + Math.floor(Math.random() * 3)
  const score = 100 + Math.floor(Math.random() * duration * 50)
  const penalty = 0
  const state = 'created'
  let i = 0
  const tasks = []
  while (i < taskCount) {
    const taskType = ['frontend', 'backend', 'design'][
      Math.floor(Math.random() * 3)
    ]

    const complexityFactor = 10
    const complexity =
      10 + Math.floor(Math.random() * MaxStrength * complexityFactor)
    tasks.push(newTask({ taskType, expiredAt, complexity, issueId: id }))
    i += 1
  }

  return {
    id,
    tasks,
    required,
    startedAt,
    expiredAt,
    score,
    penalty,
    state
  }
}

function newTask({ taskType, expiredAt, complexity, issueId }) {
  const id = uuidv1()
  const progress = 0
  const resolved = 0
  const state = 'created'
  const consumedTick = 0
  return {
    id,
    issueId,
    progress,
    complexity,
    resolved,
    expiredAt,
    taskType,
    consumedTick,
    state
  }
}

module.exports.newIssue = newIssue
