import React from 'react'

import brand1 from '../../assets/brands/brand-1.png'
import brand2 from '../../assets/brands/brand-2.png'
import brand3 from '../../assets/brands/brand-3.png'
import brand4 from '../../assets/brands/brand-4.png'
import brand5 from '../../assets/brands/brand-5.png'
import brand6 from '../../assets/brands/brand-6.png'
import brand7 from '../../assets/brands/brand-7.png'
import brand8 from '../../assets/brands/brand-8.png'
import SectionTitle from '../Common/SectionTitle'

const Brands = () => {
  return (
    <div className='mt-[150px] w-full'>
      {/* Header Section */}

      <SectionTitle
        topText={'Brands'}
        middleText={'Brands Who Are Trust Assurify'}
        bottomText={
          'Trusted by leading brands for security, reliability, and peace of mind'
        }
      />
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
