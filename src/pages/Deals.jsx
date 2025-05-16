import React, { useRef, useState } from 'react'
import CustomIcon from '../assets/icon/CustomIcon'
import FAQ from '../component/Home/FAQ'
import Container from '../component/Common/Container'
import Button from '../component/Common/Button'
import AssurifyShippingProtectionCartImg from '../assets/deals/assurify-shipping-protection-cart-image.png'

import Description from '../component/Deals/Description'
import RatingsAndReviews from '../component/Deals/RatingsAndReviews'

import { useNavigate } from 'react-router'
const Deals = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('description')
  const navigate = useNavigate()
  const reviewsSectionRef = useRef(null)

  const scrollToReviews = () => {
    setActiveTab('reviews')
    setTimeout(() => {
      if (reviewsSectionRef.current) {
        const rect = reviewsSectionRef.current.getBoundingClientRect()
        const offset = window.innerWidth >= 1024 ? 210 : 160
        const topPosition = rect.top + window.scrollY - offset

        window.scrollTo({
          top: topPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const faqs = [
    {
      id: 1,
      question: 'Do I need to install anything special to use Assurify?',
      answer:
        "Nope! You can install the Assurify app from the Shopify App Store, activate your deal, and you're ready to go."
    },
    {
      id: 2,
      question: 'Can I upgrade from my current plan to the Lifetime Deal?',
      answer:
        "Yes, existing users can upgrade. Just contact our support team, and we'll help you switch."
    },
    {
      id: 3,
      question: 'Is support included in the Lifetime Deal?',
      answer:
        'Absolutely. You get 24/7 chat and priority support included for life.'
    },
    {
      id: 4,
      question: 'Can I transfer the deal to another store?',
      answer:
        'The Lifetime Deal is tied to a single Shopify store and cannot be transferred.'
    },
    {
      id: 5,
      question: 'Will I get future feature updates?',
      answer:
        "Yes! You'll continue to receive all feature updates and improvements at no extra cost."
    },
    {
      id: 6,
      question: 'What if I need help with setup?',
      answer:
        'Our onboarding team and chat support are always here to guide you, step by step.'
    },
    {
      id: 7,
      question: 'Will I get free Customer Support?',
      answer:
        'Yes, you will get lifetime customer support. But for additional customization, a service charge might be required based on the task scenario.'
    }
  ]

  return (
    <>
      {/* main content */}
      <Container>
        <div className='pt-[32px] md:pt-[56px]'>
          <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[30px]'>
            {/* product image */}
            <img
              src={AssurifyShippingProtectionCartImg}
              alt={'assurify-shipping-protection-cart-image'}
              className='max-w-[327px] max-h-[290px] md:max-w-[570px] md:max-h-[500px]'
            />

            {/* product details */}
            <div className='max-w-[570px] flex flex-col gap-[24px] lg:gap-8'>
              <div className='flex flex-col gap-[12px] lg:gap-4'>
                <h1 className='text-[#F7F7F7] text-[24px] lg:text-[40px] font-semibold leading-[36px] lg:leading-[60px] tracking-[-0.4px]'>
                  Assurify Shipping Protection (Lifetime Deal)
                </h1>
                <p className='text-white text-[12px] lg:text-base font-bold leading-[18px] lg:leading-[24px]'>
                  Secure More, Spend Less — Get Lifetime Access for a One-Time
                  Price
                </p>
                <div
                  className='flex items-center gap-2 cursor-pointer'
                  onClick={scrollToReviews}>
                  <div className='flex gap-1 h-[24px]'>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <CustomIcon
                        key={item}
                        iconName={
                          item === 5
                            ? 'half-filed-star-icon'
                            : 'filled-star-icon'
                        }
                        className={'w-[20px] md:w-[24px] h-[20px] md:h-[24px]'}
                      />
                    ))}
                  </div>
                  <p className='text-[14px] lg:text-lg font-normal text-[#F7F7F7]'>
                    4.5 (288 reviews)
                  </p>
                </div>

                <p className='text-[20px] lg:text-[32px] text-[#f7f7f7] font-semibold leading-[21px] lg:leading-12'>
                  $1,140.00
                </p>
                <p className='text-[#A6A6A6] text-[12px] lg:text-base font-light leading-[18px] lg:leading-[24px]'>
                  Pay one time for a lifetime deal to enhance your protection.
                  Don't have to pay monthly or annually, pay one time & Enjoy
                  lifetime revenue!
                </p>
              </div>

              {/* Buttons */}
              <div className='flex gap-3'>
                <Button
                  onClick={() => navigate('/checkout')}
                  variant='primary-green'>
                  Buy Now
                </Button>
                <Button variant='secondary-outline'>
                  How to install Assurify?
                </Button>
              </div>

              {/* Product details */}
              <div className='flex flex-col gap-4'>
                <div className='p-3 border-[1px] border-[#48bd421a] rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]'>
                  <p className='text-[#f7f7f7] text-[12px] lg:text-[16px] font-light leading-[30px]'>
                    Enjoy 20% OFF your next purchase with code{' '}
                    <span className='font-medium'>SAVE20</span> - limited time
                    only!
                  </p>
                </div>
                <div>
                  <p className='text-[#fff] text-lg font-normal leading-[27px]'>
                    Follow us on
                  </p>
                  <div className='flex gap-3 mt-2'>
                    {[
                      {
                        id: 1,
                        iconName: 'facebook-icon',
                        link: 'https://www.facebook.com/DaisyDiffusion'
                      },
                      {
                        id: 2,
                        iconName: 'instagram-icon',
                        link: 'https://www.instagram.com/daisy_diffusion/'
                      },
                      {
                        id: 3,
                        iconName: 'youtube-icon',
                        link: 'https://www.youtube.com/@DaisyDiffusion'
                      },
                      {
                        id: 4,
                        iconName: 'twitter-icon',
                        link: 'https://x.com/DaisyDiffu50543'
                      },
                      {
                        id: 5,
                        iconName: 'facebook-group-icon',
                        link: 'https://www.facebook.com/groups/daisydiffusioncommunity'
                      }
                    ].map((item) => (
                      <a
                        target='_blank'
                        href={item.link}
                        key={item.id}
                        className='w-[28px] md:w-[32px] h-[28px] md:h-[32px] rounded-full border border-[#A6A6A6] flex justify-center items-center '>
                        <CustomIcon
                          iconName={item.iconName}
                          className={'h-[16px] w-[16px] '}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className='mt-[32px] lg:mt-14'>
            {/* Tab Navigation Links */}
            <div className='bg-gradient-to-r from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.12)] backdrop-blur-[37px] rounded-t-xl p-4 flex gap-5'>
              <button
                className={`text-[16px] lg:text-[20px] font-medium leading-[24px] lg:leading-[30px] cursor-pointer ${
                  activeTab === 'description'
                    ? 'text-[#f7f7f7]'
                    : 'text-[#A6A6A6]'
                }`}
                onClick={() => setActiveTab('description')}>
                Description
              </button>
              <button
                className={`text-[16px] lg:text-[20px] font-medium leading-[24px] lg:leading-[30px] cursor-pointer ${
                  activeTab === 'reviews' ? 'text-[#f7f7f7]' : 'text-[#A6A6A6]'
                }`}
                onClick={() => setActiveTab('reviews')}>
                Ratings & Reviews
              </button>
            </div>

            {/* Tab Content */}
            <div className='border-b border-l border-r border-[rgba(72,189,66,0.10)] rounded-b-xl p-4'>
              {/* description tab content */}
              {activeTab === 'description' && <Description />}

              {/* ratings and reviews tab content */}
              {activeTab === 'reviews' && (
                <div ref={reviewsSectionRef}>
                  <RatingsAndReviews />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      {/* faq section */}

      <FAQ faqs={faqs} />
    </>
  )
}

export default Deals
