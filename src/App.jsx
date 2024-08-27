import { useState } from "react"

import Cell from "./Components/Cell"

function App() {
  const [cells,setCells] = useState(["","","","","","","","",""])

  return (
  <div className="app">
    <div className="gameboard">
      {cells.map(cell=>{
        <Cell cell={cell}/>
      })}
    </div>
  </div>
  )
}

export default App
