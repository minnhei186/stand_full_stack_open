import { useState } from 'react'

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
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <p>
        {allClicks.join()}
      </p>
      <p>
        {total}
      </p>
    </div>
  )
}

export default App