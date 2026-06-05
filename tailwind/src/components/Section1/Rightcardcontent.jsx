import React from 'react'
import { ArrowRight } from 'lucide-react'
const Rightcardcontent = (props) => {
  return (
    <div className='flex flex-col h-full border-none p-4'>
      <h2 className=' text-1xl p-3   bg-white text-black  w-12 h-12 text-center border-none border rounded-4xl mr-3'>{props.id}</h2>
      <div className=' mt-auto text-gray-300'>
      <p className='p-2 pt-4    mt-auto  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis voluptatem sit unde hic deleniti vitae similiqueconsequatur error dolor.</p>
        <div className= 'w-full h-30    flex justify-between  '>
                <h4 className='border-none font-bold text-amber-200 bg-blue-700  mt-10 mb-10 w-1/2 flex items-center justify-center  rounded-3xl  '>{props.tag}</h4> <ArrowRight className='font-bold  h-18  border-none bg-blue-700  p-1 text-gray-300 mt-5 mb-5  w-1/5 flex items-center justify-center   rounded-full '/>
        </div>
        </div>
    </div>
  )
}

export default Rightcardcontent
