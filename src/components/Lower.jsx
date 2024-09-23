import React from 'react'

const Lower = () => {
  return (
    <div className=''>
        <div className='bg-[#161C28] flex justify-around pt-20'>
      <div className='p-20'>
          <h2 className='text-[#54BD95] font-bold text-4xl md:shrink'>Biccas</h2>
          <p>Get started now and try our product</p>
          <form action="">
            <input type="email"
            placeholder='Enter your email Here'
            className='bg-transparent p-2 w-1/2 border-white'
            />
          </form>
        </div>
        <div className='text-white flex mt-20 gap-8 leading-10'>
        <div className='text-center'>
            <h6>Support</h6>
            <ul className='mt-4 opacity-100'>
                <li>Help center</li>
                <li>Account information</li>
                <li>About</li>
                <li>Contact US</li>
            </ul>
        </div>
        <div className='text-center'>
            <h6>Help & Solutions</h6>
            <ul className='mt-4'>
                <li>Talk to support</li>
                <li>Support docs</li>
                <li>System status</li>
                <li>Covid response</li>
            </ul>
        </div>
        <div className='text-center'>
            <h6>Product</h6>
            <ul className='mt-4'>
                <li>Update</li>
                <li>Security</li>
                <li>Beta test</li>
                <li>Pricing Product</li>
            </ul>
        </div>
        </div>
        </div>
        <div className='bg-[#161C28] p-8 flex justify-between'>
        <p className='text-white'>2022 Biccas inc.Copyright and rights reserved</p>
        <p className='text-white'>Terms and condition .Privacy Policy</p>
        </div>
    </div>
  )
}

export default Lower
