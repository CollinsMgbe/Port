import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-between items-center px-10 py-6 bg-gray-900 text-white'>
        <h1 className='text-xl font-bold'>Alex Smith</h1>
        <ul className='flex gap-6 text-sm'>
            <li className='hover:text-blue-400 cursor-pointer'>About Me</li>
            <li className='hover:text-blue-400 cursor-pointer'>Resume</li>
            <li className='hover:text-blue-400 cursor-pointer'>Portfolio</li>
            <li className='hover:text-blue-400 cursor-pointer'>Blog</li>
            <li className='hover:text-blue-400 cursor-pointer'>Contact</li>
            <li className='hover:text-blue-400 cursor-pointer'>Extra</li>
            <li className='hover:text-blue-400 cursor-pointer'>Get It Now</li>
        </ul>
    </nav>
  )
}

export default Header