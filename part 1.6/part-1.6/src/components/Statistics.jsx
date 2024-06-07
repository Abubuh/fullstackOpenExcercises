import React from 'react'
import StatiscticValue from './StatiscticValue'

const Statistics = ({good, neutral, bad, hasValues, total}) => {
  return (
          <div>
        <h2>statistics</h2>
        <StatiscticValue text='Good' value={good}/>
        <StatiscticValue text='Neutral' value={neutral}/>
        <StatiscticValue text='Bad' value={bad}/>
        <StatiscticValue text='All' value={total}/>
        <StatiscticValue text='Average' value={hasValues === false ? 0 : ((good - bad)/ total).toFixed(2) }/>
        <StatiscticValue text='Positive' value={hasValues === false ?  0 : (good / (good + neutral + bad) *100).toFixed(2) + '%'}/>
      </div>
  )
}

export default Statistics