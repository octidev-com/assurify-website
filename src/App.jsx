import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import ContactUs from './pages/ContactUs'
import Deals from './pages/Deals'
import Checkout from './pages/Checkout'
import ForMerchant from './pages/ForMerchant'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Confirmation from './pages/Confirmation'
import NavbarSpacer from './component/Common/NavbarSpacer'
import ScrollRestoration from './component/Common/ScrollRestoration'
import NotFound from './pages/NotFound'
import GTMPageTracker from './utils/GTMPageTracker'
import roundBg from '../src/assets/banner/round-bg.png'

// Custom Redirect Component
const CaseSensitiveRedirect = ({ to }) => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to lowercase URL
    if (to !== to.toLowerCase()) {
      navigate(to.toLowerCase(), { replace: true })
    }
  }, [to, navigate])

  return null
}

// Page Wrapper for Titles
const Page = ({ title, element }) => {
  useEffect(() => {
    document.title = `Assurify | ${title}`
  }, [title])

  return element
}

const App = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Global URL case-sensitivity check
  useEffect(() => {
    const currentPath = location.pathname
    if (currentPath !== currentPath.toLowerCase()) {
      navigate(currentPath.toLowerCase(), { replace: true })
    }
  }, [location, navigate])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 100)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='w-full mx-auto bg-[#0C0D0C] text-[#fff] min-h-screen relative overflow-x-hidden'>
      {/* Background images wrapper */}
      <div className='absolute inset-0 z-0 pointer-events-none '>
        {/* Right side bg image */}
        <div className='absolute -top-[800px] -left-[1000px] sm:-left-[800px] md:-left-[500px]'>
          <img
            src={roundBg}
            alt='Background decoration'
            loading='lazy'
            className='w-[150vw] sm:w-[120vw] md:w-[100vw] lg:w-[75vw] max-w-none'
          />
        </div>
        {/* Left side bg image */}
        <div className='absolute -top-[800px] -right-[1000px] sm:-right-[800px] md:-right-[500px]'>
          <img
            src={roundBg}
            alt='Background decoration'
            className='w-[150vw] sm:w-[120vw] md:w-[100vw] lg:w-[75vw] max-w-none'
          />
        </div>
      </div>

      {/* GTM Tracker */}
      <GTMPageTracker />

      {/* Fixed Navbar */}
      <div className='fixed top-0 left-0 w-full z-[100]'>
        <Navbar
          isAnnouncementVisible={isAnnouncementVisible}
          setIsAnnouncementVisible={setIsAnnouncementVisible}
        />
      </div>

      {/* Scroll Restoration */}
      <ScrollRestoration />

      {/* Spacer with dynamic height */}
      <NavbarSpacer isAnnouncementVisible={isAnnouncementVisible} />

      {/* page routes */}
      <Routes>
        <Route
          path='/'
          element={<Page title='Home' element={<Home />} />}
          caseSensitive
        />
        <Route
          path='/pricing'
          element={<Page title='Pricing' element={<Pricing />} />}
          caseSensitive
        />
        <Route
          path='/checkout'
          element={<Page title='Checkout' element={<Checkout />} />}
          caseSensitive
        />
        <Route
          path='/for-merchant'
          element={<Page title='For Merchants' element={<ForMerchant />} />}
          caseSensitive
        />
        <Route
          path='/confirmation'
          element={<Page title='Confirmation' element={<Confirmation />} />}
          caseSensitive
        />
        <Route
          path='/contact-us'
          element={<Page title='Contact Us' element={<ContactUs />} />}
          caseSensitive
        />
        <Route
          path='/deals'
          element={<Page title='Deals' element={<Deals />} />}
          caseSensitive
        />
        <Route
          path='/privacy-policy'
          element={<Page title='Privacy Policy' element={<PrivacyPolicy />} />}
          caseSensitive
        />
        <Route
          path='/:url([a-zA-Z-]*)'
          element={({ match }) => {
            const { url } = match.params
            if (/[A-Z]/.test(url)) {
              return <CaseSensitiveRedirect to={`/${url}`} />
            }
            return <Page title='Not Found' element={<NotFound />} />
          }}
        />
        <Route
          path='*'
          element={<Page title='Not Found' element={<NotFound />} />}
        />
      </Routes>
      <Footer />

      <button
        type='button'
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 rounded-full bg-green-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg ${
          showScrollButton ? 'block' : 'hidden'
        }`}
        aria-label='Scroll to top'
        id='btn-back-to-top'>
        <span className='inline-block w-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='3'
            stroke='currentColor'
            className='h-4 w-4'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18'
            />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default App
