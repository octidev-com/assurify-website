import React from 'react'
import Container from '../Common/Container'
import Button from '../Common/Button'
const Banner = () => {
  return (
    <div>
      <div className='max-w-[1170px] mx-auto px-[38px] xl:px-0'>
        <div className='flex flex-col items-center gap-[12px] lg:gap-[16px] text-left md:text-center'>
          <p className='text-display-semibold text-center max-w-[888px]'>
            Eliminate Shipping Risk
          </p>
          <p className='text-large-paragraph text-paragraph-light text-gray text-center max-w-[770px] inline-block'>
            Protect your packages from loss, theft, or damage and boost revenue
            with the{' '}
            <h1 className='inline text-inherit m-0 p-0'>
              Assurify Shipping Protection
            </h1>{' '}
            App, your store's shield for customer trust and retention.
          </p>
          <div className='flex justify-center gap-4 sm:gap-5 lg:gap-7 mt-[4px] lg:mt-[16px]'>
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
