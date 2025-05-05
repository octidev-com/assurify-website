import React from 'react'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import roundBg from '../../assets/banner/round-bg.png'
import benefit1 from '../../assets/benefits/benefit-1.png'
import benefit2 from '../../assets/benefits/benefit-2.png'
import benefit3 from '../../assets/benefits/benefit-3.png'
import Container from '../Common/Container'

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      title: 'No Direct Cost to Sellers',
      description:
        'Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.',
      image: benefit1
    },
    {
      id: 2,
      title: 'Flexible Integrations',
      description:
        'Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.',
      image: benefit2
    },
    {
      id: 3,
      title: 'Superior Customer Service',
      description:
        'Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.',
      image: benefit3
    }
  ]

  return (
    <Container>
      <div className='mt-[80px] sm:mt-[100px] md:mt-[120px] lg:mt-[150px] relative'>
        {/* Left side roundBg image */}
        <div className='absolute -top-[10%] -left-[100%] pointer-events-none z-0'>
          <img
            src={roundBg}
            alt='Background decoration'
            className='w-[150vw] sm:w-[120vw] md:w-[100vw] lg:w-[75vw] max-w-none'
          />
        </div>

        {/* Main content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[100px] shrink-0'>
          {/* Left side of the main content (header) */}
          <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 items-center md:items-start text-center md:text-left'>
            <div className='flex justify-center md:justify-start items-center gap-2 sm:gap-3'>
              <img
                src={rightSideHr}
                alt=''
                className='max-w-[60px] sm:max-w-[80px] md:max-w-[100px]'
              />
              <p className='text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px]'>
                Benefits
              </p>
              <img
                src={leftSideHr}
                alt=''
                className='max-w-[60px] sm:max-w-[80px] md:max-w-[100px]'
              />
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gradient leading-10 sm:leading-12 md:leading-[60px] lg:leading-[72px]'>
              Win Win For Both Merchant and Customer
            </h1>
            <p className='text-[#A6A6A6] text-sm sm:text-base md:text-lg font-light leading-5 sm:leading-6 md:leading-[27px]'>
              A perfect balance—customers get great value, and merchants boost
              their sales effortlessly!
            </p>
          </div>

          {/* Right side of the main content */}
          <div className='flex flex-col gap-4 sm:gap-5 md:gap-7 lg:gap-[30px]'>
            {benefitsData.map((benefit) => (
              <div
                key={benefit.id}
                className='p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-2 sm:gap-3 md:gap-3 items-start'>
                <div className='p-2 sm:p-3 rounded-sm bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px]'>
                  <img
                    src={benefit.image}
                    alt={`benefit-${benefit.id}`}
                    className='w-8 sm:w-10 md:w-12 lg:w-[32px] h-8 sm:h-10 md:h-12 lg:h-[32px]'
                  />
                </div>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal text-[#f7f7f7] leading-7 sm:leading-8 md:leading-10 lg:leading-[48px]'>
                  {benefit.title}
                </h3>
                <p className='text-sm sm:text-base md:text-base font-normal leading-5 sm:leading-6 md:leading-[30px] text-[#A6A6A6]'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Benefits
