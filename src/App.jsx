import React from 'react'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Explore from './Components/Explore'
import Section2 from './Components/Section2'

const App = () => {
  return (
    <div className='p-3 m-3'>
    <header className='pt-1'>
      <Navbar />
    </header>
    <section className='pt-8'>
      <Section  />
    </section>
    <section className='mt-20'>
      <Explore/>
    </section>
    <section className='mt-20 '>
      <Section2/>
    </section>
    </div>
  )
}

export default App