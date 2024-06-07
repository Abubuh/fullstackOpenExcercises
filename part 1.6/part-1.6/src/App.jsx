import { useState } from "react"
import Button from "./components/Button"
import StatiscticValue from "./components/StatiscticLine"
import Statistics from "./components/Statistics"

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {
    const plus = good + 1
    setGood(plus)
  }
  const handleNeutralButton = () => {
    const plus = neutral + 1
    setNeutral(plus)
  }
  const handleBadButton = () => {
    const plus = bad + 1
    setBad(plus)
  }
  const total = good + neutral + bad
  const hasValues = good !== 0 || neutral !== 0 || bad !== 0
  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button text='good' onClick={handleGoodButton}></Button>
        <Button text='neutral' onClick={handleNeutralButton}></Button>
        <Button text='bad' onClick={handleBadButton}></Button>
      </div>
      { hasValues === true ? 
        <Statistics good={good} neutral={neutral} bad={bad} total={total} hasValues={hasValues}></Statistics>
        : "No feedback given"
    }
    </div>
  )
}

export default App
