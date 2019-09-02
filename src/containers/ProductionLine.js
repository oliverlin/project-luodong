import React from 'react'
import Issue from '../components/Issue'


const ProductionLine = ({ issues }) => {
  return (
    issues.map(issue => {
      return (
        <Issue
          key={issue.id}
          id={issue.id}
          tasks={issue.tasks}
          required={issue.required}
          expiredAt={issue.expiredAt} />
      )
    })
  )
}

export default ProductionLine
