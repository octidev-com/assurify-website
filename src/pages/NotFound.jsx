import Container from '../component/Common/Container'
import notFoundImg from '../assets/NotFound/not-found.png'
import Button from '../component/Common/Button'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-[32px] md:mt-[56px]'>
      <Container>
        <div className='flex flex-col gap-[12px] lg:gap-[32px]'>
          <img
            src={notFoundImg}
            className='w-full lg:max-w-[500px] mx-auto'
            alt='404-not-found'
          />
          <h3 className='text-[#F7F7F7] text-center text-[24px] lg:text-[32px] font-semibold leading-[36px] lg:leading-[48px]'>
            Page Not Found
          </h3>
          <p className='text-[#A6A6A6] text-[14px] lg:text-[16px] font-light leading-[21px] lg:leading-[24px] text-center'>
            Sorry, the page you are looking for doesn't exist or has been
            removed. Keep exploring out site:
          </p>
          <div className='flex justify-center'>
            <Button onClick={() => navigate('/')} variant='primary-green'>
              Back To Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
