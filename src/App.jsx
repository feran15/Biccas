import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Logo from './components/Logo'
import Feautures from './components/Feautures'
import Cab from './components/Cab'
import Section from './components/section'
import Footer from './components/Footer'
import Lower from './components/Lower'
const App = () => {
  return (
    <div className=' bg-gradient-to-r from-green-200 to white-100 font-sans'>
      <Nav />
      <Home/>
      <Logo />
      <Feautures/>
      <Cab />
      <Section/>
      <Footer/>
      <Lower/>
    </div>
  )
}

export default App