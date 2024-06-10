import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    const totalSum = course.parts.reduce(
        (number, currentValue) => number + currentValue.exercises,
        0,
      );
    return (
    <div>
        <Header name={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total total={totalSum}></Total>
    </div>
  )
}

export default Course