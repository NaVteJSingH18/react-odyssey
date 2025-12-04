import React from 'react'
import { useState } from 'react'
const GreetingChanger = () => {
    const[greet,SetGreet]=useState("welcome,firsttime");
    function greeting(){
        SetGreet(greet=>"hello")
    }
  return (
    <div>
        <button onClick={greeting}>greeting</button>
      <h1>{greet}</h1>
    </div>
  )
}

export default GreetingChanger
