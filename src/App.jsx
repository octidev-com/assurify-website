import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import roundBg from './assets/banner/round-bg.png'
import Banner from './component/Banner'
import bannerBg from './assets/banner/banner-bg.png'
import HowItWorks from './component/howItWorks'
import ProtectionCoverage from './component/protectionCoverage'

function App() {
  useEffect(() => {
    console.log('Navbar rendered, checking stickiness')
  }, [])

  return (
    <div className='w-full mx-auto bg-[#0C0D0C] min-h-screen'>
      <div className='w-full relative text-white flex flex-col items-center min-h-screen overflow-x-hidden'>
        {/* Right side bg image */}
        <div className='absolute -top-[800px] -left-[500px] pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>

        {/* Navbar component */}
        <div className='fixed top-0 left-0 w-full z-[100]'>
          <Navbar />
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

        <ProtectionCoverage />

        {/* Left side bg image */}
        <div className='absolute -top-[800px] -right-[500px] pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>
      </div>
    </div>
  )
}

export default App
