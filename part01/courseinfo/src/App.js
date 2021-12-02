import React from 'react'

const course = 'Half Stack application development'

const parts = {
  "part1" : "Fundamentals of React",
  "exercises1" : 10,
  "part2" : "Using props to pass data",
  "exercises2" : 7,
  "part3" : "State of a component",
  "exercises3" : 14,
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <p>
        {props.parts.part1} {props.parts.exercises1}
      </p>
      <p>
        {props.parts.part2} {props.parts.exercises2}
      </p>
      <p>
        {props.parts.part3} {props.parts.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises {props.parts.exercises1 + props.parts.exercises2 + props.parts.exercises3}</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App