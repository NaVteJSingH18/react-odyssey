import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const[currentcount,setcount]=useState(0)
    function incrementcount(){
        setcount(currentcount=>currentcount+1)
    }; 
     function decrementcount(){
        setcount(currentcount=>currentcount-1)
    };
  return (
    <div>
      <button onClick={incrementcount}>incrementbutton</button>
      <button onClick={decrementcount}>decrementbutton</button>
      <h1>{currentcount}</h1>
    </div>
  )
}

export default Counter
