import React, { useState } from 'react'
import CustomIcon from '../assets/icon/CustomIcon'
import FAQ from '../component/Home/FAQ'
import Container from '../component/Common/Container'
import Button from '../component/Common/Button'
import TopBg from '../component/Common/TopBg'
import AssurifyShippingProtectionCartImg from '../assets/deals/assurify-shipping-protection-cart-image.png'
import Description from '../component/Deals/Description'

const Deals = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('description')

  const faqs = [
    {
      id: 1,
      question: 'Is assurify suitable for beginners?',
      answer:
        'Absolutely! Assurify’s intuitive interface ensures even non-tech-savvy users can navigate the app effortlessly.'
    },
    {
      id: 2,
      question:
        'Can I upgrade to the lifetime deal if I’m on a subscription plan?',
      answer:
        'Absolutely! Assurify’s intuitive interface ensures even non-tech-savvy users can navigate the app effortlessly.'
    },
    {
      id: 3,
      question: 'Is my data stored securely on Assurify?',
      answer:
        'Absolutely! Assurify’s intuitive interface ensures even non-tech-savvy users can navigate the app effortlessly.'
    },
    {
      id: 4,
      question: 'Does Assurify work offline?',
      answer:
        'Absolutely! Assurify’s intuitive interface ensures even non-tech-savvy users can navigate the app effortlessly.'
    },
    {
      id: 5,
      question: 'Can I transfer my lifetime deal to another account?',
      answer:
        'Absolutely! Assurify’s intuitive interface ensures even non-tech-savvy users can navigate the app effortlessly.'
    }
  ]

  return (
    <TopBg>
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
                <div className='flex items-center gap-2'>
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
                  Are you tired of juggling multiple tools to safeguard your
                  online presence? Assurify is here to redefine digital security
                  and organization.
                </p>
              </div>

              {/* Buttons */}
              <div className='flex gap-3'>
                <Button variant='primary-green'>Buy Now</Button>
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

              {/* review tab content */}
              {activeTab === 'reviews' && (
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-[30px]'>
                  {/* left side ratings stat */}
                  <div className='col-span-1'>
                    <h5 className='text-[#f7f7f7] font-semibold text-[18px] lg:text-2xl'>
                      Ratings
                    </h5>
                    <p className='mt-[5px] text-[#A6A6A6] text-[12px] lg:text-base font-light leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
                      Ratings and reviews are verified and are from people who
                      use the service
                    </p>

                    {/* avg rating */}
                    <div className='flex flex-col gap-[4px]'>
                      <h2 className='text-[#f7f7f7] text-[48px] lg:text-[64px] leading-[72px] lg:leading-[96px] font-bold  tracking-[-0.4px]'>
                        4.5
                        <span className='text-[#a6a6a6] text-[20px] lg:text-[32px] lg:font-bold font-medium'>
                          {' '}
                          /5
                        </span>
                      </h2>
                      <div className='flex my-1'>
                        {[1, 2, 3, 4, 5].map((item) => (
                          <CustomIcon
                            key={item}
                            className={'w-[16px] h-[16px]'}
                            iconName={
                              item === 5
                                ? 'half-filed-star-icon'
                                : 'filled-star-icon'
                            }
                          />
                        ))}
                      </div>
                      <p className='text-[#A6A6A6] text-[14px] lg:text-xl font-normal leading-[21px] lg:leading-[30px]'>
                        Based on 288 reviews
                      </p>
                    </div>

                    {/* ratings counts */}
                    <div className='flex flex-col gap-[7px] mt-3'>
                      {[
                        { stars: 5, width: 95 },
                        { stars: 4, width: 85 },
                        { stars: 3, width: 70 },
                        { stars: 2, width: 20 },
                        { stars: 1, width: 5 }
                      ].map((item) => (
                        <div key={item.stars} className='flex items-center'>
                          <div className='flex items-center gap-0 '>
                            <p className='w-[12px] text-right'>{item.stars}</p>
                            <CustomIcon iconName={'star-icon'} />
                          </div>
                          <div className='w-full h-[10px] bg-[#A6A6A6] rounded-full ml-[9px]'>
                            <div
                              className='h-full bg-[#48BD42] rounded-full'
                              style={{ width: `${item.width}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* review and rating form */}
                    <div className='p-4 mt-[30px] bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.03)_100%)] backdrop-blur-[37px] rounded-2xl flex flex-col gap-3'>
                      <h5 className='text-[16px] lg:text-xl font-semibold text-[#f7f7f7] leading-[27px] lg:leading-[30px]'>
                        Add your comment
                      </h5>
                      <div className='flex items-center justify-between'>
                        <p className='text-[16px] lg:text-lg text-[#f7f7f7] font-light leading-[24px] lg:leading-[27px]'>
                          Ratings
                        </p>
                        <div className='flex gap-1'>
                          {[1, 2, 3, 4, 5].map((item) => (
                            <CustomIcon
                              key={item}
                              iconName={
                                item === 5
                                  ? 'half-filed-star-icon'
                                  : 'filled-star-icon'
                              }
                              className={'w-[24px] h-[24px]'}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Comment Form */}
                      <div>
                        <label
                          htmlFor='full-name'
                          className='text-[14px] lg:text-base text-[#A6A6A6] font-light leading-[21px] lg:leading-6'>
                          Full Name
                        </label>
                        <input
                          type='text'
                          id='full-name'
                          className='w-full px-4 h-12 rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email-address'
                          className='text-[14px] lg:text-base text-[#A6A6A6] font-light leading-[21px] lg:leading-6'>
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email-address'
                          className='w-full px-4 h-12 rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='what-can-we-help-you-with'
                          className='text-[14px] lg:text-base text-[#A6A6A6] font-light leading-[21px] lg:leading-6'>
                          What can we help you with?
                        </label>
                        <textarea
                          type='text'
                          id='what-can-we-help-you-with'
                          className='w-full p-4 h-[120px] rounded-xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none'
                        />
                      </div>

                      {/* Add Review Button */}
                      <Button>Add Review</Button>
                    </div>
                  </div>

                  {/* right side reviews */}
                  <div className='col-span-2 mt-[24px] lg:mt-[0]'>
                    <h5 className='text-[#f7f7f7] font-semibold text-[18px] lg:text-2xl leading-[27px]'>
                      Reviews
                    </h5>

                    {/* reviews */}
                    <div>
                      {[1, 2, 3, 4, 5, 6].map((item, index, array) => (
                        <React.Fragment key={item}>
                          <div className='flex flex-col gap-3 mt-3'>
                            <div>
                              <h5 className='text-[#F7F7F7] text-[16px] font-medium leading-[24px]'>
                                Cameron Williamson
                              </h5>

                              <div className='flex mt-2'>
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <CustomIcon
                                    key={star}
                                    className={'w-[16px] h-[16px]'}
                                    iconName={
                                      star === 5
                                        ? 'half-filled-star-icon'
                                        : 'filled-star-icon'
                                    }
                                  />
                                ))}
                              </div>
                            </div>

                            <p className='text-[#A6A6A6] text-[14px] lg:text-[16px] font-light leading-[18px] lg:leading-[24px] tracking-[-0.12px] lg:tracking-[-0.16px]'>
                              Are you tired of juggling multiple tools to
                              safeguard your online presence? Assurify is here
                              to redefine digital security and organization.
                            </p>

                            <p className='text-[#A6A6A6] font-light text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] tracking-[-0.12px]'>
                              14 December 2024
                            </p>
                          </div>

                          {/* Conditionally render hr or See more... */}
                          {index < array.length - 1 ? (
                            <hr className='w-full h-[1px] bg-[rgba(147,147,147,0.2)] border-0 rounded-[2px] my-3' />
                          ) : (
                            <p className='my-3 cursor-pointer text-[16px] text-[#f7f7f7] hover:underline text-base font-medium leading-[24px]'>
                              See more...
                            </p>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* faq section */}

          <FAQ faqs={faqs} />
        </div>
      </Container>
    </TopBg>
  )
}

export default Deals
