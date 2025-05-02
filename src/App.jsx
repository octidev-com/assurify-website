import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import Deals from "./pages/Deals";
import Checkout from "./pages/Checkout";
import ForMerchant from "./pages/ForMerchant";
import PrivacyPolicy from './pages/PrivacyPolicy'
import Confirmation from "./pages/Confirmation";

const App = () => {
  return (
    <div className='w-full mx-auto bg-[#0C0D0C] text-[#fff] min-h-screen'>
      <div className='fixed top-0 left-0 w-full z-[100]'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/forMerchant" element={<ForMerchant />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
