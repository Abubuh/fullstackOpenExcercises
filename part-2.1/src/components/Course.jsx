import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    let total = 0 
    course.parts.map((part) => {
         total += part.exercises
    })
    return (
    <div>
        <Header name={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total total={total}></Total>
    </div>
  )
}

export default Course