import React from 'react'
import roundBg from '../../assets/banner/round-bg.png'
import InspirationImg from '../../assets/InsightsAndInspiration/Rectangle 14.png'
import BlogImg2 from '../../assets/InsightsAndInspiration/blog-img1.png'
import BlogImg3 from '../../assets/InsightsAndInspiration/blog-img2.png'
import BlogImg1 from '../../assets/InsightsAndInspiration/blog-img3.png'
import Container from '../Common/Container'
import SectionTitle from '../Common/SectionTitle'
import Button from '../Common/Button'
import CustomIcon from '../../assets/icon/CustomIcon'

const InsightsAndInspiration = () => {
  const blogs = [
    {
      id: 1,
      img: BlogImg1,
      title: 'Boost Cart Conversions with Assurify',
      shortDes:
        'As a Shopify shopkeeper, getting a customer to include a product in their cart is simply the first',
      externalLink:
        'https://blog.assurify.app/boost-cart-conversions-with-assurify/'
    },
    {
      id: 2,
      img: BlogImg2,
      title: 'Assurify vs. Traditional Shipping Insurance',
      shortDes:
        'As a Shopify shopkeeper, getting a customer to include a product in their cart is simply the first',
      externalLink:
        'https://blog.assurify.app/assurify-vs-traditional-insurance/'
    },
    {
      id: 3,
      img: BlogImg3,
      title: 'Why Every Shopify Store Needs a Shipping Protection App',
      shortDes:
        'As a Shopify shopkeeper, getting a customer to include a product in their cart is simply the first',
      externalLink:
        'https://blog.assurify.app/why-every-shopify-store-needs-a-shipping-protection-app/'
    }
  ]

  return (
    <div className='w-full mt-[0px] md:mt-[120px] lg:mt-[150px] py-[24px] md:py-[100px] lg:py-[150px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-1/2 left-[-30%] md:left-[-40%] lg:left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration'
          className='w-[150vw] md:w-[120vw] lg:w-[100vw] max-w-none'
        />
      </div>
      <div className='absolute top-1/2 right-[-30%] md:right-[-40%] lg:right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration'
          className='w-[150vw] md:w-[120vw] lg:w-[100vw] max-w-none'
        />
      </div>

      {/* Main content with container */}
      {/* <Container> */}
      <div className='max-w-[1170px] mx-auto px-[16px] xl:px-0'>
        <div className='relative mx-auto'>
          {/* Header */}
          <SectionTitle
            topText={'Insights & Inspiration'}
            middleText={
              'Expert Tips, Industry Insights & Latest Updates for You'
            }
            bottomText={
              'Find answers to common questions and get the support you need—quick and easy'
            }
          />

          {/* Main content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[30px] mt-6 md:mt-8 lg:mt-[48px]'>
            {blogs.map((item) => (
              // blog card
              <div
                key={item.id}
                className='bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] rounded-xl'>
                <img src={item.img} alt='inspiration-image' />
                <div className='p-3 md:p-4 lg:p-4 flex flex-col gap-1 md:gap-2'>
                  <p className='text-[#F7F7F7] text-[12px] md:text-base font-normal leading-[18px] md:leading-6'>
                    March 26, 2025
                  </p>
                  <h3 className='text-[#F7F7F7] text-xl md:text-2xl font-medium leading-[30px] lg:leading-9'>
                    {item.title}
                  </h3>
                  <p className='text-[#A6A6A6] text-sm md:text-base font-light leading-5 md:leading-6'>
                    {item.shortDes}
                  </p>
                  <a
                    target='_blank'
                    href={item.externalLink}
                    className='text-[#F7F7F7] text-sm md:text-base font-light leading-5 md:leading-6 underline'>
                    Read more..
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex justify-center'>
            <a
              href='https://blog.assurify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'>
              <Button className='mt-[48px]' variant='primary-green'>
                <p className='flex items-center gap-2'>
                  Read More Blogs
                  <CustomIcon iconName='external-link-icon' />
                </p>
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  )
}

export default InsightsAndInspiration
