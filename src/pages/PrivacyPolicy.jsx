import React from 'react'
import roundBg from '../assets/banner/round-bg.png'
import SectionTitle from '../component/Common/SectionTitle'
import FAQ from '../component/Home/FAQ'

const PrivacyPolicy = () => {
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

      {/* Spacer to prevent content overlap with Navbar */}
      <div className='w-full h-[80px]'></div>

      {/* main content */}
      <div className='container mt-14 mx-auto'>
        {/* Header Section */}
        <SectionTitle
          topText={'Assurify Shipping Protection'}
          middleText={'Privacy Policy'}
          bottomText={'Last Modified: January 25, 2025'}
        />
        {/* privacy policies */}
        <div className='flex flex-col gap-3 mt-14'>
          <h2 className='text-[#f7f7f7] text-[32px] font-semibold leading-12 tracking-[-0.32px]'>
            Who we are
          </h2>
          <p className='text-[#A6A6A6] text-base font-light '>
            <span className='text-[#f7f7f7]  font-normal'>Suggested text:</span>{' '}
            Our website address is:
            <a href='https://office-assurify-wp-site.xbk4ld.easypanel.host.'>
              https://office-assurify-wp-site.xbk4ld.easypanel.host.
            </a>
          </p>
        </div>

        <div className='mt-6 flex flex-col gap-4'>
          {/* first point */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-[#f7f7f7] font-medium leading-9 tracking-[-0.24px]'>
              1. Comments
            </h3>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              When visitors leave comments on the site we collect the data shown
              in the comments form, and also the visitor’s IP address and
              browser user agent string to help spam detection.
            </p>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              An anonymized string created from your email address (also called
              a hash) may be provided to the Gravatar service to see if you are
              using it. The Gravatar service privacy policy is available here:
              https://automattic.com/privacy/. After approval of your comment,
              your profile picture is visible to the public in the context of
              your comment.
            </p>
          </div>

          {/* second point */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-[#f7f7f7] font-medium leading-9 tracking-[-0.24px]'>
              2. Media
            </h3>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS) included. Visitors
              to the website can download and extract any location data from
              images on the website.
            </p>
          </div>

          {/* third point */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-[#f7f7f7] font-medium leading-9 tracking-[-0.24px]'>
              3. Cookies
            </h3>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              If you leave a comment on our site you may opt-in to saving your
              name, email address and website in cookies. These are for your
              convenience so that you do not have to fill in your details again
              when you leave another comment. These cookies will last for one
              year.
            </p>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              If you visit our login page, we will set a temporary cookie to
              determine if your browser accepts cookies. This cookie contains no
              personal data and is discarded when you close your browser.
            </p>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              When you log in, we will also set up several cookies to save your
              login information and your screen display choices. Login cookies
              last for two days, and screen options cookies last for a year. If
              you select “Remember Me”, your login will persist for two weeks.
              If you log out of your account, the login cookies will be removed.
            </p>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              If you edit or publish an article, an additional cookie will be
              saved in your browser. This cookie includes no personal data and
              simply indicates the post ID of the article you just edited. It
              expires after 1 day.
            </p>
          </div>

          {/* fourth point */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-[#f7f7f7] font-medium leading-9 tracking-[-0.24px]'>
              4. Embedded content from other websites
            </h3>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              Articles on this site may include embedded content (e.g. videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website.
            </p>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              These websites may collect data about you, use cookies, embed
              additional third-party tracking, and monitor your interaction with
              that embedded content, including tracking your interaction with
              the embedded content if you have an account and are logged in to
              that website.
            </p>
          </div>

          {/* fifth point */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-[#f7f7f7] font-medium leading-9 tracking-[-0.24px]'>
              4. Who we share your data with
            </h3>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              If you request a password reset, your IP address will be included
              in the reset email.
            </p>
          </div>

          {/* sixth point */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-[#f7f7f7] font-medium leading-9 tracking-[-0.24px]'>
              4. What rights you have over your data
            </h3>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              If you have an account on this site, or have left comments, you
              can request to receive an exported file of the personal data we
              hold about you, including any data you have provided to us. You
              can also request that we erase any personal data we hold about
              you. This does not include any data we are obliged to keep for
              administrative, legal, or security purposes.
            </p>
          </div>

          {/* seven point */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-[#f7f7f7] font-medium leading-9 tracking-[-0.24px]'>
              4. Where your data is sent
            </h3>
            <p className='text-[#A6A6A6] text-base font-light leading-6 tracking-[-0.16px]'>
              Visitor comments may be checked through an automated spam
              detection service.
            </p>
          </div>
        </div>

        {/* faq section */}
        <FAQ />
      </div>
    </div>
  )
}

export default PrivacyPolicy
