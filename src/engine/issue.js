const uuidv1 = require('uuid/v1')
const MaxStrength = 120

function newIssue(startedAt) {
  const id = uuidv1()
  const duration = 40 + Math.floor(Math.random() * 40)
  const expiredAt = startedAt + duration
  const required = Math.random() > 0.8
  const taskCount = 1 + Math.floor(Math.random() * 3)
  const penalty = 0
  const state = 'created'
  let i = 0
  const tasks = []
  let score = 0
  while (i < taskCount) {
    const taskType = ['frontend', 'backend', 'design'][
      Math.floor(Math.random() * 3)
    ]

    const maximumTick = 10
    const complexityFactor = MaxStrength * maximumTick
    const minimumComplexity = 10
    const complexity = 10 + Math.floor(Math.random() * complexityFactor)
    const difficulty = 1 + Math.round((complexity * 4) / complexityFactor)
    tasks.push(
      newTask({ taskType, expiredAt, complexity, difficulty, issueId: id })
    )
    i += 1
    score += complexity
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

function newTask({ taskType, expiredAt, complexity, difficulty, issueId }) {
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
    difficulty,
    resolved,
    expiredAt,
    taskType,
    consumedTick,
    state
  }
}

module.exports.newIssue = newIssue
