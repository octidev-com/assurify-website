import React from 'react'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import roundBg from '../../assets/banner/round-bg.png'
import CustomIcon from '../../assets/icon/CustomIcon'
import StartIcon from '../../assets/star.png'
import AssurifyIcon from '../../assets/icon/assurify-icon.png'

const Review = () => {
  return (
    <div className='container mt-[150px] py-[150px] relative'>
      {/* Background elements */}
      <div className='absolute -top-[60%] -left-[90%] pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div>
      <div className='absolute -top-[50%] -right-[90%] pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div>

      {/* Main content with gradient background */}
      <div className='relative'>
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px] -z-10 rounded-[20px]'></div>

        {/* Header */}
        <div className='flex justify-between w-full relative z-10'>
          <div className='flex flex-col gap-6 max-w-[570px]'>
            <div className='flex justify-start items-center gap-3'>
              <img src={rightSideHr} alt='' className='max-w-[100px]' />
              <p className='text-xl font-normal leading-[30px]'>
                Rated & Recommended
              </p>
              <img src={leftSideHr} alt='' className='max-w-[100px]' />
            </div>
            <h1 className='text-5xl font-semibold text-gradient leading-[72px]'>
              Verified Customer Experiences
            </h1>
            <p className='text-[#A6A6A6] text-lg font-light leading-[27px]'>
              Discover why customers trust us through their honest reviews.
            </p>
          </div>
          <div className='flex gap-[40px]'>
            <button>
              <CustomIcon iconName={'slider-left-icon'} />
            </button>
            <button>
              <CustomIcon iconName={'slider-right-icon'} />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className='mt-12 flex items-center gap-[30px] w-full relative z-10'>
          {/* Review reports */}
          <div className='flex flex-col gap-4 items-center flex-shrink-0 w-fit'>
            <p className='text-[#A6A6A6] text-2xl font-medium leading-9'>
              Excellent
            </p>
            <div className='flex gap-1'>
              <img src={StartIcon} alt='' />
              <img src={StartIcon} alt='' />
              <img src={StartIcon} alt='' />
              <img src={StartIcon} alt='' />
              <img src={StartIcon} alt='' />
            </div>
            <p className='text-[#A6A6A6] text-xl font-normal leading-[30px]'>
              Based on{' '}
              <span className='text-[#f7f7f7] underline'>20 reviews</span>
            </p>
            <img src={AssurifyIcon} alt='' className='w-[100px] h-[25px]' />
          </div>

          {/* Reviews card with gradient background */}
          <div className='flex flex-col gap-[30px] p-10 rounded-[20px] border border-[#262626] bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]'>
            {/* Review star */}
            <div className='flex gap-1'>
              <div className='bg-[#219653] p-[10px]'>
                <CustomIcon iconName={'star-icon'} />
              </div>
              <div className='bg-[#219653] p-[10px]'>
                <CustomIcon iconName={'star-icon'} />
              </div>
              <div className='bg-[#219653] p-[10px]'>
                <CustomIcon iconName={'star-icon'} />
              </div>
              <div className='bg-[#D9D9D930] p-[10px]'>
                <CustomIcon iconName={'star-icon'} />
              </div>
              <div className='bg-[#D9D9D930] p-[10px]'>
                <CustomIcon iconName={'star-icon'} />
              </div>
            </div>

            {/* Review text */}
            <p className='text-[#fff] text-lg font-normal'>
              Working with DigitX was a pleasure. Their web design team created
              a stunning website that perfectly captured our brand's essence.
              The feedback from our customers has been overwhelmingly positive.
            </p>

            {/* Reviewer name */}
            <p className='text-[#A6A6A6] text-xl font-normal'>Aditya Verma</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
