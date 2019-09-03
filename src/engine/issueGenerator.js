const Issue = require('./issue')

class IssueGenerator {
  constructor(minimumNewIssueCycle) {
    this.seed = 1
    this.minimumNewIssueCycle = minimumNewIssueCycle
    this.no = 0
  }

  generate(currentTime) {
    if (this.seed > Math.random()) {
      const issue = Issue.newIssue(currentTime)
      issue.no = this.no
      this.no += 1
      this.seed = this.minimumNewIssueCycle * -0.1
      return issue
    } else {
      this.seed += 0.1
      return null
    }
  }
}

export default IssueGenerator
