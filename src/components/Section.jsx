import React from 'react'

const Section = () => {
  return (
    <div>
      <div className='flex justify-around'>
        <div className='mt-8 p-8'>
            <h4 className='font-bold text-3xl'>What Benefit Will <br /> You Get </h4>
            <span className='flex gap-3 mt-8'>
              <img className='h-[5vh]' src="/Subtract.png" alt="" />
              <p>Free consulting with Expert Saving Money</p>
            </span>
            <span className='flex gap-3'>
              <img className='h-[5vh]' src="/Subtract.png" alt="" />
              <p>Online Banking</p>
            </span>
            <span className='flex gap-3'>
              <img className='h-[5vh]' src="/Subtract.png" alt="" />
              <p>Investment Report Every Month</p>
            </span>
            <span className='flex gap-3'>
              <img className='h-[5vh]' src="/Subtract.png" alt="" />
              <p>Saving Money For the Future</p>
            </span>
            <span className='flex gap-3'>
              <img className='h-[5vh]' src="/Subtract.png" alt="" />
              <p className='mt-2'>Online Transaction</p>
            </span>
        </div>
        <div>
          <img src="/Rectangle 48.png" alt="" />
          <img className='mt-[-10vh] ms-[-18vh]' src="/Group 114.png" alt="" />
          <img src="/Group 113.png" className='mt-[-40vh] ms-[-10vh] absolute' alt="" />
          <img src="/Group 112.png" className='mt-[-75vh] ms-[60vh] absolute' alt="" />
          <img src="/Group 111.png" className='mt-[-80vh] ms-[-20vh] absolute' alt="" />
        </div>
      </div>

          <div>
            <div className='text-center mt-24'>
              <h4 className='font-bold text-3xl'>Choose Plan <br /> That's Right for you</h4>
              <p className='opacity-40 font-bold mt-4'>choose plan that works best for you,feel free to contact us</p>
              <span className='flex justify-center p-3'>
                <ul className='flex bg-white w-[20%] rounded-lg justify-center gap-3 font-bold p-2'>
                  <li className='mt-1'>Bill Monthly</li>
                  <li className='bg-[#54BD95] text-white p-1 rounded-md'>Bill Yearly</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="full-cards flex p-8 justify-around">
            <div className="card1">
              <img src="/Group 202.png" alt="" />
            </div>
            <div>
              <img src="/Frame 57.png" alt="" />
            </div>
            <div>
              <img src="/Group 201.png" alt="" />
            </div>
          </div>
    </div>
  )
}

export default Section
