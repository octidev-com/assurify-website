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
import TopBg from './component/Common/TopBg'
import GTMPageTracker from './utils/GTMPageTracker'

// Custom Redirect Component
const CaseSensitiveRedirect = ({ to }) => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to lowercase URL
    if (to !== to.toLowerCase()) {
      navigate(to.toLowerCase(), { replace: true }) // Use navigate for a smoother redirect
    }
  }, [to, navigate])

  return null
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
    <TopBg>
      <div className='w-full mx-auto bg-[#0C0D0C] text-[#fff] min-h-screen'>
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

        {/* Content */}

        <GTMPageTracker />

        <Routes>
          <Route path='/' element={<Home />} caseSensitive />
          <Route path='/pricing' element={<Pricing />} caseSensitive />
          <Route path='/checkout' element={<Checkout />} caseSensitive />
          <Route path='/for-merchant' element={<ForMerchant />} caseSensitive />
          <Route
            path='/confirmation'
            element={<Confirmation />}
            caseSensitive
          />
          <Route path='/contact-us' element={<ContactUs />} caseSensitive />
          <Route path='/deals' element={<Deals />} caseSensitive />
          <Route
            path='/privacy-policy'
            element={<PrivacyPolicy />}
            caseSensitive
          />
          {/* Catch uppercase URLs */}
          <Route
            path='/:url([a-zA-Z-]*)'
            element={({ match }) => {
              const { url } = match.params
              if (/[A-Z]/.test(url)) {
                return <CaseSensitiveRedirect to={`/${url}`} />
              }
              return <NotFound />
            }}
          />
          {/* Catch all route for undefined paths */}
          <Route path='*' element={<NotFound />} />
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
    </TopBg>
  )
}

export default App
