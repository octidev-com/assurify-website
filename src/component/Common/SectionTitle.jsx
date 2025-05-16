import leftSideHrDesktop from "../../assets/SectionTitle/left-side-hr-desktop.png";
import leftSideHrMobile from "../../assets/SectionTitle/left-side-hr-mobile.png";
import rightSideHrDesktop from "../../assets/SectionTitle/right-side-hr-desktop.png";
import rightSideHrMobile from "../../assets/SectionTitle/right-side-hr-mobile.png";

/**
 * A reusable and responsive section header component with multiple props
 *
 * @param {String} topText - top text for section title component
 * @param {String} middleText - middle text for section title component
 * @param {String} bottomText - bottom text for section title component
 * @param {Boolean} isTextCentered - conditional text alignment props
 * @param {Boolean} useH1 - optional prop to render middle text as h1 instead of h2
 *
 * @returns {JSX.Element} a section title component
 */
const SectionTitle = ({
  topText,
  middleText,
  bottomText,
  isTextCentered = true,
  useH1 = false, // Default to false to maintain h2 behavior
}) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-[12px]">
      {topText && (
        <div className={`w-full flex ${isTextCentered ? "justify-center" : "justify-start"} items-center gap-3`}>
          {/* LEFT HR FOR DESKTOP, HIDDEN ON MOBILE */}
          <img src={leftSideHrDesktop} className="hidden lg:block" alt="Left horizontal line" />
          {/* LEFT HR FOR MOBILE, HIDDEN ON DESKTOP */}
          <img src={leftSideHrMobile} className="block lg:hidden" alt="Left horizontal line" />

          {/* TITLE TOP TEXT */}
          <p className="text-h5-mobile lg:text-h5-desktop text-center font-light leading-paragraph">{topText}</p>

          {/* RIGHT HR FOR DESKTOP, HIDDEN ON MOBILE */}
          <img src={rightSideHrDesktop} className="hidden lg:block" alt="Right horizontal line" />
          {/* RIGHT HR FOR MOBILE, HIDDEN ON DESKTOP */}
          <img src={rightSideHrMobile} className="block lg:hidden" alt="Right horizontal line" />
        </div>
      )}
      {middleText && (
        <div
          className={`max-w-[778px] mx-auto text-h1-mobile lg:text-h1-desktop font-semibold leading-paragraph text-gradient text-center md:${
            isTextCentered ? "text-center" : "text-left"
          }`}
        >
          {useH1 ? <h1>{middleText}</h1> : <h2>{middleText}</h2>}
        </div>
      )}
      {bottomText && (
        <p
          className={`max-w-[732px] text-large-paragraph-mobile lg:text-large-paragraph-desktop font-light leading-paragraph mx-auto text-gray
           ${isTextCentered ? "text-center" : "text-left"}
          }`}
        >
          {bottomText}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
