import { useState } from "react"
import Cell from "./Components/Cell"

function App() {
  const [cells,setCells] = useState(["","","","","","","","",""])
  const [go,setGo] = useState('circle')
  const [winningMessage,setWinningMessage] = useState(null)

  const message = 'it is now '+ go + "'s go"
  return (
  <div className="app">
    <h1>Tic Tac Toe</h1>
    <div className="gameboard">
      {cells.map((cell,index)=>
        <Cell cell={cell} key={index} id={index} go={go} setGo={setGo}/>
      )}
    </div>
    <p className="info">{winningMessage || message}</p>
  </div>
  )
}

export default App
