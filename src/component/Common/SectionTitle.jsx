import leftSideHrDesktop from '../../assets/SectionTitle/left-side-hr-desktop.png'
import leftSideHrMobile from '../../assets/SectionTitle/left-side-hr-mobile.png'
import rightSideHrDesktop from '../../assets/SectionTitle/right-side-hr-desktop.png'
import rightSideHrMobile from '../../assets/SectionTitle/right-side-hr-mobile.png'

/**
 * A reusable and responsive section header component with multiple props
 *
 * @param {String} topText - top text for section title component
 * @param {String} middleText - middle text for section title component
 * @param {String} bottomText - bottom text for section title component
 * @param {Boolean} isTextCentered - conditional text alignment props
 *
 * @returns {JSX.Element} a section title component
 */
const SectionTitle = ({
  topText,
  middleText,
  bottomText,
  isTextCentered = true
}) => {
  return (
    <div className='mx-auto flex flex-col items-center gap-2'>
      {topText && (
        <div className='flex justify-center items-center gap-3'>
          {/* LEFT HR FOR DESKTOP, HIDDEN ON MOBILE */}
          <img
            src={leftSideHrDesktop}
            className='hidden lg:block'
            alt='Left horizontal line'
          />
          {/* LEFT HR FOR MOBILE, HIDDEN ON DESKTOP */}
          <img
            src={leftSideHrMobile}
            className='block lg:hidden'
            alt='Left horizontal line'
          />

          {/* TITLE TOP TEXT */}
          <p className='text-[14px] text-center lg:text-xl font-normal leading-[21px] lg:leading-[30px]'>
            {topText}
          </p>

          {/* RIGHT HR FOR DESKTOP, HIDDEN ON MOBILE */}
          <img
            src={rightSideHrDesktop}
            className='hidden lg:block'
            alt='Right horizontal line'
          />
          {/* RIGHT HR FOR MOBILE, HIDDEN ON DESKTOP */}
          <img
            src={rightSideHrMobile}
            className='block lg:hidden'
            alt='Right horizontal line'
          />
        </div>
      )}
      {middleText && (
        <h1
          className={`max-w-[778px] mx-auto text-[24px] lg:text-5xl font-semibold text-gradient leading-[36px] lg:leading-[72px] text-center md:${
            isTextCentered ? 'text-center' : 'text-left'
          }`}>
          {middleText}
        </h1>
      )}
      {bottomText && (
        <p
          className={`max-w-[732px] mx-auto text-[#A6A6A6] text-[12px] lg:text-lg font-light leading-[18px] lg:leading-[27px] text-center md:${
            isTextCentered ? 'text-center' : 'text-left'
          }`}>
          {bottomText}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
