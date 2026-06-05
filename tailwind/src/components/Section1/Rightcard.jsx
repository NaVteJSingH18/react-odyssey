import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className="border-none h-[560px] w-1/3 m-6 rounded-4xl overflow-hidden relative flex flex-col shrink-0">
      

      <img 
        src={props.img} 
        alt="card background"
        className="absolute inset-0 w-full h-full object-cover"
      />


      <div className="absolute inset-0 bg-black/40"></div>

 
      <div className="relative z-10 p-4 flex flex-col h-full">
        <Rightcardcontent tag={props.tag} id={props.id}/>
      </div>

    </div>
  )
}

export default Rightcard