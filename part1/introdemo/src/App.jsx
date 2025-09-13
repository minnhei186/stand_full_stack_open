import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const App = () => {
   const course = 'Half Stack application development'
   const part1 = { text: 'Fundamentals of React', exercise: 10}
   const part2 = { text: 'Using props to pass data' , exercise: 7}
   const part3 = { text: 'State of a component', exercise: 14}
return (
  <div>
    <Header text={course} />
    <Content part1={part1} part2={part2} part3={part3}/>
    <Total x={part1.exercise} y={part2.exercise} z={part3.exercise} />
  </div>
)
}

export default App