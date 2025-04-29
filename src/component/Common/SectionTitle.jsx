import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'

const SectionTitle = ({ topText, middleText, bottomText }) => {
  return (
    <div className='w-[732px] max-w-full mx-auto flex flex-col gap-2 mt-[56px]'>
      {topText && (
        <div className='flex justify-center items-center gap-3'>
          <img
            src={rightSideHr}
            alt='Right horizontal line'
            className='max-w-[100px]'
          />
          <p className='text-xl font-normal leading-[30px]'>{topText}</p>
          <img
            src={leftSideHr}
            alt='Left horizontal line'
            className='max-w-[100px]'
          />
        </div>
      )}
      {middleText && (
        <h1 className='text-5xl font-semibold text-gradient text-center leading-[72px]'>
          {middleText}
        </h1>
      )}
      {bottomText && (
        <p className='text-[#A6A6A6] text-lg font-light text-center leading-[27px]'>
          {bottomText}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
