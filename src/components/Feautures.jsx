import React from 'react'

const Feautures = () => {
  return (
    <div className='flex justify-around mt-20 leading-'>
        <div>
      <div className='mt-20 p-8'>
        <h4 className='font-bold text-3xl'>How we support our <br /> partner all over the world</h4>
        <p className='opacity-50 mt-4'>Sass become a common delivery model for many business application, including <br /> office software,messaging software, payroll processing software, DBMS software, <br /> management software</p>
      </div>
      <div className='flex gap-12 p-8'>
      <div>
        <img className='w-[15vh]' src="/Group 152.png" alt="" />
        <p><span className='font-bold'>4.9</span>/5 rating</p>
        <p className='opacity-25 font-bold'>databricks</p>
      </div>
      <div>
        <img className='w-[15vh]' src="/Group 152.png" alt="" />
        <p><span className='font-bold'>4.9</span>/5 rating</p>
        <p className='opacity-25 font-bold'>chainalysis</p>
      </div>
      </div>
      </div>
      <div className='mt-28'>
      <div className='flex gap-3'>
        <span>
            <img className='bg-white p-1' src="/activity 1.png" alt="" />
        </span>
        <span>
        <h4 className='font-bold'>Publishing</h4>
        <p className='opacity-40'>Plan, collaborate, and publishing your content <br /> 
        that drives maeningful engagement and growth <br /> for your brand</p>
        </span>
      </div>

      <div className='flex gap-3'>
        <span>
            <img className='bg-white p-1' src="/pie-chart 1.png" alt="" />
        </span>
        <span>
        <h4 className='font-bold'>Analytics</h4>
        <p className='opacity-40'>Analyze your perfomance and create gorgeous <br /> report</p>
        </span>
      </div>
      <div className='flex gap-3'>
        <span>
            <img className='bg-white p-1 ' src="/command 1.png" alt="" />
        </span>
        <span>
        <h4 className='font-bold'>Engagement</h4>
        <p className='opacity-40'>Quickly navigate you and engage with your <br /> audience</p>
        </span>
      </div>
      </div>
    </div>
  )
}

export default Feautures
