import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* CONTAINER */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-purple-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Dovran Rustamov
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm FrontEnd Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am FrontEnd Developer specializing in building. Currently, I'm
          focused on building response FrontEnd Web Applications
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 hover: border-pink-600'>
            Wiew Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
