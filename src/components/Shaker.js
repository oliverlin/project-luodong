import React from 'react'
import { Shake } from 'reshake'

const Shaker = ({ strengthPercentage, children }) => {
  return (
    <Shake
      h={5 * strengthPercentage}
      v={5 * strengthPercentage}
      r={3 * strengthPercentage}
      // dur={300}
      int={38.8}
      max={100 * strengthPercentage}
      fixed={true}
      fixedStop={false}
      freez={true}>
      {children}
    </Shake>
  )
}

export default Shaker
