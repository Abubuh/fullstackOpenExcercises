import React from 'react'
import StatiscticLine from './StatiscticLine'

const Statistics = ({good, neutral, bad, hasValues, total}) => {
  return (
          <div>
        <h2>statistics</h2>
        <StatiscticLine text='Good' value={good}/>
        <StatiscticLine text='Neutral' value={neutral}/>
        <StatiscticLine text='Bad' value={bad}/>
        <StatiscticLine text='All' value={total}/>
        <StatiscticLine text='Average' value={hasValues === false ? 0 : ((good - bad)/ total).toFixed(2) }/>
        <StatiscticLine text='Positive' value={hasValues === false ?  0 : (good / (good + neutral + bad) *100).toFixed(2) + '%'}/>
      </div>
  )
}

export default Statistics