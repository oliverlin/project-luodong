import React from 'react'
import Issue from '../components/Issue'
import useWindowDimensions from '../components/useWindowDimensions'
import groupBy from 'lodash/groupBy'
import times from 'lodash/times'
import styled from 'styled-components'

// const PRODUCTION_ZONE_PERCENTAGE = 0.7
const OFFSET_HEIGHT = 80
const ITEM_HEIGHT = 50
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
            // rows
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
  margin-top: ${1 - OFFSET_HEIGHT};
  background: #fff;
  height: 100%;
`

const StyledList = styled.div`
  height: 100%;
  display: flex;
  background: green;
  flex-direction: column;
`
