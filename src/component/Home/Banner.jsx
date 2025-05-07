import React from 'react'
import Container from '../Common/Container'
import Button from '../Common/Button'

const Banner = () => {
  return (
    <div>
      <div className='max-w-[1170px] mx-auto px-[38px]  xl:px-0'>
        <div className='flex flex-col items-start md:items-center gap-[12px] lg:gap-[16px] text-left md:text-center '>
          <h1 className=' text-[#F7F7F7] text-[48px] lg:text-[80px] font-semibold leading-[62px] lg:leading-[120px]'>
            Eliminate Shipping Risk with Assurify Shipping Protection
          </h1>
          <p className=' mx-auto text-xs sm:text-base lg:text-lg font-light text-[#F7F7F7] leading-[18px] lg:leading-[30px]'>
            Protect your packages from shipping incidents like loss, theft, or
            damage. Safeguard your store with the Assurify Shipping Insurance
            App and boost your revenue and customer retention like never before.
          </p>
          <div className='flex justify-center gap-4 sm:gap-5 lg:gap-7 mt-[16px] lg:mt-[32px]'>
            <Button>How it works</Button>
            <Button variant='secondary-outline'>View Demo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
