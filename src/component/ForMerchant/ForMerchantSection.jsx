import roundBg from '../../assets/banner/round-bg.png'
import writingIcon from '../../assets/support/writing.svg'
import clockIcon from '../../assets/support/clock.svg'
import supportIcon from '../../assets/support/support.svg'
import supportImage from '../../assets/support/supportImage.svg'
import benefit1 from '../../assets/benefits/benefit-1.png'
import benefit2 from '../../assets/benefits/benefit-2.png'
import brandImage from '../../assets/forMerchant/brands.png'
import Container from '../Common/Container'
import SectionTitle from '../Common/SectionTitle'
import Button from '../Common/Button'
import AssurifyDashboard from '../../assets/forMerchant/assurify_dashboard.png'
import Benefits from '../Home/Benfits'

const ForMerchantSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='w-full px-[24px] bg-cover bg-no-repeat bg-center z-10 relative  pb-[50px] sm:pb-[150px]'>
        <Container horizontalPadding='0'>
          <SectionTitle
            topText='For Merchant'
            middleText='Boost Revenue & Simplify Shipping Protection — All-in-One App'
            bottomText='Safeguard Your Shopify Store with Assurify.
Unlock new revenue streams and automate claims with no extra effort required!
Trusted by 50+ Merchants to reduce loss, build Trust, and customer retention.
'
            useH1={true}
          />
          <div className='flex justify-center gap-4 sm:gap-6 lg:gap-[30px] pt-3 md:pt-5 lg:pt-8'>
            <a
              href='https://app.assurify.app/'
              target='_blank'
              rel='noopener noreferrer'>
              <Button>How it works</Button>
            </a>

            <a
              href='https://assurify.app/schedule-a-demo/'
              target='_blank'
              rel='noopener noreferrer'>
              <Button variant='secondary-outline'>View Demo</Button>
            </a>
          </div>
        </Container>
        <div className='max-w-[1170px] mx-auto w-full max-h-[812px] rounded-lg shadow-md mt-8 lg:mt-12 flex justify-center items-center'>
          <img src={AssurifyDashboard} />
        </div>
      </div>
      {/* Brands Section */}
      <div className='w-full py-[24px] px-[0] sm:px-[24px] lg:py-[150px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
        <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>
        <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>
        {/* <Container> */}
        <SectionTitle
          topText='Brands'
          middleText='Exclusively Built For Shopify'
          bottomText="Assurify was built just for Shopify! So Setup takes seconds and works seamlessly. Just install it and keep your customers' trust in your brand from now on!"
        />
        {/* </Container> */}
        <div className='max-w-[1170px] mx-[24px] sm:mx-auto max-h-[800px] rounded-lg shadow-md flex justify-center items-center'>
          <img src={brandImage} alt='Brands Image' />
        </div>
      </div>
      {/* Benefits Section */}
      <Benefits />
      {/* Protection Coverage section */}
      <div className='w-full sm:py-[150px] py-[24px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden lg:mt-[150px] mt-[50px]'>
        <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>
        <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>

        <Container>
          <SectionTitle
            topText='Protection Coverage'
            middleText='Sync With Your Existing Checkout Module'
            bottomText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus Praesent non ante vitae turpis.'
          />

          <div className='max-w-[874px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:gap-[30px] mt-[32px] lg:mt-[48px]'>
            <div className='flex flex-col gap-3 items-start max-w-[422px]'>
              <div className='bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] sm:p-4 p-2 rounded-xl'>
                <img
                  src={benefit1}
                  alt='Easy to setup icon'
                  className='w-[40px] h-[40px] sm:w-10 sm:h-10'
                />
              </div>
              <h3 className='text-[18px] sm:text-2xl font-semibold text-white leading-[28px] sm:leading-[32px]'>
                Easy To Set Up
              </h3>
              <p className='text-[#A6A6A6] text-[14px] sm:text-base leading-[24px] sm:leading-[27px]'>
                One-click install and no learning curves. Integrating Assurify
                with your Shopify Store on any theme. So start protecting orders
                with no developer needed.
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
                The names of your brands will stay front and clear. Assurify
                works silently to safeguard your orders. So your customer stays
                focused on you, not us.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Support Section */}
      <div className='bg-[#0C0D0C]'>
        <Container>
          <div className='sm:pt-[150px] pt-[50px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
              <div className='flex flex-col gap-[32px] md:gap-[48px] md:max-w-[570px] w-full'>
                <SectionTitle
                  topText={'Support'}
                  middleText={'Instant Support & Service'}
                  bottomText={
                    "With an Automated and fast claim process, it's zero work for you. Our 24/7 services will always be with you!"
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
