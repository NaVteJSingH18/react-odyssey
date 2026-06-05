import React, { useState } from 'react'
import './Advance.css'
const Advance = () => {
    const [num,setNum]=useState({name:"navtej",fear:"nothing"});
    const btnClicked = ()=>{
        setNum(prev=> ({...prev,fear:"dont give a damn"}))
        
    }
  return (
    <div>   
      <h1>{num.fear}</h1>
      <button id='btn' onClick={btnClicked}>click</button>
    </div>
  )
}

export default Advance
