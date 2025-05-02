import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
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
  const sliderRef = useRef(null)
  const logos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8]

  useEffect(() => {
    const slider = sliderRef.current
    const logoCount = logos.length

    const updateAnimation = () => {
      const logoWidth =
        window.innerWidth >= 1024 ? 150 : window.innerWidth >= 640 ? 120 : 100
      const gap =
        window.innerWidth >= 1024 ? 12 : window.innerWidth >= 640 ? 8 : 4
      const totalWidth = (logoWidth + gap) * logoCount - gap

      gsap.set(slider, { x: 0 })
      gsap.to(slider, {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth * 2))
        },
        overwrite: true
      })
    }

    updateAnimation()
    window.addEventListener('resize', updateAnimation)
    return () => window.removeEventListener('resize', updateAnimation)
  }, [logos])

  return (
    <div className='mt-[150px] w-full'>
      <SectionTitle
        topText={'Brands'}
        middleText={'Brands Who Trust Assurify'}
        bottomText={
          'Trusted by leading brands for security, reliability, and peace of mind'
        }
      />
      <div className='mt-12 w-full overflow-hidden'>
        <div ref={sliderRef} className='flex flex-nowrap will-change-transform'>
          {logos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className='flex-shrink-0 w-[100px] sm:w-[120px] lg:w-[150px] mx-2 sm:mx-4 lg:mx-6'>
              <img src={logo} alt={`Brand ${index + 1}`} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`logo-dup-${index}`}
              className='flex-shrink-0 w-[100px] sm:w-[120px] lg:w-[150px] mx-2 sm:mx-4 lg:mx-6'>
              <img src={logo} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands
