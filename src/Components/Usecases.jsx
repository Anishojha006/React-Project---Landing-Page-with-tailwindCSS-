import React from 'react'

const Usecases = () => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row  items-center justify-between sm:gap-80'>
      <div className='flex flex-col h-100  p-8 gap-3'>
        <p>USD bloom in Action</p>
        <h1 className='text-5xl'>Use cases</h1>
        <p className='w-[60%]'>USD bloom offers a variety of use cases for developers, businesses and treasuries seeking secure and profitable stablecoin integrations</p>
      </div>
      <div className='bg-white rounded-2xl h-100 flex flex-col gap-5 p-5  bg-[url("https://plus.unsplash.com/premium_photo-1681760173250-8b607850a5cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fEJhbmt8ZW58MHx8MHx8fDA%3D")] bg-cover bg-center bg-no-repeat'>
        <h1 className='text-4xl'>Business</h1>
        <p className='w-[60%]'>Boost user engagement by offering USD bloom, a secure fiat-backed stablecoin with high yields, allowing your customers to earn effortlessly on your platform.</p>
        <h3><i class="ri-arrow-right-long-line bg-gray-200 w-2.5 h-2.5  rounded-full p-1"></i> Learn more</h3>
      </div>
    </div>
  )
}

export default Usecases