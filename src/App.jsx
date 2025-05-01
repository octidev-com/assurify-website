import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Pricing from './pages/Pricing'
import ContactUs from './pages/ContactUs'
import Deals from './pages/Deals'
import Checkout from './pages/Checkout'
import ForMerchant from './pages/ForMerchant'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NavbarSpacer from './component/Common/NavbarSpacer'

const App = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true)

  return (
    <div className='w-full mx-auto bg-[#0C0D0C] text-[#fff] min-h-screen'>
      {/* Fixed Navbar */}
      <div className='fixed top-0 left-0 w-full z-[100]'>
        <Navbar
          isAnnouncementVisible={isAnnouncementVisible}
          setIsAnnouncementVisible={setIsAnnouncementVisible}
        />
      </div>

      {/* Spacer with dynamic height */}
      <NavbarSpacer isAnnouncementVisible={isAnnouncementVisible} />

      {/* Content */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/forMerchant' element={<ForMerchant />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
