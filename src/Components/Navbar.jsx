import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-96'>
      <div>
        <h3>BloonFi</h3>
    </div>
    <div className='flex justify-center items-center gap-6'>
        <h3>USD bloom</h3>
        <h3>Business</h3>
        <h3>Treasury</h3>
        <h3>Developers</h3>
        <h3>join us</h3>
    </div>
    <Button name="Launch Beta"/>
    </div>
  
    
  )
}

export default Navbar