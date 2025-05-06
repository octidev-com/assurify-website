import React, { useState } from 'react'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import roundBg from '../../assets/banner/round-bg.png'
import CustomIcon from '../../assets/icon/CustomIcon'
import StartIcon from '../../assets/star.png'
import AssurifyIcon from '../../assets/icon/assurify-icon.png'
import Container from '../Common/Container'

const Review = () => {
  const reviews = [
    {
      text: 'Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand’s essence. The feedback from our customers has been overwhelmingly positive.',
      name: 'Aditya Verma',
      stars: 3
    },
    {
      text: 'DigitX transformed our online presence with a sleek, user-friendly website. Their attention to detail and quick response times made the process seamless. Highly recommend their services!',
      name: 'Priya Sharma',
      stars: 3
    },
    {
      text: 'The team at DigitX delivered beyond our expectations. Our new website is not only visually appealing but also drives more traffic. Their support team is top-notch!',
      name: 'Rahul Mehta',
      stars: 3
    },
    {
      text: 'DigitX’s expertise in web design is unmatched. They crafted a site that’s both functional and beautiful, boosting our brand credibility. The collaboration was smooth and professional.',
      name: 'Sneha Kapoor',
      stars: 3
    },
    {
      text: 'We’re thrilled with the website DigitX built for us. It’s intuitive, modern, and has significantly improved our customer engagement. Their team was a joy to work with!',
      name: 'Vikram Singh',
      stars: 3
    }
  ]

  const [currentReview, setCurrentReview] = useState(0)

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className='w-full mt-[80px] md:mt-[150px] py-[80px] md:py-[150px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration left'
          className='w-[150vw] md:w-[100vw] lg:w-[75vw] max-w-none'
        />
      </div>
      <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration right'
          className='w-[150vw] md:w-[100vw] lg:w-[75vw] max-w-none'
        />
      </div>

      {/* Main content with container */}
      <Container>
        <div className='relative mx-auto'>
          {/* Header */}
          <div className='flex flex-col md:flex-row justify-between w-full relative z-10 items-center md:items-center'>
            <div className='flex flex-col gap-4 md:gap-6 max-w-[570px] items-center md:items-start text-center md:text-left'>
              <div className='flex justify-center md:justify-start items-center gap-2 md:gap-3'>
                <img
                  src={rightSideHr}
                  alt=''
                  className='max-w-[60px] md:max-w-[100px]'
                />
                <p className='text-base md:text-xl font-normal leading-6 md:leading-[30px]'>
                  Rated & Recommended
                </p>
                <img
                  src={leftSideHr}
                  alt=''
                  className='max-w-[60px] md:max-w-[100px]'
                />
              </div>
              <h1 className='text-3xl md:text-5xl font-semibold text-gradient leading-10 md:leading-[72px]'>
                Verified Customer Experiences
              </h1>
              <p className='text-[#A6A6A6] text-sm md:text-lg font-light leading-5 md:leading-[27px]'>
                Discover why customers trust us through their honest reviews.
              </p>
            </div>
            <div className='hidden md:flex gap-[40px] mt-6 md:mt-0 max-w-[164px]'>
              <button
                onClick={handlePrev}
                disabled={currentReview === 0}
                className='disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>
                <CustomIcon
                  iconName={'slider-left-icon'}
                  className={'w-[56px] h-[56px]'}
                />
              </button>
              <button
                onClick={handleNext}
                disabled={currentReview === reviews.length - 1}
                className='disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>
                <CustomIcon
                  iconName={'slider-right-icon'}
                  className={'w-[56px] h-[56px]'}
                />
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className='mt-6 md:mt-12 flex flex-col md:flex-row items-center gap-4 md:gap-[30px] w-full relative z-10'>
            {/* Review reports */}
            <div className='flex flex-col gap-3 md:gap-4 items-center flex-shrink-0 w-fit'>
              <p className='text-[#A6A6A6] text-xl md:text-2xl font-medium leading-7 md:leading-9'>
                Excellent
              </p>
              <div className='flex gap-1'>
                <img
                  src={StartIcon}
                  alt='Star'
                  className='w-5 md:w-6 h-5 md:h-6'
                />
                <img
                  src={StartIcon}
                  alt='Star'
                  className='w-5 md:w-6 h-5 md:h-6'
                />
                <img
                  src={StartIcon}
                  alt='Star'
                  className='w-5 md:w-6 h-5 md:h-6'
                />
                <img
                  src={StartIcon}
                  alt='Star'
                  className='w-5 md:w-6 h-5 md:h-6'
                />
                <img
                  src={StartIcon}
                  alt='Star'
                  className='w-5 md:w-6 h-5 md:h-6'
                />
              </div>
              <p className='text-[#A6A6A6] text-base md:text-xl font-normal leading-6 md:leading-[30px]'>
                Based on{' '}
                <span className='text-[#f7f7f7] underline'>20 reviews</span>
              </p>
              <img
                src={AssurifyIcon}
                alt='Assurify'
                className='w-[80px] md:w-[100px] h-[20px] md:h-[25px]'
              />
            </div>

            <div className='flex items-center gap-3'>
              {/* Slider icons for mobile */}
              <button
                className='md:hidden disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
                onClick={handlePrev}
                disabled={currentReview === 0}>
                <CustomIcon
                  iconName={'mobile-slider-left-icon'}
                  className={'w-[28px] h-[28px]'}
                />
              </button>

              {/* Reviews card with gradient background */}
              <div
                key={currentReview}
                className='relative flex flex-col gap-4 md:gap-[30px] p-6 md:p-10 rounded-[20px] border border-[#262626] bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px] w-full max-w-[600px] md:max-w-none mt-4 md:mt-0 animate-fadeSlide'>
                {/* Review star */}
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className={
                        index < reviews[currentReview].stars
                          ? 'bg-[#219653] p-[1px] md:p-[10px]'
                          : 'bg-[#D9D9D930] p-[1px] md:p-[10px]'
                      }>
                      <CustomIcon
                        iconName={'star-icon'}
                        className='w-[20px] h-[20px]'
                      />
                    </div>
                  ))}
                </div>

                {/* Review text */}
                <p className='text-[#fff] text-sm md:text-lg font-normal leading-5 md:leading-[27px]'>
                  {reviews[currentReview].text}
                </p>

                {/* Reviewer name */}
                <p className='text-[#A6A6A6] text-base md:text-xl font-normal leading-6 md:leading-[30px]'>
                  {reviews[currentReview].name}
                </p>
              </div>

              <button
                className='md:hidden disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
                onClick={handleNext}
                disabled={currentReview === reviews.length - 1}>
                <CustomIcon
                  iconName={'mobile-slider-right-icon'}
                  className={'w-[28px] h-[28px]'}
                />
              </button>
            </div>
          </div>
        </div>
      </Container>
      {/* Inline CSS for custom animation */}
      <style>
        {`
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateX(20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fadeSlide {
            animation: fadeSlide 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  )
}

export default Review
