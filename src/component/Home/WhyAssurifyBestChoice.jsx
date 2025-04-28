import React from 'react'
import roundBg from '../../assets/banner/round-bg.png' // Import roundBg
import benefit1 from '../../assets/benefits/benefit-1.png'
import benefit2 from '../../assets/benefits/benefit-2.png'
import benefit3 from '../../assets/benefits/benefit-3.png'

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
    <div className='container mt-[150px] relative '>
      {/* Right side roundBg image */}
      <div className='absolute bottom-0 -right-[90%] pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div>

      {/* Main content */}
      <div className='grid grid-cols-2 gap-[100px]'>
        <div>
          <h1 className='text-5xl font-semibold text-gradient leading-[72px]'>
            Why Assurify Your Best Choice
          </h1>
          <div className='flex flex-col gap-[30px] mt-[30px]'>
            {benefitsData.map((benefit) => (
              <div
                key={benefit.id}
                className='p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-3 items-start'>
                <div className='p-3 rounded-sm bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px]'>
                  <img src={benefit.image} alt='benefit-1' />
                </div>
                <h3 className='text-[32px] font-normal text-[#f7f7f7] leading-[48px]'>
                  {benefit.title}
                </h3>
                <p className='text-base font-normal leading-[30px] text-[#A6A6A6]'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='w-[570px] h-[520px] rounded-xl bg-[#D9D9D9] z-10'></div>
      </div>
    </div>
  )
}

export default WhyAssurifyBestChoice
