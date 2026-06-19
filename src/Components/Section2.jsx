import React from 'react'

const Section2 = () => {
  return (
    <div className='flex justify-center align-center gap-20'>   
        <div className='flex flex-col justify-between  bg-blue-100 text-[#2C2645] p-15 rounded-2xl gap-10 w-[60%] h-66 '>
            <h1 className='text-3xl'>Capital that grows</h1>
            <p className='w-[85%]'>Earn passive income as your stablecoins are deployed into high-performing DeFi protocols.</p>
        </div>

        <div className='bg-black text-white rounded-2xl p-10 flex flex-col justify-between h-66'>
          <div>
            <h1 className='text-3xl'>Always liquid,</h1>
          <h1 className='text-3xl'>Always stable</h1>
          </div>
          <p>
            Stay fully dollar-pegged with instant access to your funds-no lockups or delays
          </p>
        </div>
        <div className='bg-black text-white  rounded-2xl p-10 flex flex-col justify  gap-10 h-66'>
          <div>
            <h1 className='text-3xl'>100%</h1>
          <h1 className='text-3xl'>hands-free</h1>
          </div>
          <p>
            Stay fully dollar-pegged with instant access to your funds-no lockups or delays
          </p>
        </div>
    </div>
  )
}

export default Section2