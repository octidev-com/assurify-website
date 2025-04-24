import React from 'react'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'

import roundBg from '../../assets/banner/round-bg.png'

const ProtectionCoverage = () => {
  return (
    <div className=' text-white  mt-[150px] relative w-full flex justify-center overflow-hidden py-[150px] bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px]'>
      {/* Right side bg image */}
      <div className='absolute -top-[50%] -left-[800px] '>
        <img src={roundBg} alt='Background decoration' />
      </div>
      {/* Background images wrapper */}
      <div className='container'>
        <div className='grid grid-cols-2 justify-center gap-[30px] py-[26px]'>
          {/* left side of the main content */}
          <div className='flex flex-col gap-6'>
            <div className='flex justify-center items-center gap-3'>
              <img src={rightSideHr} alt='' className='max-w-[100px]' />
              <p className='text-xl font-normal leading-[30px]'>
                Protection Coverage
              </p>
              <img src={leftSideHr} alt='' className='max-w-[100px]' />
            </div>
            <h1 className='text-5xl font-semibold text-gradient  leading-[72px]'>
              Total Coverage & Claims Management
            </h1>
            <p className='text-[#A6A6A6] text-lg font-light leading-[27px]'>
              Purchasers crave carbon-neutral shipping options and total package
              protection. Guide Protection makes it easy to give the people what
              they want (again..and again).
            </p>
            <div>
              <button type='button' className='btn-secondary'>
                Get Started
              </button>
            </div>
          </div>

          {/* right side of the main content */}
          <div></div>
        </div>
      </div>

      {/* Left side bg image */}
      <div className='absolute -top-[50%] -right-[800px] '>
        <img src={roundBg} alt='Background decoration' />
      </div>
    </div>
  )
}

export default ProtectionCoverage
