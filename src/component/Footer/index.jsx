import React from 'react'
import OrgIcon from '../../assets/icon/assurify-icon.png'
import CustomIcon from '../../assets/icon/CustomIcon'
import roundBg from '../../assets/banner/round-bg.png'

const Footer = () => {
  return (
    <div className='mt-[150px] w-full'>
      {/* Call to action section */}
      <div className='mx-auto flex items-center justify-between p-12 container border border-[rgba(72,189,66,0.10)] bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px] rounded-[26px] relative z-10 shadow-lg -mb-16'>
        <div className='flex flex-col gap-4 w-[664px]'>
          <h1 className='text-[40px] font-normal leading-[50px]'>
            Protect Your Customers, Boost Your Margins — Shipping Coverage That
            Works for Everyone.
          </h1>
          <p className='text-lg font-light text-[#A6A6A6] leading-[27px]'>
            Seamlessly cover lost, stolen, or damaged shipments while building
            trust with customers and unlocking new revenue with every sale.
          </p>
        </div>

        <button className='btn-primary'>Try it for free</button>
      </div>

      {/* Footer section */}
      <div className='w-full relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
        {/* Background elements */}
        <div className='absolute top-1/2 left-[-30%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img
            src={roundBg}
            alt='Background decoration left'
            className='w-[75vw] max-w-none'
          />
        </div>
        <div className='absolute top-1/2 right-[-30%] transform -translate-y-1/2 pointer-events-none z-0'>
          <img
            src={roundBg}
            alt='Background decoration right'
            className='w-[75vw] max-w-none'
          />
        </div>

        {/* Main content with container */}
        <div className='container relative pt-[150px] pb-[70px] mx-auto z-10'>
          <div className='flex flex-col md:flex-row justify-between gap-8'>
            {/* Left side: Org name and description */}
            <div className='max-w-[500px]'>
              <img
                src={OrgIcon}
                alt='Assurify logo'
                className='w-[100px] h-[25px]'
              />
              <p className='text-[#A6A6A6] text-sm font-normal leading-6 mt-6'>
                Our shipping protection app helps e-commerce brands safeguard
                orders from loss, theft, or damage. Enhance customer trust,
                reduce support costs, and recover revenue effortlessly—while
                offering seamless, branded protection at checkout that boosts
                margins and builds long-term loyalty.
              </p>
            </div>

            {/* Right side: Contacts and navigation links */}
            <div className='flex flex-col md:flex-row gap-12 md:gap-[115px]'>
              {/* Navigation links */}
              <div className='flex flex-col'>
                <p className='text-[#f7f7f7] text-lg font-semibold leading-normal'>
                  Company
                </p>
                <div className='flex flex-col gap-4 mt-8'>
                  <a
                    href='#'
                    className='text-[#fff] text-base font-light leading-6'>
                    Home
                  </a>
                  <a
                    href='#'
                    className='text-[#fff] text-base font-light leading-6'>
                    Documentation
                  </a>
                  <a
                    href='#'
                    className='text-[#fff] text-base font-light leading-6'>
                    Discussion
                  </a>
                  <a
                    href='#'
                    className='text-[#fff] text-base font-light leading-6'>
                    Deals
                  </a>
                  <a
                    href='#'
                    className='text-[#fff] text-base font-light leading-6'>
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Contact links and newsletter */}
              <div className='flex flex-col'>
                <label
                  htmlFor='user-email'
                  className='text-[#fff] text-xl font-semibold leading-[30px]'>
                  Newsletter
                </label>
                <div className='flex'>
                  <input
                    type='email'
                    id='user-email'
                    placeholder='Enter your email'
                    className='mt-2 py-3 px-4 rounded-l-xl text-[#fff] text-base font-normal leading-6 border border-[#A6A6A6]/30 focus:outline-none focus:border-[#A6A6A6] transition-colors bg-gradient-to-r from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.06)] backdrop-blur-[37px]'
                  />
                  <button className='mt-2 px-4 py-3 rounded-r-xl bg-[#48BD42] text-[#0C0D0C] text-base font-normal leading-6'>
                    Subscribe
                  </button>
                </div>
                <p className='mt-8 text-[#fff] text-xl font-medium leading-[30px]'>
                  Follow us on
                </p>
                <div className='flex gap-4 mt-4'>
                  <a
                    href='#'
                    className='w-[50px] h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                    <CustomIcon iconName='facebook-icon' />
                  </a>
                  <a
                    href='#'
                    className='w-[50px] h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                    <CustomIcon iconName='instagram-icon' />
                  </a>
                  <a
                    href='#'
                    className='w-[50px] h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                    <CustomIcon iconName='youtube-icon' />
                  </a>
                  <a
                    href='#'
                    className='w-[50px] h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                    <CustomIcon iconName='twitter-icon' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Horizontal line */}
          <hr className='w-full h-[2px] bg-[#FFFFFF33] border-0 my-10' />

          <p className='text-center text-[#A6A6A6] font-normal text-sm leading-[21px]'>
            @ 2025 copyright assurfiy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
