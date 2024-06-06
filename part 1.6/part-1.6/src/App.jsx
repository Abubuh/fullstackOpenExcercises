import { useState } from "react"
import Button from "./components/Button"

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
  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button text='good' onClick={handleGoodButton}></Button>
        <Button text='neutral' onClick={handleNeutralButton}></Button>
        <Button text='bad' onClick={handleBadButton}></Button>
      </div>
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  )
}

export default App
