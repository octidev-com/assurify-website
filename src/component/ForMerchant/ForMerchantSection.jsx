import roundBg from '../../assets/banner/round-bg.png'
import writingIcon from '../../assets/support/writing.svg'
import clockIcon from '../../assets/support/clock.svg'
import supportIcon from '../../assets/support/support.svg'
import supportImage from '../../assets/support/supportImage.svg'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import benefit1 from '../../assets/benefits/benefit-1.png'
import benefit2 from '../../assets/benefits/benefit-2.png'
import benefit3 from '../../assets/benefits/benefit-3.png'
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
        <div className='max-w-[1170px] mx-[24px] sm:mx-auto bg-[#EDEDED] max-h-[800px] rounded-lg shadow-md mt-12 sm:mb-[126px] flex justify-center items-center'>
          <p className='text-[#888] text-lg'>Image Goes Here</p>
        </div>
      </div>
      {/* Benefits Section */}
      <div className='relative overflow-hidden bg-[#0C0D0C]'>
        <Container>
          <div className='sm:py-[150px] sm:py-[24px] py-[50px] relative z-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[130px] shrink-0'>
              <div className='flex flex-col gap-4 sm:gap-2 w-full'>
                <div className='flex justify-center sm:justify-start items-center text-center gap-3'>
                  <img
                    src={rightSideHr}
                    alt=''
                    className='max-w-[80px] sm:max-w-[100px]'
                  />
                  <p className='text-[14px] sm:text-xl font-normal leading-[21px] sm:leading-[30px]'>
                    Benefits
                  </p>
                  <img
                    src={leftSideHr}
                    alt=''
                    className='max-w-[80px] sm:max-w-[100px]'
                  />
                </div>
                <h1 className='text-[24px] sm:text-4xl lg:text-5xl font-semibold text-gradient leading-[36px] sm:leading-[60px] lg:leading-[72px] text-center sm:text-left'>
                  Exclusive customer Experience
                </h1>
                <p className='text-[#A6A6A6] text-[12px] sm:text-lg font-light leading-[18px] sm:leading-[27px] text-center sm:text-left'>
                  A perfect balance—customers get great value, and merchants
                  boost their sales effortlessly!
                </p>
              </div>
              <div className='flex flex-col gap-[24px] sm:gap-[30px]'>
                {benefitsData.map((benefit) => (
                  <div
                    key={benefit.id}
                    className='p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-3 items-start'>
                    <div className='p-2 sm:p-3 rounded-sm bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px]'>
                      <img src={benefit.image} alt='benefit' />
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
              <div className='flex flex-col gap-4 md:max-w-[570px] w-full'>
                <div className='flex sm:justify-start justify-center items-center gap-3'>
                  <img src={rightSideHr} alt='' className='max-w-[100px]' />
                  <p className='text-[14px] sm:text-xl font-normal leading-[21px] sm:leading-[30px]'>
                    Support
                  </p>
                  <img src={leftSideHr} alt='' className='max-w-[100px]' />
                </div>

                <h2 className='text-[24px] sm:text-5xl font-semibold text-gradient leading-[36px] sm:leading-[72px] text-center sm:text-left'>
                  Instant support and service
                </h2>

                <p className='text-[#A6A6A6] text-[12px] sm:text-base font-light leading-[18px] sm:leading-relaxed text-center sm:text-left'>
                  A perfect balance—customers get great value, and merchants
                  boost their sales effortlessly!
                </p>

                <div className='sm:mt-10 mt-[32px] flex flex-col gap-6 w-full'>
                  <div className='flex items-center gap-4'>
                    <div className='bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px] flex items-center justify-center'>
                      <img
                        src={writingIcon}
                        alt='Seamless claim icon'
                        className='w-[40px] h-[40px]'
                      />
                    </div>
                    <p className='text-white text-[14px] sm:text-base leading-[22px] sm:leading-[26px]'>
                      Seamless claim submission experience
                    </p>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px] flex items-center justify-center'>
                      <img
                        src={clockIcon}
                        alt='Fast claim processing icon'
                        className='w-[40px] h-[40px]'
                      />
                    </div>
                    <p className='text-white text-[14px] sm:text-base leading-[22px] sm:leading-[26px]'>
                      Fast and transparent claim processing
                    </p>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px] flex items-center justify-center'>
                      <img
                        src={supportIcon}
                        alt='Expert support icon'
                        className='w-[40px] h-[40px]'
                      />
                    </div>
                    <p className='text-white text-[14px] sm:text-base leading-[22px] sm:leading-[26px]'>
                      Dedicated expert support from start to finish
                    </p>
                  </div>
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
