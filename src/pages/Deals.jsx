import React from 'react'
import roundBg from '../assets/banner/round-bg.png'
import CustomIcon from '../assets/icon/CustomIcon'

const Deals = () => {
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

      {/* main content */}
      <div className='container mt-14 mx-auto '>
        <div className=' flex gap-[30px]'>
          {/* product image */}
          <div className='w-[570px] h-[500px] rounded-xl bg-[#D9D9D9]'></div>

          {/* product details */}
          <div className='max-w-[570px] flex flex-col gap-8'>
            <div>
              <h1 className='text-[#F7F7F7] text-[40px] font-semibold leading-[60px] tracking-[-0.4px]'>
                Assurify Shipping Protection ( Lifetime Deal)
              </h1>
              <div>
                <div>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <CustomIcon key={item} iconName={'filed-star-icon'} />
                  ))}
                </div>
              </div>
              <p>$1,140.00</p>
              <p>
                Are you tired of juggling multiple tools to safeguard your
                online presence? Assurify is here to redefine digital security
                and organization.
              </p>
            </div>
            <button className='px-6 py-[11px] bg-[#48BD42] rounded-2xl text-base font-medium text-[#000]'>
              Buy Now
            </button>
            <button className='btn-secondary'>How to install Assurify?</button>
            <div>
              <p>
                Enjoy 20% OFF your next purchase with code SAVE20 - limited time
                only!
              </p>
              <p className=' text-[#fff] text-lg sm:text-xl font-medium leading-[30px]'>
                Follow us on
              </p>
              <div className='flex gap-4 mt-4'>
                <a
                  href='#'
                  className='w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                  <CustomIcon iconName='facebook-icon' />
                </a>
                <a
                  href='#'
                  className='w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                  <CustomIcon iconName='instagram-icon' />
                </a>
                <a
                  href='#'
                  className='w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                  <CustomIcon iconName='youtube-icon' />
                </a>
                <a
                  href='#'
                  className='w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                  <CustomIcon iconName='twitter-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deals
