import React from 'react'
import rightSideHr from '../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../assets/howItWorks/left-side-hr.png'
import roundBg from '../assets/banner/round-bg.png'
import CustomIcon from '../assets/icon/CustomIcon'

const ContactUs = () => {
  return (
    <div className='w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden'>
      {/* Right side bg image */}
      <div className='absolute -top-[800px] -left-[500px] pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration left'
          className='w-[75vw] max-w-none opacity-80'
        />
      </div>

      {/* Left side bg image */}
      <div className='absolute -top-[800px] -right-[500px] pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration right'
          className='w-[75vw] max-w-none opacity-80'
        />
      </div>

      {/* Spacer to prevent content overlap with Navbar */}
      <div className='w-full h-[80px]'></div>

      <div className='container mt-14 mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='w-[732px] max-w-full mx-auto flex flex-col gap-4'>
          <div className='flex justify-center items-center gap-3'>
            <img
              src={rightSideHr}
              alt='Right horizontal line'
              className='max-w-[100px]'
            />
            <p className='text-xl font-normal leading-[30px]'>Contact us</p>
            <img
              src={leftSideHr}
              alt='Left horizontal line'
              className='max-w-[100px]'
            />
          </div>
          <h1 className='text-5xl font-semibold text-gradient text-center leading-[72px]'>
            Questions? Feel Free to Reach Out Via Message.
          </h1>
          <p className='text-[#A6A6A6] text-lg font-light text-center leading-[27px]'>
            Let’s turn your journey into something extraordinary.
          </p>
        </div>

        {/* Main Contact */}
        <div className='flex flex-col md:flex-row justify-between gap-6 mt-12 w-full'>
          {/* Contact Info */}
          <div className='flex flex-col gap-6 w-full md:w-[35%]'>
            <div className='flex gap-4 items-center p-6 rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]'>
              <div className='w-[70px] h-[70px] rounded-full border-[1.4px] border-[#FFFFFF1A] flex items-center justify-center'>
                <CustomIcon iconName={'envelope-icon'} />
              </div>
              <div>
                <p className='text-base font-light leading-6 text-[#A6A6A6]'>
                  We're always happy to help
                </p>
                <p className='text-xl font-normal leading-[30px] text-[#F7F7F7]'>
                  octidevfigma@gmail.com
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-center p-6 rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]'>
              <div className='w-[70px] h-[70px] rounded-full border-[1.4px] border-[#FFFFFF1A] flex items-center justify-center'>
                <CustomIcon iconName={'phone-icon'} />
              </div>
              <div>
                <p className='text-base font-light leading-6 text-[#A6A6A6]'>
                  Our hotline number
                </p>
                <p className='text-xl font-normal leading-[30px] text-[#F7F7F7]'>
                  +1(551) 333-7997
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-center p-6 rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]'>
              <div className='w-[70px] h-[70px] rounded-full border-[1.4px] border-[#FFFFFF1A] flex items-center justify-center'>
                <CustomIcon iconName={'location-icon'} />
              </div>
              <div>
                <p className='text-base font-light leading-6 text-[#A6A6A6]'>
                  Found us here
                </p>
                <p className='text-xl font-normal leading-[30px] text-[#F7F7F7]'>
                  ENG, NN8 1HT, GB
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us Form */}
          <div className='p-6 rounded-[26px] bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px] w-full md:w-[60%]'>
            <form className='flex flex-col gap-6'>
              <div>
                <label
                  htmlFor='full-name'
                  className='text-base text-[#A6A6A6] font-light leading-6'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='full-name'
                  className='w-full px-4 h-12 rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none'
                />
              </div>
              <div>
                <label
                  htmlFor='full-name'
                  className='text-base text-[#A6A6A6] font-light leading-6'>
                  Email Address
                </label>
                <input
                  type='text'
                  id='full-name'
                  className='w-full px-4 h-12 rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none'
                />
              </div>
              <div>
                <label
                  htmlFor='full-name'
                  className='text-base text-[#A6A6A6] font-light leading-6'>
                  Subject
                </label>
                <input
                  type='text'
                  id='full-name'
                  className='w-full px-4 h-12 rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='full-name'
                  className='text-base text-[#A6A6A6] font-light leading-6'>
                  What can we help you with?
                </label>
                <textarea
                  type='text'
                  id='full-name'
                  className='w-full p-4 h-[200px] rounded-xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none'
                />
              </div>

              <button
                type='submit'
                className='w-full py-[11px] bg-[#48BD42] rounded-2xl text-[#000] text-base font-medium '>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
