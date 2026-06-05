import React from 'react'

const App = () => {
  const innerChanging = (val)=>{
console.log(val)
  }
  return (
    <div>
      <input 
      className='btn' 
      onChange={(elem)=>{

          innerChanging(elem.target.value)
      }} 
      type='text'
      placeholder='write'> 
      </input>
    </div>
  )
}

export default App
