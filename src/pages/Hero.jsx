import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-900 h-screen text-white flex flex-col items-center justify-content px-6 text-center'>
        <div className=''>
        <img
            // src={profileImg}
            alt='Profile'
            className='w-40 h-40 rounded-full border-4 border-gray object-cover mb-6'
        />
        </div>
        <p className='text-sm text-gray-400'>Web Designer</p>
        <h1 className='text-4xl font-bold mt-2 '>Alex Smith</h1>
        <p className='max-w-lg text-gray-400 mt-4'>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
        <div className='flex gap-4 mt-6'>
            <button>
                Download CV
            </button>
        </div>
        
    </section>
  )
}

export default Hero