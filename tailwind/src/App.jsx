import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {
  const users=[
    {
      id:1,
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8fDA%3D',
      intro:'',
      tags:'Satisfied'
    },
    {id:2,
      img:'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tags:'Underserved'
    },
    {id:3,
      img:'https://images.unsplash.com/photo-1546979859-b7d45d499dd6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tags:'Underbanked'
    }
  ]
  return (
    <div className='  w-full h-233 '>
      
   <Section1 users={users}/>
    </div>
  )
} 

export default App
