import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import Connect from '../components/Connect'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Projects/>
        <AboutMe/>
        <Connect/>
    </div>
  )
}

export default Home