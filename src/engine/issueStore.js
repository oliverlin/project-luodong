class IssueStore {
  constructor() {
    this.issueMap = {}
    this.taskMap = {}
  }

  add(issue) {
    const taskMap = this.taskMap
    this.issueMap[issue.id] = issue
    issue.tasks.forEach(task => {
      taskMap[task.id] = task
    })
  }

  list() {
    return Object.values(this.issueMap)
  }

  findTask(taskId) {
    return this.taskMap[taskId]
  }

  delayedIssues(currentTime) {
    return Object.values(this.issueMap).filter(
      i => currentTime - i.expiredAt > 0
    )
  }
}

export default IssueStore
