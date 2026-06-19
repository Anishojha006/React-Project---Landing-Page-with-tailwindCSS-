import React from 'react'
import Button from './Button'
import image from '../assets/image.png'

const Section = () => {
  return (
    <div  className=" w-full h-150 overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6 rounded-4xl" style={{backgroundImage:`url(${image})`}}>
        <div className='flex flex-col  items-center w-5xl gap-8 backdrop-blur-md bg-white/1 p-10 rounded-4xl'>
            <i class="ri-add-circle-fill text-5xl"></i>
        <h1 className='text-5xl font-bold'>Where Money Grows</h1>
        <p className='w-[45%] text-center text-2xl '>A programmable,utility-driven stable token designed for native value accrual and seamless integration into DeFi.</p>
        <Button name="Try it now"/>
        </div>
    </div>
  )
}

export default Section