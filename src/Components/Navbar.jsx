import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-96 cursor-pointer '>
      <div>
        <h3 className='flex justify-center items-center'><i class=" ri-add-circle-fill text-4xl active:scale-95 transition-all duration-300 ease-in-out"></i> BloonFi</h3>
    </div>
    <div className='flex justify-center items-center gap-6'>
        <h3 className='cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'>USD bloom</h3>
        <h3 className='cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'>Business</h3>
        <h3 className='cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'>Treasury</h3>
        <h3 className='cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'>Developers</h3>
        <h3 className='cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'>join us</h3>
    </div>
    <Button name="Launch Beta"/>
    </div>
  
    
  )
}

export default Navbar