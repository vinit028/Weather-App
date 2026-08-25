import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-950">
          Weather<span className="text-sky-200">Pulse</span>
        </h1>
        <p className='text-white font-semibold'>Know your sky.</p>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
