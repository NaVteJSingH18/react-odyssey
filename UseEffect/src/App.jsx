import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)


    useEffect(()=>{
      console.log("num is changed")
      
    },[num])
    
  
  return (
    <div className='bg-black w-full h-screen text-white '>
      <button className='m-3 p-3 border rounded-sm' onMouseEnter={()=>{
        setNum(num+1)
      }} >change num {num}</button>
      <button className='m-3 p-3 border rounded-sm' onMouseLeave={()=>{
        setNum2(num2-1)
      }}>change num2 {num2}</button>
    </div>
  )
}

export default App
