import { useState } from 'react'

const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history : {props.allClicks.join()}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    const updatedLeft = left + 1
    setAll(allClicks.concat('L'))
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    const updatedRight = right + 1
    setAll(allClicks.concat('R'))
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text={"left"} />
      {right}
      <Button onClick={handleRightClick} text={"right"} />
      <p>
        {allClicks.join()}
      </p>
      <p>
        {total}
      </p>
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App