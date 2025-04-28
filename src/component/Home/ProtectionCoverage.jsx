import React, { useEffect, useRef } from 'react'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import roundBg from '../../assets/banner/round-bg.png'
import CustomIcon from '../../assets/icon/CustomIcon'

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
            start: 'top 80%', // Start the animation when the top of the container is 80% from the top of the viewport
            toggleActions: 'play none none none' // Play the animation when entering the viewport
          }
        })

        // Fade in the rounded border
        tl.to(containerRef.current, {
          opacity: 1,
          duration: 1.2, // Slower fade-in for the border (1200ms)
          delay: 0.3 // 300ms delay
        })

        // Fade in each element one by one with a stagger
        tl.to(
          elementRefs.current,
          {
            opacity: 1,
            duration: 0.8, // Slower fade-in for each element (800ms)
            stagger: 0.5 // 500ms delay between each element for a more gradual reveal
          },
          '-=0.6' // Overlap the start of the element animation slightly with the border animation
        )
      }
    }

    // Append GSAP script first
    document.body.appendChild(gsapScript)
    gsapAppended = true

    // Cleanup scripts on component unmount
    return () => {
      // Only remove scripts if they were appended
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
    <div className='text-white mt-[150px] relative w-full flex justify-center overflow-hidden py-[150px] '>
      {/* Right side bg image */}
      <div className='absolute -top-[50%] -left-[800px]'>
        <img src={roundBg} alt='Background decoration' />
      </div>

      {/* Background images wrapper */}
      <div className='container'>
        <div className='grid grid-cols-2 justify-center gap-[30px] py-[26px]'>
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
              Purchasers crave carbon-neutral shipping options and total package
              protection. Guide Protection makes it easy to give the people what
              they want (again..and again).
            </p>
            <div>
              <button type='button' className='btn-secondary'>
                Get Started
              </button>
            </div>
          </div>

          {/* Right side of the main content - With animation */}
          <div className='w-[744px] h-[370px] flex items-center justify-center'>
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
                  }, // Top-left ("Order placed")
                  { top: '0%', left: '20%', transform: 'translate(65%, -40%)' }, // Top-right ("Claim raised")
                  {
                    top: '50%',
                    left: '10%',
                    transform: 'translate(-60%, -50%)'
                  }, // Middle-left ("Claim approved")
                  {
                    top: '50%',
                    left: '10%',
                    transform: 'translate(100%, -50%)'
                  }, // Middle-right ("Merchant paid")
                  {
                    top: '100%',
                    left: '20%',
                    transform: 'translate(-55%, -60%)'
                  }, // Bottom-left ("Claim resolved")
                  {
                    top: '100%',
                    left: '20%',
                    transform: 'translate(55%, -60%)'
                  } // Bottom-right ("Reorder / refund")
                ]

                const position = positions[index] || { top: '50%', left: '50%' }

                return (
                  <div
                    key={opt.id}
                    ref={(el) => (elementRefs.current[index] = el)} // Store ref for each element
                    className='absolute flex items-center gap-4 p-3 bg-[#000000] rounded-lg z-20' // Changed bg to fully opaque
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

      {/* Left side bg image */}
      <div className='absolute -top-[50%] -right-[800px]'>
        <img src={roundBg} alt='Background decoration' />
      </div>
    </div>
  )
}

export default ProtectionCoverage
