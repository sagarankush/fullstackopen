import React from 'react'

const course = 'Half Stack application development'

const parts = {
  "part1" : {
      "name" : "Fundamentals of React",
      "exercises" : 10,
    },
  "part2" : {
    "name" : "Using props to pass data",
    "exercises" : 7,
  },
  "part3" : {
    "name" : "State of a component",
    "exercises" : 14,
  }
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
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
      <Part part={parts.part1} />
      <Part part={parts.part2} />
      <Part part={parts.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts.part1.exercises + props.parts.part2.exercises + props.parts.part3.exercises}</p>
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