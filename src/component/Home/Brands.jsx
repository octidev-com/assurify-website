import React from 'react'

import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import brand1 from '../../assets/brands/brand-1.png'
import brand2 from '../../assets/brands/brand-2.png'
import brand3 from '../../assets/brands/brand-3.png'
import brand4 from '../../assets/brands/brand-4.png'
import brand5 from '../../assets/brands/brand-5.png'
import brand6 from '../../assets/brands/brand-6.png'
import brand7 from '../../assets/brands/brand-7.png'
import brand8 from '../../assets/brands/brand-8.png'

const Brands = () => {
  return (
    <div className='mt-[150px] w-full'>
      {/* Header Section */}
      <div className='w-[732px] max-w-full mx-auto flex flex-col gap-4 px-4'>
        <div className='flex justify-center items-center gap-3'>
          <img src={rightSideHr} alt='' className='max-w-[100px]' />
          <p className='text-xl font-normal leading-[30px]'>Brands</p>
          <img src={leftSideHr} alt='' className='max-w-[100px]' />
        </div>
        <h1 className='text-5xl font-semibold text-gradient text-center leading-[72px]'>
          Brands Who Are Trust Assurify
        </h1>
        <p className='text-[#A6A6A6] text-lg font-light text-center leading-[27px]'>
          Trusted by leading brands for security, reliability, and peace of mind
        </p>
      </div>
      <div className='mt-12 flex justify-between w-full'>
        <img src={brand1} alt='' />
        <img src={brand2} alt='' />
        <img src={brand3} alt='' />
        <img src={brand4} alt='' />
        <img src={brand5} alt='' />
        <img src={brand6} alt='' />
        <img src={brand7} alt='' />
        <img src={brand8} alt='' />
      </div>
    </div>
  )
}

export default Brands
