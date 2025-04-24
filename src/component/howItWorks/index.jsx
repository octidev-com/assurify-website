import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import stepImg1 from '../../assets/howItWorks/steps-img1.png'
import stepImg2 from '../../assets/howItWorks/steps-img2.png'
import stepImg3 from '../../assets/howItWorks/steps-img3.png'
import stepImg4 from '../../assets/howItWorks/steps-img4.png'
import stepImg5 from '../../assets/howItWorks/steps-img5.png'
import stepImg6 from '../../assets/howItWorks/steps-img6.png'
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
  const howItWorksSteps = [
    {
      id: 1,
      title: 'Protection Selected',
      description:
        'Customer selects Guide Protection as an added feature directly within their checkout.',
      image: stepImg1
    },
    {
      id: 2,
      title: 'Set Assurance Fees Easily',
      description: 'Auto-add assurance fees for lost or damage protection',
      image: stepImg2
    },
    {
      id: 3,
      title: 'Efficient Management Panel',
      description: 'Handle lost, damaged, or returned claims in-store',
      image: stepImg3
    },
    {
      id: 4,
      title: 'Automated Claims Processing',
      description: 'One-click claims through a simple resolution portal',
      image: stepImg4
    },
    {
      id: 5,
      title: 'Boost Revenue & Trust',
      description: 'Offset losses and build trust with shipping guarantee',
      image: stepImg5
    },
    {
      id: 6,
      title: 'Where Custom Meets Care',
      description: 'Fully customize pricing and style, backed by 24/7 support',
      image: stepImg6
    }
  ]

  const containerRef = useRef(null)
  const pinRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)

  // State to track current step and indicator numbers
  const [currentStep, setCurrentStep] = useState(0)
  const [indicatorNumbers, setIndicatorNumbers] = useState([1, 2, 3])

  // Preload images to prevent flicker
  useEffect(() => {
    howItWorksSteps.forEach((step) => {
      const img = new Image()
      img.src = step.image
    })
  }, [])

  // GSAP ScrollTrigger for content animations
  useEffect(() => {
    const container = containerRef.current
    const pin = pinRef.current
    const image = imageRef.current
    const title = titleRef.current
    const description = descriptionRef.current

    // Set container height
    gsap.set(container, {
      height: `${window.innerHeight * (howItWorksSteps.length + 1)}px`
    })

    // Initialize first step's visibility
    gsap.set([image, title, description], {
      opacity: 1,
      y: 0
    })

    // Pin the content
    ScrollTrigger.create({
      trigger: pin,
      start: 'center center',
      end: `+=${window.innerHeight * howItWorksSteps.length}`,
      pin: true,
      pinSpacing: false
    })

    // ScrollTrigger for content updates
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${window.innerHeight * (howItWorksSteps.length + 1)}`,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress * (howItWorksSteps.length + 1)
        const newStepIndex = Math.min(
          Math.floor(progress),
          howItWorksSteps.length
        )
        const stepProgress = progress - newStepIndex

        // Update content and indicators
        if (newStepIndex !== currentStep) {
          const step = howItWorksSteps[newStepIndex]
          image.src = step.image
          image.alt = step.title
          title.textContent = step.title
          description.textContent = step.description
          setCurrentStep(newStepIndex)
          setIndicatorNumbers(newStepIndex < 3 ? [1, 2, 3] : [4, 5, 6])
        }

        // Animate image, title, and description
        let opacity, y
        if (newStepIndex === 0 && progress < 0.8) {
          opacity = 4
          y = 0
        } else {
          if (stepProgress < 0.8) {
            opacity = 0.6 + stepProgress * 1.8
            y = 54 - stepProgress * 104
          } else {
            opacity = 4 - (stepProgress - 0.8) * 5
            y = (stepProgress - 0.8) * 45
          }
        }
        gsap.to([image, title, description], {
          opacity,
          y,
          duration: 1,
          ease: 'power2.out'
        })
      }
    })

    // Handle resize
    const handleResize = () => {
      gsap.set(container, {
        height: `${window.innerHeight * howItWorksSteps.length}px`
      })
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [currentStep])

  return (
    <div
      ref={containerRef}
      className='mt-[150px] container min-h-screen overflow-x-hidden '>
      <div ref={pinRef} className='relative pb-8'>
        {/* Header Section */}
        <div className='w-[732px] max-w-full mx-auto flex flex-col gap-4 px-4'>
          <div className='flex justify-center items-center gap-3'>
            <img src={rightSideHr} alt='' className='max-w-[100px]' />
            <p className='text-xl font-normal leading-[30px]'>
              Protection Coverage
            </p>
            <img src={leftSideHr} alt='' className='max-w-[100px]' />
          </div>
          <h1 className='text-5xl font-semibold text-gradient text-center leading-[72px]'>
            How It Works
          </h1>
          <p className='text-[#A6A6A6] text-lg font-light text-center leading-[27px]'>
            With licensed shipping protection, fast issue resolution, package
            tracking, product recommendations, and carbon neutral shipping.
          </p>
          <div className='flex justify-center'>
            <button type='button' className='btn-primary'>
              Get Started
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className='rounded-2xl mt-8 flex justify-center items-center'>
          {/* Left Side Image */}
          <img
            ref={imageRef}
            src={howItWorksSteps[0].image}
            alt={howItWorksSteps[0].title}
            className='max-w-[50%] object-contain'
          />
          {/* Description Middle Section */}
          <div className='ml-8 max-w-[40%]'>
            <h1
              ref={titleRef}
              className='text-[#f7f7f7] text-5xl font-normal leading-[72px] mb-4'>
              {howItWorksSteps[0].title}
            </h1>
            <p
              ref={descriptionRef}
              className='text-[#A6A6A6] text-lg font-normal leading-[30px]'>
              {howItWorksSteps[0].description}
            </p>
          </div>

          {/* Navigation Indicator */}
          <div className='flex flex-col items-center ml-8 min-h-[400px]'>
            {indicatorNumbers.map((number) => (
              <svg
                key={number}
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height={number - 1 === currentStep ? '131' : '132'}
                viewBox={
                  number - 1 === currentStep ? '0 0 48 131' : '0 0 48 132'
                }
                fill='none'
                className='mb-[-20px]'
                aria-label={`Step ${number}`}>
                <rect
                  x='24'
                  y={number - 1 === currentStep ? '46.75' : '47.25'}
                  width='84'
                  height='1.5'
                  rx='0.749998'
                  transform={`rotate(90 24 ${
                    number - 1 === currentStep ? '46.75' : '47.25'
                  })`}
                  fill={
                    number - 1 === currentStep
                      ? 'url(#paint0_linear_624_353)'
                      : '#A6A6A6'
                  }
                  opacity={number - 1 === currentStep ? '1' : '0.7'}
                />
                <circle
                  cx='24'
                  cy={number - 1 === currentStep ? '24.25' : '24.75'}
                  r='23.25'
                  stroke={
                    number - 1 === currentStep
                      ? 'url(#paint1_linear_624_353)'
                      : 'white'
                  }
                  strokeWidth='1.5'
                />
                <text
                  x='24'
                  y={number - 1 === currentStep ? '29.25' : '30'}
                  fontSize='24'
                  fontWeight='600'
                  fill={number - 1 === currentStep ? 'white' : '#A6A6A6'}
                  textAnchor='middle'
                  className='select-none'>
                  {number}
                </text>
                <defs>
                  {number - 1 === currentStep && (
                    <>
                      <linearGradient
                        id='paint0_linear_624_353'
                        x1='24'
                        y1='47.5'
                        x2='108'
                        y2='47.5'
                        gradientUnits='userSpaceOnUse'>
                        <stop stopColor='#48BD42' />
                        <stop offset='1' stopColor='#0C0D0C' />
                      </linearGradient>
                      <linearGradient
                        id='paint1_linear_624_353'
                        x1='4.23529'
                        y1='12.25'
                        x2='43.96'
                        y2='39.9448'
                        gradientUnits='userSpaceOnUse'>
                        <stop stopColor='#48BD42' />
                        <stop offset='1' stopColor='white' />
                      </linearGradient>
                    </>
                  )}
                </defs>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
