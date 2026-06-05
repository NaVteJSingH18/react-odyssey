import React from 'react'


import Message from './Message'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Header from './components/Header'
import Counter from './components/Counter'
import GreetingChanger from './components/GreetingChanger'
function App(){
  return <div>
    <NavBar/>
    <GreetingChanger/>
    <Header/>
    <Message/>
  <Counter/>
  <Footer/>
  </div>
}

export default App
