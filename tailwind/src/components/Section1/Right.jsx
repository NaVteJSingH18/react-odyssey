import React from 'react' 
import Rightcard from './Rightcard'
const Right = (props) => {
  return  (<div className='h-full flex overflow-x-auto  flex-nowrap gap-3 p-6 w-2/3'>
  {props.users.map((elem)=>{
    return <Rightcard
           key={elem.id} 
           img={elem.img} 
           tag={elem.tags} 
           id={elem.id} /> 
  })}
  </div>
  )
}
export default Right
