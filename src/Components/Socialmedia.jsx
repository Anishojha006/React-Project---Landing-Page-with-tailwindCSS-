import React from 'react'

const Socialmedia = () => {
  return (
    <div className='flex justify-between items-center'>
        <h2>You can connect on  <b>Social Media</b> with us </h2>
        <div className='flex justify-center items-center gap-50 '>
          <i class="ri-facebook-circle-fill text-6xl transition-all duration-200 active:scale-95"></i>
          <i class="ri-messenger-fill text-6xl transition-all duration-200 active:scale-95"></i>
          <i class="ri-instagram-line text-6xl transition-all duration-200 active:scale-95"></i>
          <i class="ri-linkedin-fill text-6xl transition-all duration-200 active:scale-95"></i>
        </div>
    </div>
  )
}

export default Socialmedia