import React from 'react'

const Socialmedia = () => {
  return (
    <div className='flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between items-center'>
        <h2>You can connect on  <b>Social Media</b> with us </h2>
        <div className='flex  justify-center items-center sm:gap-50 gap-10 '>
          <i class="ri-facebook-circle-fill sm:text-6xl text-3xl  transition-all duration-200 active:scale-95"></i>
          <i class="ri-messenger-fill sm:text-6xl text-3xl transition-all duration-200 active:scale-95"></i>
          <i class="ri-instagram-line sm:text-6xl text-3xl transition-all duration-200 active:scale-95"></i>
          <i class="ri-linkedin-fill sm:text-6xl text-3xl transition-all duration-200 active:scale-95"></i>
        </div>
    </div>
  )
}

export default Socialmedia