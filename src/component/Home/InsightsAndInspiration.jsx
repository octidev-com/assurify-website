import React from 'react'
import roundBg from '../../assets/banner/round-bg.png'
import InspirationImg from '../../assets/InsightsAndInspiration/Rectangle 14.png'
import Container from '../Common/Container'
import SectionTitle from '../Common/SectionTitle'

const InsightsAndInspiration = () => {
  return (
    <div className='w-full mt-[80px] md:mt-[120px] lg:mt-[150px] py-[60px] md:py-[100px] lg:py-[150px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-1/2 left-[-30%] md:left-[-40%] lg:left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration'
          className='w-[150vw] md:w-[120vw] lg:w-[100vw] max-w-none'
        />
      </div>
      <div className='absolute top-1/2 right-[-30%] md:right-[-40%] lg:right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration'
          className='w-[150vw] md:w-[120vw] lg:w-[100vw] max-w-none'
        />
      </div>

      {/* Main content with container */}
      <Container>
        <div className='relative mx-auto'>
          {/* Header */}
          <SectionTitle
            topText={'Insights & Inspiration'}
            middleText={
              'Expert Tips, Industry Insights & Latest Updates for You'
            }
            bottomText={
              'Find answers to common questions and get the support you need—quick and easy'
            }
          />

          {/* Main content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[30px] mt-6 md:mt-8 lg:mt-[48px]'>
            {[1, 3, 2].map((item) => (
              <div key={item} className='bg-[#FFF] rounded-xl'>
                <img
                  src={InspirationImg}
                  alt='inspiration-image'
                  className='w-full h-auto'
                />
                <div className='p-3 md:p-4 lg:p-4 flex flex-col gap-1 md:gap-2'>
                  <p className='text-[#0C0D0C] text-sm md:text-base font-normal leading-5 md:leading-6'>
                    March 26, 2025
                  </p>
                  <h3 className='text-[#0C0D0C] text-lg md:text-xl lg:text-2xl font-medium leading-6 md:leading-7 lg:leading-9'>
                    13 Tips to Boost Your Money Growth
                  </h3>
                  <p className='text-[#0C0D0CCC] text-sm md:text-base font-light leading-5 md:leading-6'>
                    Many desktop publishing their default model text, and a
                    search for in infancy various version
                  </p>
                  <p className='text-[#0C0D0C] text-sm md:text-base font-light leading-5 md:leading-6 underline'>
                    Read more..
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default InsightsAndInspiration
