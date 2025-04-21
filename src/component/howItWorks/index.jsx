import React from 'react'

const HowItWorks = () => {
  return (
    <div className='mt-[150px] container'>
      <div className='w-[732px] mx-auto flex flex-col gap-2 '>
        <div className='flex justify-center items-center gap-3'>
          <img src='/src/assets/howItWorks/right-side-hr.png' alt='' />
          <p className='text-xl font-normal'>Protection Coverage</p>
          <img src='/src/assets/howItWorks/left-side-hr.png' alt='' />
        </div>

        <h1 className='text-5xl font-semibold text-gradient text-center '>
          How It Works
        </h1>
        <p className='text-[#A6A6A6] text-lg font-light text-center'>
          With licensed shipping protection, fast issue resolution, package
          tracking, product recommendations, and carbon neutral shipping.
        </p>
      </div>
    </div>
  )
}

export default HowItWorks
