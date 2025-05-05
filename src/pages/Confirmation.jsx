import roundBg from '../assets/banner/round-bg.png'
import Container from '../component/Common/Container'
import ConfirmationSection from '../component/Confirmation/ConfirmationSection'

const Confirmation = () => {
  return (
    <>
      <div className='w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-hidden'>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-80'>
          <img
            src={roundBg}
            alt='Background decoration'
            className='w-[150vw] sm:w-[100vw] max-w-none'
          />
        </div>
        <Container>
          <ConfirmationSection />
        </Container>
      </div>
    </>
  )
}

export default Confirmation
