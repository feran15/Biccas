import React from 'react'

const Cab = () => {
  return (
    <div>
      <div className='flex justify-around mt-20'>
        <div>
            <h4 className='font-bold text-xl'>Our Feautures <br /> your cab get</h4>
        </div>
        <div>
            <p className='opacity-40'>
            we offer a variety of intresting feautures that you can <br />
             help increase your productivity at work and manage <br /> your project easily.
             </p>
        </div>
        <div>
            <button className='rounded-full bg-[#54BD95] text-white p-2'>Get Started </button>
        </div>
      </div>
      <div className='flex justify-around p-5'>
        <div className='p-2'>
            <img src="/Frame 247.png" alt="" />
            <h5 className='font-bold mt-2'>Collaboration Teams</h5>
            <p className='opacity-40 mt-4'>Here you can handle projects together <br /> with team virtually</p>
        </div>
        <div className='p-2'>
            <img src="/Frame 53.png" alt="" />
            <h5 className='font-bold mt-2'>Cloud Storage</h5>
            <p className='opacity-40 mt-4'>No need to worry about storage <br /> because we provide storage up to 2 TB</p>
        </div>
        <div className='p-2'>
            <img src="/Frame 54.png" alt="" />
            <h5 className='font-bold mt-2'>Daily Analytics</h5>
            <p className='opacity-40 mt-4'>We always provide useful information to <br /> make it easier for you everyday</p>
        </div>
      </div>
    </div>
  )
}

export default Cab
