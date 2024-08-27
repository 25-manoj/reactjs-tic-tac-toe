import { useEffect, useState } from "react"
import Cell from "./Components/Cell"

function App() {
  const [cells,setCells] = useState(["","","","","","","","",""])
  const [go,setGo] = useState('circle')
  const [winningMessage,setWinningMessage] = useState(null)

  const message = 'it is now '+ go + "'s go"

  const checkScore = () =>{
    const winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      winningCombo.forEach(array => {
        let circleWins = array.every(cell=>cells[cell]==='circle')
        if(circleWins){
          setWinningMessage('Circle Wins')
          return
        }})
        winningCombo.forEach(array => {
          let crossWins = array.every(cell=>cells[cell]==='cross')
          if(crossWins){
            setWinningMessage('Cross Wins')
            return
          }})
}

useEffect(()=>{
  checkScore()
},[cells])

  return (
  <div className="app">
    <h1>Tic Tac Toe</h1>
    <div className="gameboard">
      {cells.map((cell,index)=>
        <Cell 
        cell={cell} 
        key={index} 
        id={index} 
        go={go} 
        setGo={setGo} 
        setCells={setCells} 
        cells={cells}
        winningMessage={winningMessage}/>
      )}
    </div>
    <p className="info">{winningMessage || message}</p>
  </div>
  )
}

export default App
