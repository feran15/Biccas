import React from 'react'

const Nav = () => {
  return (
    <nav className='md-shrink'>
      <div className='p-3 flex justify-around'>
        <div>
          <h2 className='text-[#54BD95] font-bold text-4xl md:shrink'>Biccas</h2>
        </div>
        <div>
          <ul className="nav-list flex gap-5 p-2">
            <li>Home</li>
            <li className='opacity-30'>Product</li>
            <li className='opacity-30'>FAQ</li>
            <li className='opacity-30'>Blog</li>
            <li className='opacity-30'>About Us</li>
          </ul>
        </div>
        <div className='flex p-2 gap-5'>
          <p className='opacity-30'>Login</p>
          <button className='bg-[#54BD95] px-3 py-2 border-none rounded-lg text-white mt-[-8px]'>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
