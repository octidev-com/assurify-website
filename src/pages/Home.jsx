import React from 'react'
import Banner from '../component/Home/Banner'
import bannerBg from '../assets/banner/banner-bg.png'
import HowItWorks from '../component/Home/HowItWorks'
import ProtectionCoverage from '../component/Home/ProtectionCoverage'
import Benefits from '../component/Home/Benfits'
import Brands from '../component/Home/Brands'
import WhyAssurifyBestChoice from '../component/Home/WhyAssurifyBestChoice'
import InsightsAndInspiration from '../component/Home/InsightsAndInspiration'
import FAQ from '../component/Home/FAQ'
import Review from '../component/Home/Review'
import PricingSection from '../component/Home/PricingSection'
import Container from '../component/Common/Container'
import TopBg from '../component/Common/TopBg'

const Home = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is Assurify Shipping Protection?',
      answer:
        'Assurify is a Shopify app that offers merchants a seamless method of providing shipping protection to customers. It helps cover lost, stolen, or damaged plans while increasing profits and building trust.'
    },
    {
      id: 2,
      question: 'How does Assurify benefit my Shopify store?',
      answer:
        'Assurify boosts client complete satisfaction by assuring shipping. It also creates a new revenue stream through protection costs while minimizing the time invested in handling claims.'
    },
    {
      id: 3,
      question: 'How does Assurify handle claims?',
      answer:
        'When a customer sues (for a lost, stolen, or damaged item), Assurify provides a structured dashboard for you to manage and resolve the concern rapidly, either by refund or replacement.'
    },
    {
      id: 4,
      question: 'Is Assurify easy to set up?',
      answer:
        'Yes! Assurify can be set up and triggered in minutes. It integrates straight with your Shopify store without requiring any coding.'
    },
    {
      id: 5,
      question: 'Can I customize the protection pricing and policy?',
      answer:
        'Absolutely. You can set your security charge structure and change policy terms based on what works best for your shop and clients.'
    },
    {
      id: 6,
      question: 'Is there any cost to using Assurify?',
      answer:
        'Types of subscription models based on the Assurify provides flexible subscription plans tailored to different business models. The entire protection fee is transferred directly to the merchants - there are no hidden charges. We maintain complete transparency over your earnings and the claims process'
    },
    {
      id: 7,
      question: "What happens if a customer doesn't purchase protection?",
      answer:
        'If a customer decreases security, normal store policies are used. Assurify only covers orders that include the optional shipping protection at checkout.'
    },
    {
      id: 8,
      question: 'Do I need to handle all claims myself?',
      answer:
        "You have complete control. Assurify's simple claim management system makes it easy to resolve claims effectively-- and keep your consumers delighted."
    },
    {
      id: 9,
      question: 'Can I remove Assurify at any time?',
      answer:
        'Yes, you can uninstall the app whenever you like. Your shop data remains safe and secure, and you retain access to previous claim records.'
    },
    {
      id: 10,
      question: 'Can I track how much revenue Assurify generates?',
      answer:
        'Certainly, Assurify supplies an in-depth control panel that demonstrates the number of customers who opt-in for security, the earnings produced, and the claim status, so you always understand your efficiency.'
    }
  ]

  return (
    <>
    <TopBg>
      {/* Right side bg image */}
      {/* <div className='absolute  -top-[800px] -left-[1000px] sm:-left-[800px] md:-left-[500px] pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div> */}

      {/* Spacer to prevent content overlap */}
      {/* <div className='w-full lg:h-[56px] h-[32px]'></div> */}

      {/* Banner component */}
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className='my-class bg-cover bg-no-repeat bg-center w-full flex justify-center pt-[32px] md:pt-[56px]'>
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
      <div className='mt-[50px] md:mt-[100px] lg:mt-[150px]'>
          <PricingSection hideToggle={true} />
      </div>

      {/* Review section */}
      <Review />

      {/* Why Assurify best choice section */}
      <WhyAssurifyBestChoice />

      {/* Insights & Inspiration section */}
      <InsightsAndInspiration />

      {/* FAQ section */}
      <FAQ faqs={faqs} />

      {/* Left side bg image */}
      {/* <div className='absolute -top-[800px] -right-[1000px] sm:-right-[800px] md:-right-[500px] pointer-events-none z-0'>
        <img src={roundBg} alt='Background decoration' />
      </div> */}
    </TopBg>
    </>
  )
}

export default Home
