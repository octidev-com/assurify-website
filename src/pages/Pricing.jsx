import Container from '../component/Common/Container'
import PricingSection from '../component/Home/PricingSection'
import roundBg from '../assets/banner/round-bg.png'

const Pricing = () => {
  return (
    <div className='w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden'>
      <Container>
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

        {/* Pricing Card Section */}
        <PricingSection />
      </Container>
    </div>
  )
}

export default Pricing
