import React from 'react'
import roundBg from '../../assets/banner/round-bg.png'
import benefit1 from '../../assets/benefits/benefit-1.png'
import benefit2 from '../../assets/benefits/benefit-2.png'
import benefit3 from '../../assets/benefits/benefit-3.png'
import Container from '../Common/Container'
import SectionTitle from '../Common/SectionTitle'

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
        <div className='grid grid-cols-1 md:grid-cols-2  gap-[32px] md:gap-[100px] shrink-0'>
          {/* Left side of the main content (header) */}

          <SectionTitle
            topText={'Benefits'}
            middleText={'Win Win For Both Merchant and Customer'}
            bottomText={
              'A perfect balance—customers get great value, and merchants boost their sales effortlessly!'
            }
            isTextCentered={false}
          />

          {/* Right side of the main content */}
          <div className='flex flex-col gap-4 md:gap-[30px]'>
            {benefitsData.map((benefit) => (
              <div
                key={benefit.id}
                className='p-[12px] md:p-[24px] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-3 items-start'>
                <div className='p-2 md:p-3 rounded-[4px] bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px]'>
                  <img
                    src={benefit.image}
                    alt={`benefit-${benefit.id}`}
                    className='w-[24px] md:w-[32px] h-[24px] md:h-[32px]'
                  />
                </div>
                <h3 className='text-[16px] md:text-[32px] font-normal text-[#f7f7f7] leading-[24px] md:leading-[48px]'>
                  {benefit.title}
                </h3>
                <p className='text-[12px]  md:text-[16px] font-normal leading-[21px]  md:leading-[30px] text-[#A6A6A6]'>
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
