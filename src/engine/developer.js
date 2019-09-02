const uuidv1 = require('uuid/v1')

const names = [
  'Ben',
  'James',
  'Oliver',
  'Bruce',
  'Joe',
  'Leo',
  'Andy',
  'Sylvia',
  'Joyce',
  'Mary'
]

function newDeveloper() {
  const id = uuidv1()
  const name = names[Math.floor(Math.random() * names.length)]
  const backend = 10 + 10 * Math.floor(Math.random() * 12)
  const frontend = 10 + 10 * Math.floor(Math.random() * 12)
  const design = 10 + 10 * Math.floor(Math.random() * 12)
  const cooldown = 0
  return {
    id,
    name,
    backend,
    frontend,
    design,
    cooldown
  }
}

function newDevelopers(count) {
  const devs = []
  let i = 0
  while (i < count) {
    devs.push(newDeveloper())
    i = i + 1
  }
  return devs
}

module.exports.newDevelopers = newDevelopers
