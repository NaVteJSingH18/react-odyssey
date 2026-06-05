import React, { useState } from 'react'

const App = () => {
  const [title,settitle]=useState("")
  const submitted=(e)=>{
    e.preventDefault();
    console.log("form submitted by ",title)
    settitle("")
  } 
  return (
    <div >
      <form onSubmit={(e)=>{
          submitted(e)
      }
        }>
        <input type="text"  
        value={title}
        placeholder={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}  
        />
    

        <button type='submit'>submit</button>
      </form>
    </div>
  )
} 
 
export default App
