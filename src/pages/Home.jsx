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

  return (
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
      <div className='mt-[150px]'>
        <Container>
          <PricingSection hideToggle={true} />
        </Container>
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
  )
}

export default Home
