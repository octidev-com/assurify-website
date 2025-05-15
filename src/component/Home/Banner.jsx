import React from 'react'
import Container from '../Common/Container'
import Button from '../Common/Button'

const Banner = () => {
  return (
    <div>
      <div className='max-w-[1170px] mx-auto px-[38px]  xl:px-0'>
        <div className='flex flex-col items-center gap-[12px] lg:gap-[16px] text-left md:text-center '>
          <h1 className=' text-[#F7F7F7] text-[48px] lg:text-[124px] font-semibold leading-[62px] lg:leading-[130px] max-w-[888px]'>
            Eliminate Shipping Risk
          </h1>
          <p className='text-center text-xs sm:text-base lg:text-xl font-light text-[#F7F7F7] leading-[18px] lg:leading-[30px] max-w-[570px]'>
            Assurify isn't just about protecting lost, stolen, or damaged
            packages; it's about protecting your brand.
          </p>
          <div className='flex justify-center gap-4 sm:gap-5 lg:gap-7 mt-4px] lg:mt-[16px]'>
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
        </div>
      </div>
    </div>
  )
}

export default Banner
