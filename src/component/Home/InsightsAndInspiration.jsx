import React from 'react'
import roundBg from '../../assets/banner/round-bg.png'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import InspirationImg from '../../assets/InsightsAndInspiration/Rectangle 14.png'

const InsightsAndInspiration = () => {
  return (
    <div className='w-full mt-[150px] py-[150px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div>
      <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div>

      {/* Main content with container */}
      <div className='container relative mx-auto'>
        {/* Header */}
        <div className='w-[732px] max-w-full mx-auto flex flex-col gap-4 px-4'>
          <div className='flex justify-center items-center gap-3'>
            <img src={rightSideHr} alt='' className='max-w-[100px]' />
            <p className='text-xl font-normal leading-[30px]'>
              Insights & Inspiration
            </p>
            <img src={leftSideHr} alt='' className='max-w-[100px]' />
          </div>
          <h1 className='text-5xl font-semibold text-gradient text-center leading-[72px]'>
            Expert Tips, Industry Insights & Latest Updates for You
          </h1>
          <p className='text-[#A6A6A6] text-lg font-light text-center leading-[27px]'>
            Find answers to common questions and get the support you need—quick
            and easy
          </p>
        </div>

        {/* Main content */}
        <div className='grid grid-cols-3 gap-[30px] mt-[48px]'>
          {[1, 3, 2].map((item) => (
            <div key={item} className='bg-[#FFF] rounded-xl'>
              <img src={InspirationImg} alt='inspiration-image' />
              <div className='p-4 flex flex-col gap-2'>
                <p className='text-[#0C0D0C] text-base font-normal leading-6'>
                  March 26, 2025
                </p>
                <h3 className='text-[#0C0D0C] text-2xl font-medium leading-9'>
                  13 Tips to Boost Your Money Growth
                </h3>
                <p className='text-[#0C0D0CCC] text-base font-light leading-6'>
                  Many desktop publishing their default model text, and a search
                  for in infancy various version
                </p>
                <p className='text-[#0C0D0C] text-base font-light leading-6 underline'>
                  Read more..
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InsightsAndInspiration
