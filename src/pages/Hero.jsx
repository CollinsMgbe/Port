import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-900 h-screen text-white flex flex-col items-center justify-content px-6 text-center'>
        <img
            // src={profileImg}
            alt='Profile'
            className='w-40 h-40 rounded-full border-4 border-gray object-cover mb-6'
        />
        <p className='text-sm text-gray-400'>Web Designer</p>
        <h1 className='text-4xl font-bold mt-2 '>Alex Smith</h1>
        
    </section>
  )
}

export default Hero