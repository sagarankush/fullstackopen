import React, { useState } from 'react'

const StaticLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const total = props.total
  if (total === 0) return <div><h3>No feedback given</h3></div>
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StaticLine name="Good" value={good} />
          <StaticLine name="Neural" value={neutral} />
          <StaticLine name="Bad" value={bad} />
          <StaticLine name="All" value={total} />
          <StaticLine name="Average" value={((good-bad)/total).toFixed(2)} />
          <StaticLine name="Positive" value={((good*100)/total).toFixed(2) + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const goodHandler = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const badHandler = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  const neutralHandler = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodHandler}>Good</button>
      <button onClick={neutralHandler}>Neutral</button>
      <button onClick={badHandler}>Bad</button>
      <br/>
      <br/>
      <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

export default App