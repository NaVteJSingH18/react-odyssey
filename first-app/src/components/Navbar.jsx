import React ,{useEffect} from 'react'

import './Navbar.css'
const Navbar = ({color}) => {
  useEffect(() => {
    alert("hey i will run on every render")
    
  })
  useEffect(() => {
    alert("hey i will only once")
    
  },[])

  useEffect(() => {
    alert("hey color was changed")
    
  },[color])
  return (
    <div>
      <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
