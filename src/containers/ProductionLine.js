import React from 'react'
import Issue from '../components/Issue'
import useWindowDimensions from '../components/useWindowDimensions'
import groupBy from 'lodash/groupBy'
import times from 'lodash/times'
import styled from 'styled-components'

// const FRAMES = 180
const PRODUCTION_ZONE_PERCENTAGE = 0.7
const ITEM_HEIGHT = 50
const COLUMNS = 3

const ProductionLine = ({ issues, currentTime, onRemove }) => {
  const { height } = useWindowDimensions()

  const _renderIssues = () => {
    return issues.map(issue => {
      const { expiredAt, startedAt } = issue
      let percentage
      const totalTime = expiredAt - startedAt
      const remainingTime = expiredAt - currentTime
      percentage = Math.abs(remainingTime / totalTime)
      console.log(percentage)
      if (percentage > 1) {
        percentage = 1
      }
      const position = Math.floor((1 - percentage) * (height * PRODUCTION_ZONE_PERCENTAGE + ITEM_HEIGHT))
      return {
        ...issue,
        position
      }
    })
  }

  const issuesWithPosition = _renderIssues()
  const groupIssuesByColumn = (issues) => {
    return groupBy(issuesWithPosition, (issue) => Math.floor(issue.no % COLUMNS))
  }
  const groupedIssues = groupIssuesByColumn(issuesWithPosition)

  // const rows = times(FRAMES, filterIssues)
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
                    key={issue.id}
                    id={issue.id}
                    tasks={issue.tasks}
                    onRemove={onRemove}
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

      {/* {
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
      } */}
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
  /* transform: translateY(${0 - ITEM_HEIGHT}px); */
  transform: translateY(-20px);
  background: #fff;
  height: ${100 * PRODUCTION_ZONE_PERCENTAGE}%;
`

const StyledList = styled.div`
  height: 100%;
  display: flex;
  background: green;
  flex-direction: column;
`
