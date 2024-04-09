import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (event) => {
    setUndid([])
    const newCircle = {
      clientX: event.clientX - 9,
      clientY: event.clientY - 9
    }
    console.log(newCircle)
    setList((prev) => [...prev, newCircle])
  }

  const stopPropagation = (event) =>{
    event.stopPropagation();
  }

  const handleUndo = (event) =>{
    stopPropagation(event);
    if(list.length === 0){
      return
    }

    const lastItem = list[list.length - 1]
    setUndid((prev) => [...prev, lastItem])
    console.log(undid)

    setList((prev) => {
      const newList = [...prev].slice(0,-1);
      return newList
    })
  }

  const handleRedo = (event) => {
    stopPropagation(event)
    if(undid.length === 0){
      console.log('tampa')
      return
    }

    const recoveredCircle = undid[undid.length - 1]
    console.log(recoveredCircle)
    setUndid((prev) => {
      const newArr = [...prev].slice(0,-1);
      return newArr;
    })

    setList((prev) => [...prev, recoveredCircle])
  }

  return (
    <div id='canva' onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      {list.map((item) => (
        <span onClick={stopPropagation} className='circle' style={{left: item.clientX, top: item.clientY}}></span>
      ))}
    </div>
  )
}

export default App
