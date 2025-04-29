import React from 'react'
import roundBg from '../assets/banner/round-bg.png'
import Banner from '../component/Home/Banner'
import bannerBg from '../assets/banner/banner-bg.png'
import HowItWorks from '../component/Home/HowItWorks'
import ProtectionCoverage from '../component/Home/ProtectionCoverage'
import Benefits from '../component/Home/Benfits'
import Brands from '../component/Home/Brands'
import Pricing from '../component/Home/Pricing'
import Review from '../component/Home/Review'
import WhyAssurifyBestChoice from '../component/Home/WhyAssurifyBestChoice'
import InsightsAndInspiration from '../component/Home/InsightsAndInspiration'
import FAQ from '../component/Home/FAQ'

const Home = () => {
  return (
    <div className='w-full relative text-white flex flex-col items-center min-h-screen overflow-x-hidden'>
      {/* Right side bg image */}
      <div className='absolute  -top-[800px] -left-[1000px] sm:-left-[800px] md:-left-[500px] pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div>

      {/* Spacer to prevent content overlap */}
      <div className='w-full h-[80px]'></div>

      {/* Banner component */}
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className='my-class bg-cover bg-no-repeat bg-center w-full flex justify-center'>
        <Banner />
      </div>

      {/* How it works section */}
      <HowItWorks />

      {/* Protection coverage section */}
      <ProtectionCoverage />

      {/* Benefits section */}
      <Benefits />

      {/* Brands section */}
      <Brands />

      {/* Pricing section */}
      <Pricing hideToggle={true} />

      {/* Review section */}
      <Review />

      {/* Why Assurify best choice section */}
      <WhyAssurifyBestChoice />

      {/* Insights & Inspiration section */}
      <InsightsAndInspiration />

      {/* FAQ section */}
      <FAQ />

      {/* Left side bg image */}
      <div className='absolute -top-[800px] -right-[1000px] sm:-right-[800px] md:-right-[500px] pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div>
    </div>
  )
}

export default Home
