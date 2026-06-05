import React from 'react'
import Left from './Left'
import Right from './Right'


const Page1content = (props) => {
  return (
    <div className='w-full flex'>
      <Left/>
      <Right users={props.users}/>
    </div>
  )
}

export default Page1content
