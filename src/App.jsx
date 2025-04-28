import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Pricing from './pages/Pricing'

const App = () => {
  return (
    <div className='w-full mx-auto bg-[#0C0D0C] text-[#fff] min-h-screen'>
      <div className='fixed top-0 left-0 w-full z-[100]'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
