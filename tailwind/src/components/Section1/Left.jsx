import React from 'react'
import Arrow from './Arrow'
import Herocontent from  './Herocontent'
import Leftcontent from './Leftcontent'
const Left = () => {
  return (
    <div className=' h-140 w-1/4 m-6 p-4 rounded-2xl flex flex-col'>
        <Herocontent  />
      <Leftcontent/>
      <Arrow/>
    </div>
  )
}

export default Left
