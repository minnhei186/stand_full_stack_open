import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  //const handleClick = () => {
  //  console.log('clicked')
  //}
  const increaseByone = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <>
    <div>{counter}</div>
    <button onClick={increaseByone}>plus</button>
    <button onClick={setToZero}>reset</button>
    </>
  )
}

export default App