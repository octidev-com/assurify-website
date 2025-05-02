import React from 'react'
import Container from '../Common/Container'
import Button from '../Common/Button'

const Banner = () => {
  return (
    <div>
      <Container>
        <div className='max-w-[299px] lg:max-w-[602px] text-center mx-auto'>
          <h1 className='text-[48px] sm:text-[56px] lg:text-[114px] font-semibold leading-[62px] sm:leading-[64px] lg:leading-[130px] mb-2 sm:mb-3 lg:mb-4'>
            Guard Your Packages
          </h1>
          <p className='text-sm sm:text-base lg:text-lg font-[300] text-[#F7F7F7] mb-4 sm:mb-5 lg:mb-6'>
            Assurify isn't just about protecting lost, stolen, or damaged
            packages; it's about protecting your brand.
          </p>
          <div className='flex justify-center gap-2 sm:gap-4 lg:gap-5'>
            <Button>How it works</Button>
            <Button variant='secondary-outline'>View Demo</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
