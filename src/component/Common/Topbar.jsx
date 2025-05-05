import Container from './Container'
import CustomIcon from '../../assets/icon/CustomIcon'

const Topbar = ({ isAnnouncementVisible, setIsAnnouncementVisible }) => {
  return (
    <div className='bg-[linear-gradient(90deg,#51724C_0%,#182216_23.08%,#121A11_41.35%,#0F150E_67.31%,#587B52_100%)]'>
      <Container>
        <div
          className={`justify-between items-center py-[4px] ${
            isAnnouncementVisible ? 'flex' : 'hidden'
          }`}>
          <div className='max-w-[293px] md:max-w-full'>
            <p className='text-[#f7f7f7] text-[12px] md:text-sm font-normal leading-[18px] md:leading-[21px]'>
              Enjoy 20% OFF your next purchase with code SAVE20 - limited time
              only! <span className='underline'>Click Here</span>
            </p>
          </div>
          <button
            className='cursor-pointer'
            onClick={() => setIsAnnouncementVisible(false)}
            aria-label='Close announcement'>
            <CustomIcon iconName='announcement-close-btn' className='w-4 h-4' />
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Topbar
