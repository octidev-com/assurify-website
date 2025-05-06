import React, { useEffect, useRef } from 'react'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import roundBg from '../../assets/banner/round-bg.png'
import CustomIcon from '../../assets/icon/CustomIcon'
import Container from '../Common/Container'
import Button from '../Common/Button'
import SectionTitle from '../Common/SectionTitle'

const ProtectionCoverage = () => {
  const protectionCoverageOptions = [
    { id: 1, title: 'Order placed', iconName: 'order_placed' },
    { id: 2, title: 'Claim raised', iconName: 'claim_raised' },
    { id: 3, title: 'Claim approved', iconName: 'claim_raised' },
    { id: 4, title: 'Merchant paid', iconName: 'merchant_paid' },
    { id: 5, title: 'Claim resolved', iconName: 'claim_resolved' },
    { id: 6, title: 'Reorder / refund', iconName: 'reorder_refund' }
  ]

  // Ref for the container and elements (right side only)
  const containerRef = useRef(null)
  const elementRefs = useRef([])

  useEffect(() => {
    // Dynamically load GSAP and ScrollTrigger
    const gsapScript = document.createElement('script')
    gsapScript.src =
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
    gsapScript.async = true

    const scrollTriggerScript = document.createElement('script')
    scrollTriggerScript.src =
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
    scrollTriggerScript.async = true

    // Flags to track if scripts were appended
    let gsapAppended = false
    let scrollTriggerAppended = false

    // Load GSAP first, then ScrollTrigger
    gsapScript.onload = () => {
      document.body.appendChild(scrollTriggerScript)
      scrollTriggerAppended = true
    }

    scrollTriggerScript.onload = () => {
      const { gsap, ScrollTrigger } = window

      if (containerRef.current && gsap && ScrollTrigger) {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        // Initially hide the container (border) and elements
        gsap.set(containerRef.current, { opacity: 0 })
        gsap.set(elementRefs.current, { opacity: 0 })

        // Create a timeline for the animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        })

        // Fade in the rounded border
        tl.to(containerRef.current, {
          opacity: 1,
          duration: 1.2,
          delay: 0.3
        })

        // Fade in each element with stagger
        tl.to(
          elementRefs.current,
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.5
          },
          '-=0.6'
        )
      }
    }

    // Append GSAP script first
    document.body.appendChild(gsapScript)
    gsapAppended = true

    // Cleanup scripts on unmount
    return () => {
      if (gsapAppended && document.body.contains(gsapScript)) {
        document.body.removeChild(gsapScript)
      }
      if (
        scrollTriggerAppended &&
        document.body.contains(scrollTriggerScript)
      ) {
        document.body.removeChild(scrollTriggerScript)
      }
    }
  }, [])

  return (
    <div className='w-full relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration left'
          className='w-[75vw] max-w-none'
        />
      </div>
      <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration right'
          className='w-[75vw] max-w-none'
        />
      </div>

      {/* Main content with container */}
      <Container>
        <div className='relative py-[24px] lg:py-[150px] mx-auto z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-[38px] py-[26px]'>
            {/* Left side of the main content (header) - No animation */}
            <div className='flex flex-col gap-[12px] lg:gap-[24px] max-w-[570px]'>
              <div className='flex justify-center lg:justify-start items-center gap-3'>
                <img src={rightSideHr} alt='' className='max-w-[100px]' />
                <p className='text-[14px] lg:text-[20px] text-[#F7F7F7] font-normal leading-[21px] lg:leading-[30px]'>
                  Protection Coverage
                </p>
                <img src={leftSideHr} alt='' className='max-w-[100px]' />
              </div>
              <h1 className='text-[48px] lg:text-5xl font-semibold text-center lg:text-left text-gradient leading-[36px] lg:leading-[72px]'>
                Total Coverage & Claims Management
              </h1>
              <p className='text-[#A6A6A6] text-[18px] lg:text-lg text-center lg:text-start font-light leading-[18px] lg:leading-[27px]'>
                Purchasers crave carbon-neutral shipping options and total
                package protection. Guide Protection makes it easy to give the
                people what they want (again..and again).
              </p>
              <div className='flex lg:justify-start justify-center'>
                <Button variant='secondary-outline'>Get Started</Button>
              </div>
            </div>

            {/* Right side of the main content - With animation */}
            <div className='w-full lg:w-[744px] lg:h-[370px] flex items-center justify-center'>
              {/* Container for the border */}
              <div
                ref={containerRef}
                className='relative w-[250px] h-[250px] lg:w-[370px] lg:h-[370px] border-2 border-[#FFFFFF4D] rounded-full z-10'>
                {/* Options positioned around the circle */}
                {protectionCoverageOptions.map((opt, index) => {
                  // Mobile positions (for <640px)
                  const mobilePositions = [
                    {
                      top: '0%',
                      left: '50%',
                      transform: 'translate(-50%, -80%)'
                    }, // Top
                    {
                      top: '25%',
                      left: '85%',
                      transform: 'translate(-20%, -50%)'
                    }, // Top-right
                    {
                      top: '75%',
                      left: '85%',
                      transform: 'translate(-20%, -50%)'
                    }, // Bottom-right
                    {
                      top: '100%',
                      left: '50%',
                      transform: 'translate(-50%, -20%)'
                    }, // Bottom
                    {
                      top: '75%',
                      left: '15%',
                      transform: 'translate(-80%, -50%)'
                    }, // Bottom-left
                    {
                      top: '25%',
                      left: '15%',
                      transform: 'translate(-80%, -50%)'
                    } // Top-left
                  ]

                  // Desktop positions (for >=1024px)
                  const desktopPositions = [
                    {
                      top: '0%',
                      left: '20%',
                      transform: 'translate(-55%, -40%)'
                    }, // Top-left
                    {
                      top: '0%',
                      left: '20%',
                      transform: 'translate(65%, -40%)'
                    }, // Top-right
                    {
                      top: '50%',
                      left: '10%',
                      transform: 'translate(-60%, -50%)'
                    }, // Middle-left
                    {
                      top: '50%',
                      left: '10%',
                      transform: 'translate(100%, -50%)'
                    }, // Middle-right
                    {
                      top: '100%',
                      left: '20%',
                      transform: 'translate(-55%, -60%)'
                    }, // Bottom-left
                    {
                      top: '100%',
                      left: '20%',
                      transform: 'translate(55%, -60%)'
                    } // Bottom-right
                  ]

                  // Select positions based on screen size
                  const isMobile = window.innerWidth < 640
                  const position = isMobile
                    ? mobilePositions[index]
                    : desktopPositions[index] || {
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }

                  return (
                    <div
                      key={opt.id}
                      ref={(el) => (elementRefs.current[index] = el)}
                      className='absolute flex items-center gap-2 lg:gap-4 p-[5px] lg:p-3 bg-[#000000] rounded-[5px] lg:rounded-lg z-20'
                      style={{
                        top: position.top,
                        left: position.left,
                        transform: position.transform
                      }}>
                      <div className='p-1.5 lg:p-2 bg-[#98FF9317] rounded-sm'>
                        <CustomIcon
                          iconName={opt.iconName}
                          className='w-4 h-4 lg:w-6 lg:h-6'
                        />
                      </div>
                      <h3 className='text-[#F7F7F7] text-[12px] lg:text-[20px] leading-[18px] lg:leading-[30px]'>
                        {opt.title}
                      </h3>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProtectionCoverage
