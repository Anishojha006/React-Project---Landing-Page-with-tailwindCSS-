import React from 'react'
import Button from './Button'

const Explore = () => {
  return (
    <div className='flex justify-center items-center gap-150'>
        <div className='text-left flex flex-col justify-center gap-15'>
            <h1 className='text-6xl whitespace-nowrap'>What is USD Bloom?</h1>
            <Button name="Explore now"/>
        </div>
        <div className=' text-2xl'>
            <h3>USD Bloom is a yield-bearing stablecoin that helps your capital grow while staying pegged to the U.S. dollar.</h3>
        </div>
    </div>
  )
}

export default Explore