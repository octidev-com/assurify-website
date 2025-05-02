import React from 'react'
import roundBg from '../assets/banner/round-bg.png'
import SectionTitle from '../component/Common/SectionTitle'
import FAQ from '../component/Home/FAQ'
import Container from '../component/Common/Container'

const PrivacyPolicy = () => {
  const faqs = [
    {
      id: 1,
      question: 'Is there a free trial available',
      answer:
        'Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!'
    },
    {
      id: 2,
      question: 'What is shipping protection, and how does it work?',
      answer:
        'Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!'
    },
    {
      id: 3,
      question: 'How do I add shipping protection to my order?',
      answer:
        'Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!'
    },
    {
      id: 4,
      question: 'How do I file a claim a damaged or missing order?',
      answer:
        'Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!'
    },
    {
      id: 5,
      question: 'Is there a time limit for filing a claim?',
      answer:
        'Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!'
    },
    {
      id: 6,
      question: 'How long does it take to process a claim?',
      answer:
        'Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!'
    },
    {
      id: 7,
      question: 'Who do I contact for help with a claim?',
      answer:
        'Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!'
    }
  ]

  const privacyPolicyPoints = [
    {
      id: 1,
      header: '1. Comments',
      answers: [
        'When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.',
        'An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.'
      ]
    },
    {
      id: 2,
      header: '2. Media',
      answers: [
        'If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.'
      ]
    },
    {
      id: 3,
      header: '3. Cookies',
      answers: [
        'If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.'
      ]
    },
    {
      id: 4,
      header: '4. Embedded content from other websites',
      answers: [
        'Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.',
        'These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.'
      ]
    },
    {
      id: 5,
      header: '5. Who we share your data with',
      answers: [
        'If you request a password reset, your IP address will be included in the reset email.'
      ]
    },
    {
      id: 6,
      header: '6. What rights you have over your data',
      answers: [
        'If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.'
      ]
    },
    {
      id: 7,
      header: '7. Where your data is sent',
      answers: [
        'Visitor comments may be checked through an automated spam detection service.'
      ]
    }
  ]

  return (
    <div className='w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden'>
      {/* Right side bg image */}
      <div className='absolute -top-[800px] -left-[500px] pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration left'
          className='w-[75vw] max-w-none opacity-80'
        />
      </div>

      {/* Left side bg image */}
      <div className='absolute -top-[800px] -right-[500px] pointer-events-none z-0'>
        <img
          src={roundBg}
          alt='Background decoration right'
          className='w-[75vw] max-w-none opacity-80'
        />
      </div>

      {/* main content */}
      <Container>
        <div className='mt-14'>
          {/* Header Section */}
          <SectionTitle
            topText={'Assurify Shipping Protection'}
            middleText={'Privacy Policy'}
            bottomText={'Last Modified: January 25, 2025'}
          />

          {/* privacy policies */}
          <div className='flex flex-col gap-[8px] md:gap-3 mt-8 md:mt-14'>
            <h2 className='text-[#f7f7f7] text-[18px] md:text-[32px] font-semibold leading-[27px] md:leading-12 tracking-[-0.32px]'>
              Who we are
            </h2>
            <p className='text-[#A6A6A6] text-[12px] md:text-base font-light '>
              <span className='text-[#f7f7f7]  font-normal'>
                Suggested text:
              </span>{' '}
              Our website address is:
              <a href='https://office-assurify-wp-site.xbk4ld.easypanel.host.'>
                https://office-assurify-wp-site.xbk4ld.easypanel.host.
              </a>
            </p>
          </div>

          <div className='mt-[12px] md:mt-6 flex flex-col gap-[12px] md:gap-4'>
            {/* privacy policy point and their description */}

            {privacyPolicyPoints.map((point) => (
              <div key={point.id} className='flex flex-col gap-[8px] md:gap-3'>
                <h3 className='text-[16px] md:text-2xl text-[#f7f7f7] font-medium leading-[24px] md:leading-9 tracking-[-0.16px] md:tracking-[-0.24px]'>
                  {point.header}
                </h3>
                {point.answers.map((ans, index) => (
                  <p
                    key={index}
                    className='text-[#A6A6A6] text-[12px] md:text-base font-light leading-[18px] md:leading-6 tracking-[-0.12px] md:tracking-[-0.16px]'>
                    {ans}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* faq section */}
          <FAQ faqs={faqs} />
        </div>
      </Container>
    </div>
  )
}

export default PrivacyPolicy
