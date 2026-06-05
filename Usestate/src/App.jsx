import React, { useState } from 'react'
import Advance from './Advance'
import './App.css'
export default function App() {
  const [num,setnum]=useState(0)

   function increase(){
      setnum(num+1)
    }
    function decrease(){
      setnum(num-1)
    }
    function jumpby5(){

      setnum(num=>num+5)
    }
    function set0(){
      setnum(0)
    }
  return (
    <div>
      <h1 >{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jumpby5}>jumpby5</button>
      <button onClick={set0}>set0</button>
      <Advance/>
    </div>
  )
}
