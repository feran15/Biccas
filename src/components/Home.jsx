import React from 'react'
import { GoPlay } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
const Home = () => {
  // const img = '// Image: charlie-green-3JmfENcL24M-unsplash)'
  return (
    <div className='flex justify-around overflow-x-hidden p-10'>
      <div className='p-20'>
        <h3 className='font-bold text-6xl leading-tight'>We're here to <br /> increase your <br /> Productivity</h3>
        <img src="/Vector 32.png" className='mt-4  w-[70%]' alt="" />

        <p className='font-bold  mt-5 leading-[30px] text-[18px]'>Let's make your work more organize and easily using <br /> the Taskio Dashboard with many of the latest <br />
         feautures in managing work every day</p>
         <span className='flex gap-4'>
         <button className='text-white bg-[#54BD95] p-3 rounded-full'>Try free trial</button>
         <span className='flex mt-4 gap-2.5'>
         <GoPlay />
         <p>View Demo</p>
         </span>
         </span>
      </div>
      <div>
        <img src="/Frame 46.png" alt="" />
          <img className='absolute mt-[-18%] ms-[300px]' src="/Frame 45.png" alt="" />
          <FaCheck  className='mt-[-360px] absolute ms-[-41px] '/>
          <img className='mt-[-375px] ms-[-55px]' src="/Rectangle 34.png" alt="" />
          <img className='ms-[45vh] mt-[50vh]' src="/Group 48.png " alt="" />
          <img className='ms-[62vh] mt-[-80vh]' src="/Group 59.png" alt="" />
        <div>
        </div>
      </div>

    </div>
  )
}

export default Home
