class DeveloperStore {
  constructor(developers) {
    this.developerMap = developers.reduce((memo, dev) => {
      memo[dev.id] = dev
      return memo
    }, {})
    this.devTaskMap = {}
  }

  assignWork(devId, taskId) {
    const dev = this.developerMap[devId]
    if (dev === undefined) {
      console.error(`developer ${devId} not found`)
      return
    }

    if (this.devTaskMap[devId] !== undefined) {
      console.error(`developer ${dev.name} is busy`)
      return
    }

    if (dev.cooldown > 0) {
      console.error(`developer ${dev.name} is on cooldown state`)
      return
    }

    this.devTaskMap[devId] = taskId
  }

  releaseDeveloper(devId) {
    delete this.devTaskMap[devId]
  }

  workingDeveloperRecords() {
    const developerMap = this.developerMap
    const devTaskMap = this.devTaskMap
    return Object.keys(this.devTaskMap).map(devId => {
      const developer = developerMap[devId]
      const taskId = devTaskMap[devId]

      return {
        developer,
        taskId
      }
    })
  }

  list() {
    return Object.values(this.developerMap)
  }

  find(devId) {
    return this.developerMap[devId]
  }

  queryDeveloperTaskId(devId) {
    return this.devTaskMap[devId]
  }
}

module.exports = DeveloperStore
