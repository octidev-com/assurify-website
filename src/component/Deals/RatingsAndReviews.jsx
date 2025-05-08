import React from 'react'
import CustomIcon from '../../assets/icon/CustomIcon'
import Button from '../Common/Button'

const RatingsAndReviews = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-[30px]'>
      {/* left side ratings stat */}
      <div className='col-span-1'>
        <h5 className='text-[#f7f7f7] font-semibold text-[18px] lg:text-2xl'>
          Ratings
        </h5>
        <p className='mt-[5px] text-[#A6A6A6] text-[12px] lg:text-base font-light leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          Ratings and reviews are verified and are from people who use the
          service
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
                  item === 5 ? 'half-filed-star-icon' : 'filled-star-icon'
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
                    item === 5 ? 'half-filed-star-icon' : 'filled-star-icon'
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
                  Are you tired of juggling multiple tools to safeguard your
                  online presence? Assurify is here to redefine digital security
                  and organization.
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
  )
}

export default RatingsAndReviews
