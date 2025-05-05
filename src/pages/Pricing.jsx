import Container from '../component/Common/Container'
import PricingSection from '../component/Home/PricingSection'
import TopBg from '../component/Common/TopBg'

const Pricing = () => {
  return (
    <TopBg>
      <Container>
        <div className='pt-[32px] md:pt-[56px]'>
          {/* Pricing Card Section */}
          <PricingSection />
        </div>
      </Container>
    </TopBg>
  )
}

export default Pricing
