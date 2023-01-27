
import React from 'react'

const NextStep = ({count,prevStep,nextStep}) => {
  return (
    <div className={count < 4 ? "nextstep-div" : "hide-btn-row"}>
      <button className={count >= 1 ? "back-btn" : "hide-btn"} onClick={prevStep}>Go Back</button>
      <button className="next-btn" onClick={nextStep}>{count == 3 ?  "Confirm" : "Next Step"}</button>
      </div>
  )
}

export default NextStep