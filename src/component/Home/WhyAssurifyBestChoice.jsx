import React from 'react'
import roundBg from '../../assets/banner/round-bg.png'
import benefit1 from '../../assets/whyAssurify/maximize.png'
import benefit2 from '../../assets/whyAssurify/customerSatisfaction.png'
import benefit3 from '../../assets/whyAssurify/retention.png'
import benefit4 from '../../assets/whyAssurify/boost.png'
import MaximizeRevinue from '../../assets/whyAssurify/MaximizeRevinue.png'
import Container from '../Common/Container'

const WhyAssurifyBestChoice = () => {
  const benefitsData = [
    {
      id: 1,
      title: 'Maximize Revenue',
      description:

        'Turn protection into profit with every order while delivering peace of mind to your shoppers.',

      image: benefit1
    },
    {
      id: 2,
      title: 'Customer Satisfaction',
      description:

        'Fewer complaints and more 5-star reviews thanks to stress-free claims handling.',

      image: benefit2
    },
    {
      id: 3,

      title: 'Increase Customer Retention',
      description:
        'Build customer trust through reliable claim resolution and consistent delivery protection.',

      image: benefit3
    },
    {
      id: 4,
      title: 'Boost Revenue',
      description:

        'Assurify helps secure your profits from shipping losses while enhancing customer trust and repeat sales.',

      image: benefit4
    }
  ]

  return (
    <Container>
      <div className='py-[50px] md:mt-[120px] lg:mt-[150px] relative'>
        {/* Right side roundBg image */}

        <div className='absolute bottom-[-30%] hidden md:block -left-[-50%]  pointer-events-none z-0'>

          <img
            src={roundBg}
            alt='Background decoration'
            className='w-[150vw] md:w-[120vw] lg:w-[100vw] max-w-none'
          />
        </div>

        {/* Main content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-[30px]'>
          {/* Left Column: Heading and Benefit Cards */}
          <div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient leading-10 md:leading-[56px] lg:leading-[72px] text-center md:text-left'>
              What Makes Assurify Your Best Choice
            </h2>

            <div className='flex flex-col gap-4 md:gap-6 lg:gap-[32px] mt-6 lg:mt-[32px] max-w-[570px]'>
              {benefitsData.map((benefit) => (
                <div
                  key={benefit.id}
                  className='p-4 md:p-5 lg:pt-[39px] lg:pb-[39px] lg:pl-6 lg:pr-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-2 md:gap-3 items-start max-w-[522px]'>
                  <div className='p-2 md:p-3 rounded-sm bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] w-[56px] h-[56px]'>
                    <img
                      src={benefit.image}
                      alt={`benefit-${benefit.id}`}
                      className='w-[32px] h-[32px]'
                    />
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
          <div className='w-full md:w-[400px] lg:w-[570px] max:h-[280px] md:h-[460px] lg:h-[520px] rounded-xl z-10 mx-auto md:mx-0'>
            <img src={MaximizeRevinue} alt='why assurify image' />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhyAssurifyBestChoice
