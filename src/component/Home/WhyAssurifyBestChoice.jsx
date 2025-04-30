import React from 'react'
import roundBg from '../../assets/banner/round-bg.png'
import benefit1 from '../../assets/benefits/benefit-1.png'
import benefit2 from '../../assets/benefits/benefit-2.png'
import benefit3 from '../../assets/benefits/benefit-3.png'
import Container from '../Common/Container'

const WhyAssurifyBestChoice = () => {
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
    },
    {
      id: 4,
      title: 'Superior Customer Service',
      description:
        'Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.',
      image: benefit3
    }
  ]

  return (
    <Container>
      <div className='mt-[80px] md:mt-[120px] lg:mt-[150px] relative'>
        {/* Right side roundBg image */}
        <div className='absolute bottom-0 -right-[50%] md:-right-[70%] lg:-right-[90%] pointer-events-none z-0'>
          <img
            src={roundBg}
            alt='Background decoration'
            className='w-[150vw] md:w-[120vw] lg:w-[100vw] max-w-none'
          />
        </div>

        {/* Main content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-[100px]'>
          {/* Left Column: Heading and Benefit Cards */}
          <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient leading-10 md:leading-[56px] lg:leading-[72px] text-center md:text-left'>
              Why Assurify Your Best Choice
            </h1>
            <div className='flex flex-col gap-4 md:gap-6 lg:gap-[30px] mt-6 md:mt-8 lg:mt-[30px]'>
              {benefitsData.map((benefit) => (
                <div
                  key={benefit.id}
                  className='p-4 md:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-2 md:gap-3 items-start'>
                  <div className='p-2 md:p-3 rounded-sm bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px]'>
                    <img src={benefit.image} alt={`benefit-${benefit.id}`} />
                  </div>
                  <h3 className='text-xl md:text-2xl lg:text-[32px] font-normal text-[#f7f7f7] leading-7 md:leading-9 lg:leading-[48px]'>
                    {benefit.title}
                  </h3>
                  <p className='text-sm md:text-base font-normal leading-6 md:leading-[28px] lg:leading-[30px] text-[#A6A6A6]'>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Placeholder Image */}
          <div className='w-full md:w-[400px] lg:w-[570px] h-[400px] md:h-[460px] lg:h-[520px] rounded-xl bg-[#D9D9D9] z-10 mx-auto md:mx-0'></div>
        </div>
      </div>
    </Container>
  )
}

export default WhyAssurifyBestChoice
