const uuidv1 = require('uuid/v1')

const DeveloperGroups = require('./developerGroups')

function newDeveloper({ name, backend, frontend, design }) {
  const id = uuidv1()
  const cooldown = 0
  const cooldownReason = ''
  const avatar = `https://robohash.org/${id}.png?size=60x60&set=set4`
  return {
    id,
    name,
    backend,
    frontend,
    design,
    cooldown,
    cooldownReason,
    avatar
  }
}

function newDevelopers() {
  const group =
    DeveloperGroups[Math.floor(Math.random() * DeveloperGroups.length)]
  return Object.keys(group).map(name => {
    const devAttrs = group[name]
    const { frontend, backend, design } = devAttrs
    return newDeveloper({ name, frontend, backend, design })
  })
}

module.exports.newDevelopers = newDevelopers
