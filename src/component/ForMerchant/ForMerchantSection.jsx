import roundBg from '../../assets/banner/round-bg.png'
import writingIcon from '../../assets/support/writing.svg'
import clockIcon from '../../assets/support/clock.svg'
import supportIcon from '../../assets/support/support.svg'
import supportImage from '../../assets/support/supportImage.svg'
import benefit1 from '../../assets/benefits/benefit-1.png'
import benefit2 from '../../assets/benefits/benefit-2.png'
import benefit3 from '../../assets/benefits/benefit-3.png'
import brandImage from '../../assets/forMerchant/brands.png'
import Container from '../Common/Container'
import SectionTitle from '../Common/SectionTitle'
import Button from '../Common/Button'
import AssurifyDashboard from '../../assets/forMerchant/assurify_dashboard.png'

const ForMerchantSection = () => {
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
    <>
      {/* Hero Section */}
      <div className='w-full px-[24px] bg-cover bg-no-repeat bg-center z-10 relative  pb-[50px] sm:pb-[150px]'>
        <Container horizontalPadding='0'>
          <SectionTitle
            topText='For Merchant'
            middleText='Enhance your revenue and manage shipping protection from one app'
            bottomText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus.Praesent non ante vitae turpis.'
          />
          <div className='flex justify-center gap-7 pt-[30px]'>
            <Button variant='primary-white'>How it works</Button>

            <Button variant='secondary-outline'>View Demo</Button>
          </div>
        </Container>
        <div className='max-w-[1170px] mx-auto w-full max-h-[812px] rounded-lg shadow-md mt-12 flex justify-center items-center'>
          <img src={AssurifyDashboard} />
        </div>
      </div>
      {/* Brands Section */}
      <div className='w-full py-[24px] px-[0] sm:px-[24px] lg:py-[94px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
        <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>
        <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>
        <Container horizontalPadding='29px'>
          <SectionTitle
            topText='Brands'
            middleText='Exclusively built for Shopify'
            bottomText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus.Praesent non ante vitae turpis.'
          />
        </Container>
        <div className='max-w-[1170px] mx-[24px] sm:mx-auto max-h-[800px] rounded-lg shadow-md mt-12 sm:mb-[126px] flex justify-center items-center'>
          <img src={brandImage} alt='Brands Image' />
        </div>
      </div>
      {/* Benefits Section */}
      <div className='relative overflow-hidden bg-[#0C0D0C]'>
        <Container>
          <div className='sm:py-[150px] py-[50px] relative z-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[130px] shrink-0'>
              <SectionTitle
                topText={'Benefits'}
                middleText={'Exclusive customer Experience'}
                bottomText={
                  'A perfect balance—customers get great value, and merchants boost their sales effortlessly!'
                }
                isTextCentered={false}
              />

              <div className='flex flex-col gap-[24px] sm:gap-[30px]'>
                {benefitsData.map((benefit) => (
                  <div
                    key={benefit.id}
                    className='p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-3 items-start'>
                    <div className='p-2 sm:p-3  rounded-sm bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] lg:w-[56px] lg:h-[56px] w-[40px] h-[40px]'>
                      <img
                        src={benefit.image}
                        alt='benefit'
                        className='lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]'
                      />
                    </div>
                    <h3 className='text-[16px] sm:text-[25px] lg:text-[32px] font-normal text-[#f7f7f7] leading-[24px] sm:leading-[40px] lg:leading-[48px]'>
                      {benefit.title}
                    </h3>
                    <p className='text-[14px] sm:text-base font-normal leading-[24px] sm:leading-[30px] text-[#A6A6A6]'>
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Protection Coverage Section */}
      <div className='w-full sm:py-[94px] py-[24px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
        <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>
        <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>

        <Container>
          <SectionTitle
            topText='Protection Coverage'
            middleText='Sync with your existing checkout module.'
            bottomText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus Praesent non ante vitae turpis.'
          />

          <div className='max-w-[874px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[48px]'>
            <div className='flex flex-col gap-3 items-start max-w-[422px]'>
              <div className='bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] sm:p-4 p-2 rounded-xl'>
                <img
                  src={benefit1}
                  alt='Easy to setup icon'
                  className='w-[40px] h-[40px] sm:w-10 sm:h-10'
                />
              </div>
              <h3 className='text-[18px] sm:text-2xl font-semibold text-white leading-[28px] sm:leading-[32px]'>
                Easy to setup
              </h3>
              <p className='text-[#A6A6A6] text-[14px] sm:text-base leading-[24px] sm:leading-[27px]'>
                Check out our custom research services designed to tackle your
                business challenges! We offer market analysis and consumer
                insights to help you make better decisions and boost your
                growth.
              </p>
            </div>

            <div className='flex flex-col gap-3 items-start max-w-[422px]'>
              <div className='bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] sm:p-4 p-2 rounded-xl'>
                <img
                  src={benefit2}
                  alt='No backhand branding icon'
                  className='w-[40px] h-[40px] sm:w-10 sm:h-10'
                />
              </div>
              <h3 className='text-[18px] sm:text-2xl font-semibold text-white leading-[28px] sm:leading-[32px]'>
                No Backhand Branding
              </h3>
              <p className='text-[#A6A6A6] text-[14px] sm:text-base leading-[24px] sm:leading-[27px]'>
                Check out our custom research services designed to tackle your
                business challenges! We offer market analysis and consumer
                insights to help you make better decisions and boost your
                growth.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Support Section */}
      <div className='bg-[#0C0D0C]'>
        <Container>
          <div className='sm:py-[150px] py-[50px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
              <div className='flex flex-col gap-[32px] md:gap-[48px] md:max-w-[570px] w-full'>
                <SectionTitle
                  topText={'Support'}
                  middleText={'Instant support and service'}
                  bottomText={
                    'A perfect balance—customers get great value, and merchants boost their sales effortlessly!'
                  }
                  isTextCentered={false}
                />

                <div className=' flex flex-col gap-[16px] md:gap-[24px] w-full'>
                  {[
                    {
                      id: 1,
                      img: writingIcon,
                      text: 'Seamless claim submission experience'
                    },
                    {
                      id: 2,
                      img: clockIcon,
                      text: 'Fast and transparent claim processing'
                    },
                    {
                      id: 3,
                      img: supportIcon,
                      text: 'Dedicated expert support from start to finish'
                    }
                  ].map((item) => (
                    <div key={item.id} className='flex items-center gap-4'>
                      <div className='bg-[#1A1A1A] p-[8px] md:p-[12px] rounded-[4px] md:w-[56px] md:h-[56px] w-[40px] h-[40px] flex items-center justify-center'>
                        <img
                          src={item.img}
                          alt='Seamless claim icon'
                          className='w-[24px] md:w-[32px] h-[24px] md:h-[32px]'
                        />
                      </div>
                      <p className='text-white text-[16px] md:text-[24px] leading-[23px] md:leading-[36px]'>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex justify-center md:justify-end w-full mt-10 md:mt-0'>
                <img
                  src={supportImage}
                  alt='Support team'
                  className='rounded-xl w-full max-w-[570px]'
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ForMerchantSection
