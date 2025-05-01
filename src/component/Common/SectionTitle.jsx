import rightSideHr from "../../assets/howItWorks/right-side-hr.png";
import leftSideHr from "../../assets/howItWorks/left-side-hr.png";

const SectionTitle = ({ topText, middleText, bottomText }) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-2 sm:mt-[32px] lg:mt-[56px]">
      {topText && (
        <div className="flex justify-center items-center gap-3">
          <img src={rightSideHr} alt="Right horizontal line" className="max-w-[100px]" />
          <p className="text-[14px] text-center lg:text-xl font-normal leading-[21px] lg:leading-[30px]">{topText}</p>
          <img src={leftSideHr} alt="Left horizontal line" className="max-w-[100px]" />
        </div>
      )}
      {middleText && (
        <h1 className="max-w-[778px] mx-auto text-[24px] lg:text-5xl font-semibold text-gradient text-center leading-[36px] lg:leading-[72px]">
          {middleText}
        </h1>
      )}
      {bottomText && (
        <p className="max-w-[732px] mx-auto text-[#A6A6A6] text-[12px] lg:text-lg font-light text-center leading-[18px] lg:leading-[27px]">
          {bottomText}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
