import React, { useEffect, useRef } from 'react'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import roundBg from '../../assets/banner/round-bg.png'
import CustomIcon from '../../assets/icon/CustomIcon'
import Container from '../Common/Container'
import Button from '../Common/Button'

const ProtectionCoverage = () => {
  const protectionCoverageOptions = [
    { id: 1, title: 'Order placed', iconName: 'order_placed' },
    { id: 2, title: 'Claim raised', iconName: 'claim_raised' },
    { id: 3, title: 'Claim approved', iconName: 'claim_approved' },
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
            trigger: containerRef.current, // Trigger when the right-side container enters the viewport
            start: 'top 80%', // Start when top of container is 80% from top of viewport
            toggleActions: 'play none none none' // Play on enter
          }
        })

        // Fade in the rounded border
        tl.to(containerRef.current, {
          opacity: 1,
          duration: 1.2, // Slower fade-in (1200ms)
          delay: 0.3 // 300ms delay
        })

        // Fade in each element with stagger
        tl.to(
          elementRefs.current,
          {
            opacity: 1,
            duration: 0.8, // Slower fade-in (800ms)
            stagger: 0.5 // 500ms delay between elements
          },
          '-=0.6' // Overlap with border animation
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
    <div className='w-full mt-[150px] py-[150px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
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
        <div className='relative mx-auto z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-[30px] py-[26px]'>
            {/* Left side of the main content (header) - No animation */}
            <div className='flex flex-col gap-6'>
              <div className='flex justify-center items-center gap-3'>
                <img src={rightSideHr} alt='' className='max-w-[100px]' />
                <p className='text-xl font-normal leading-[30px]'>
                  Protection Coverage
                </p>
                <img src={leftSideHr} alt='' className='max-w-[100px]' />
              </div>
              <h1 className='text-5xl font-semibold text-gradient leading-[72px]'>
                Total Coverage & Claims Management
              </h1>
              <p className='text-[#A6A6A6] text-lg font-light leading-[27px]'>
                Purchasers crave carbon-neutral shipping options and total
                package protection. Guide Protection makes it easy to give the
                people what they want (again..and again).
              </p>
              <div>
                <Button buttonText='Get Started' variant='secondary-outline' />
              </div>
            </div>

            {/* Right side of the main content - With animation */}
            <div className='w-full lg:w-[744px] lg:h-[370px] flex items-center justify-center'>
              {/* Container for the border */}
              <div
                ref={containerRef}
                className='relative w-[370px] h-[370px] border-2 border-[#FFFFFF4D] rounded-full z-10'>
                {/* Options positioned around the circle */}
                {protectionCoverageOptions.map((opt, index) => {
                  const positions = [
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

                  const position = positions[index] || {
                    top: '50%',
                    left: '50%'
                  }

                  return (
                    <div
                      key={opt.id}
                      ref={(el) => (elementRefs.current[index] = el)}
                      className='absolute flex items-center gap-4 p-3 bg-[#000000] rounded-lg z-20'
                      style={{
                        top: position.top,
                        left: position.left,
                        transform: position.transform
                      }}>
                      <div className='p-2 bg-[#98FF9317] rounded-sm'>
                        <CustomIcon iconName={opt.iconName} />
                      </div>
                      <h3 className='text-xl font-normal text-white'>
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
