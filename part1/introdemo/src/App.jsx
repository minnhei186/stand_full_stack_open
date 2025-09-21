import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
 console.log('rendering with counter value', counter)
  //const handleClick = () => {
  //  console.log('clicked')
  //}
  const increaseByone = () =>{
     console.log('increasing, value before', counter)
     setCounter(counter + 1)
  }
  const decreseByone = () =>{
    console.log('increasing, value before', counter)
    setCounter(counter-1);
}

  const setToZero = () => {
     console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <>
    <Display counter={counter}/>
    <Button onClick={increaseByone} text='plus' />
    <Button onClick={setToZero} text='reset' />
    <Button onClick={decreseByone} text='minu' />
    </>
  )
}

export default App