import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around bg-[#161C28] mt-8'>
        <div className=''>
      <h5 className='text-white p-8 text-3xl font-bold'>People are saying <br /> About Dowith</h5>
      <p className=' ms-4 opacity-100'>Everything  you need to accept to payment and grow <br /> your Money of manage anywhere on planet</p>
        <img className='ms-4 mt-12' src="/Group 212.png" alt="" />
        <p className='ms-4 mt-8'>I am very helped by this E-wallet application, my <br /> days are very easy to use this application and it's very
         <br /> helpful im my life,even i can pay a short time</p>
         <p className='ms-4 mt-8'>_Aria Zinario</p>
        </div>
      <div className='bg-[#222938] w-1/2 p-8 mt-4 rounded-lg'>
        <form action="" method="get">
        <div className="p-4">
          <label htmlFor="email" className="text-lg font-bold text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="p-4 relative">
          <label htmlFor="password" className="text-lg font-bold text-white">
            Message
          </label>
          <textarea
            name="password"
            id="password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="What are you to say?"
            type='password'
          />
          </div>
          <div className="p-4">
          <button className="w-full p-2 text-xl bg-[#54BD95] text-white font-bold rounded-md hover:text-2xl">
            Login
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Footer
