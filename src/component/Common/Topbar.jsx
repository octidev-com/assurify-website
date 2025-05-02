import Container from './Container'
import CustomIcon from '../../assets/icon/CustomIcon'

const Topbar = ({ isAnnouncementVisible, setIsAnnouncementVisible }) => {
  return (
    <div className='bg-[rgba(4,3,3,0.12)] backdrop-blur-[37px]'>
      <Container>
        <div
          className={`justify-between items-center py-[4px] ${
            isAnnouncementVisible ? 'flex' : 'hidden'
          }`}>
          <p className='text-[#f7f7f7] text-sm  font-normal leading-[21px] '>
            Enjoy 20% OFF your next purchase with code SAVE20 - limited time
            only! <span className='underline'>Click Here</span>
          </p>

          <button
            className='cursor-pointer'
            onClick={() => setIsAnnouncementVisible(false)}>
            <CustomIcon iconName='announcement-close-btn' />
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Topbar
