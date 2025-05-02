import React from 'react'
import roundBg from '../assets/banner/round-bg.png'
import CustomIcon from '../assets/icon/CustomIcon'
import Container from '../component/Common/Container'
import SectionTitle from '../component/Common/SectionTitle'
import Button from '../component/Common/Button'

const ContactUs = () => {
  return (
    <div className='w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden'>
      {/* Right side bg image */}
      <div className='absolute -top-[400px] -left-[250px] sm:-top-[600px] sm:-left-[400px] lg:-top-[800px] lg:-left-[500px] pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration left'
          className='w-[50vw] sm:w-[60vw] lg:w-[75vw] max-w-none opacity-80'
        />
      </div>

      {/* Left side bg image */}
      <div className='absolute -top-[400px] -right-[250px] sm:-top-[600px] sm:-right-[400px] lg:-top-[800px] lg:-right-[500px] pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration right'
          className='w-[50vw] sm:w-[60vw] lg:w-[75vw] max-w-none opacity-80'
        />
      </div>

      {/* Main content */}
      <Container>
        <div className='mt-8 sm:mt-10 md:mt-12 lg:mt-14'>
          {/* Header Section */}
          <SectionTitle
            topText={'Contact us'}
            middleText={'Questions? Feel Free to Reach Out Via Message.'}
            bottomText={'Let’s turn your journey into something extraordinary.'}
          />

          {/* Main Contact */}
          <div className='flex flex-col lg:flex-row justify-between gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12 w-full'>
            {/* Contact Info */}
            <div className='flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full lg:w-[35%]'>
              {[
                {
                  id: 1,
                  icon: 'envelope-icon',
                  text1: "We're always happy to help",
                  text2: 'octidevfigma@gmail.com'
                },
                {
                  id: 2,
                  icon: 'phone-icon',
                  text1: 'Our hotline number',
                  text2: '+1(551) 333-7997'
                },
                {
                  id: 1,
                  icon: 'location-icon',
                  text1: 'Found us here',
                  text2: 'ENG, NN8 1HT, GB'
                }
              ].map((item) => (
                <div
                  key={item.id}
                  className='flex gap-3 sm:gap-4 items-center p-4 sm:p-5 lg:p-6 rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]'>
                  <div className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full border-[1.4px] border-[#FFFFFF1A] flex items-center justify-center'>
                    <CustomIcon
                      iconName={item.icon}
                      className={'w-[24px] md:w-[32px] h-[24px] md:h-[32px]'}
                    />
                  </div>
                  <div>
                    <p className='text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]'>
                      {item.text1}
                    </p>
                    <p className='text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-[30px] text-[#F7F7F7]'>
                      {item.text2}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Us Form */}
            <div className='p-4 sm:p-5 lg:p-6 rounded-[16px] sm:rounded-[20px] lg:rounded-[26px] bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px] w-full lg:w-[60%]'>
              <form className='flex flex-col gap-4 sm:gap-5 lg:gap-6'>
                <div>
                  <label
                    htmlFor='full-name'
                    className='text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='full-name'
                    className='w-full px-3 sm:px-4 h-10 sm:h-11 lg:h-12 rounded-xl sm:rounded-2xl mt-1 sm:mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none text-sm sm:text-base'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email-address'
                    className='text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email-address'
                    className='w-full px-3 sm:px-4 h-10 sm:h-11 lg:h-12 rounded-xl sm:rounded-2xl mt-1 sm:mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none text-sm sm:text-base'
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    className='w-full px-3 sm:px-4 h-10 sm:h-11 lg:h-12 rounded-xl sm:rounded-2xl mt-1 sm:mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none text-sm sm:text-base'
                  />
                </div>
                <div>
                  <label
                    htmlFor='what-can-we-help-you-with'
                    className='text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]'>
                    What can we help you with?
                  </label>
                  <textarea
                    id='what-can-we-help-you-with'
                    className='w-full p-3 sm:p-4 h-[120px] sm:h-[160px] lg:h-[200px] rounded-lg sm:rounded-xl mt-1 sm:mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none text-sm sm:text-base'
                  />
                </div>
                <Button variant='primary-green'>Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs
