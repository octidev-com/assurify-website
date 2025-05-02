import leftSideHrDesktop from "../../assets/SectionTitle/left-side-hr-desktop.png";
import leftSideHrMobile from "../../assets/SectionTitle/left-side-hr-mobile.png";
import rightSideHrDesktop from "../../assets/SectionTitle/right-side-hr-desktop.png";
import rightSideHrMobile from "../../assets/SectionTitle/right-side-hr-mobile.png";

const SectionTitle = ({ topText, middleText, bottomText }) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-2 sm:mt-[32px] lg:mt-[56px]">
      {topText && (
        <div className="flex justify-center items-center gap-3">
          {/* LEFT HR FOR DESKTOP, HIDDEN ON MOBILE */}
          <img src={leftSideHrDesktop} className="hidden lg:block" alt="Right horizontal line" />
          {/* LEFT HR FOR MOBILE, HIDDEN ON DESKTOP */}
          <img src={leftSideHrMobile} className="block lg:hidden" alt="Right horizontal line" />

          {/* TITLE TOP TEXT */}
          <p className="text-[14px] text-center lg:text-xl font-normal leading-[21px] lg:leading-[30px]">{topText}</p>

          {/* RIGHT HR FOR DESKTOP, HIDDEN ON MOBILE */}
          <img src={rightSideHrDesktop} className="hidden lg:block" alt="Left horizontal line" />
          {/* RIGHT HR FOR DESKTOP, HIDDEN ON MOBILE */}
          <img src={rightSideHrMobile} className="block lg:hidden" alt="Left horizontal line" />
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
