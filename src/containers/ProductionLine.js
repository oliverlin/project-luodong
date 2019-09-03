import React from 'react'
import Issue from '../components/Issue'
import useWindowDimensions from '../components/useWindowDimensions'
import groupBy from 'lodash/groupBy'
import times from 'lodash/times'
import styled from 'styled-components'

// const PRODUCTION_ZONE_PERCENTAGE = 0.7
const OFFSET_HEIGHT = 120
const COLUMNS = 3

const ProductionLine = ({ issues, currentTime, onRemove }) => {
  const { height } = useWindowDimensions()

  const _renderIssues = () => {
    return issues.map(issue => {
      const { expiredAt, startedAt } = issue
      let reversedPercentage
      const totalTime = expiredAt - startedAt
      const remainingTime = expiredAt - currentTime
      reversedPercentage = Math.abs(remainingTime / totalTime)
      if (reversedPercentage > 1) {
        reversedPercentage = 1
      }
      const percentage = 1 - reversedPercentage
      const position = Math.floor((percentage) * (height + OFFSET_HEIGHT))
      return {
        ...issue,
        percentage,
        position
      }
    })
  }

  const issuesWithPosition = _renderIssues()
  const groupIssuesByColumn = (issues) => {
    return groupBy(issuesWithPosition, (issue) => Math.floor(issue.no % COLUMNS))
  }
  const groupedIssues = groupIssuesByColumn(issuesWithPosition)

  const cols = times(COLUMNS, (index) => {
    return (
      <div className='col'>
        <StyledList>
          {
            (groupedIssues[index] || [])
              .filter(issue => issue.expiredAt > currentTime)
              .map(issue => {
                return (
                  <Issue
                    key={issue.no}
                    id={issue.id}
                    tasks={issue.tasks}
                    onRemove={onRemove}
                    percentage={issue.percentage}
                    position={issue.position}
                    required={issue.required}
                    expiredAt={issue.expiredAt} />
                )
              })
          }
        </StyledList>
      </div>
    )
  })
  return (
    <StyledListWrapper>
      <StyledCols>
        {cols}
      </StyledCols>
    </StyledListWrapper>
  )
}

export default ProductionLine

const StyledCols = styled.div`
  display: flex;
  .col{
    flex: 1;
    position: relative;
  }
`

const StyledListWrapper = styled.div`
  margin-top: -120px;
  height: calc(100% + ${OFFSET_HEIGHT}px);
`

const StyledList = styled.div`
  height: calc(100% + ${OFFSET_HEIGHT}px);
  display: flex;
  flex-direction: column;
`
