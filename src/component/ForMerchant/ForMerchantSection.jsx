import roundBg from "../../assets/banner/round-bg.png";
import writingIcon from "../../assets/support/writing.svg";
import clockIcon from "../../assets/support/clock.svg";
import supportIcon from "../../assets/support/support.svg";
import supportImage from "../../assets/support/supportImage.svg";
import bannerBg from "../../assets/banner/banner-bg.png";
import rightSideHr from "../../assets/howItWorks/right-side-hr.png";
import leftSideHr from "../../assets/howItWorks/left-side-hr.png";
import benefit1 from "../../assets/benefits/benefit-1.png";
import benefit2 from "../../assets/benefits/benefit-2.png";
import benefit3 from "../../assets/benefits/benefit-3.png";
import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import Button from "../Common/Button";

const ForMerchantSection = () => {
  const benefitsData = [
    {
      id: 1,
      title: "No Direct Cost to Sellers",
      description:
        "Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.",
      image: benefit1,
    },
    {
      id: 2,
      title: "Flexible Integrations",
      description:
        "Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.",
      image: benefit2,
    },
    {
      id: 3,
      title: "Superior Customer Service",
      description:
        "Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.",
      image: benefit3,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full px-[24px] bg-cover bg-no-repeat bg-center z-10 relative pt-[56px] pb-[150px]">
        <Container horizontalPadding="0">
          <SectionTitle
            topText="For Merchant"
            middleText="Enhance your revenue and manage shipping protection from one app"
            bottomText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus.Praesent non ante vitae turpis."
          />
          <div className="flex justify-center gap-7 pt-[30px]">
            <Button
              buttonText="How it works"
              variant="primary-white"
              className="rounded-full px-6 py-3 hover:bg-gray-200 transition"
            />

            <Button
              buttonText="View Demo"
              variant="secondary-outline"
              className="rounded-full px-6 py-3 hover:bg-white hover:text-black transition"
            />
          </div>
        </Container>
        <div className="max-w-[1170px] mx-auto bg-[#EDEDED] w-full h-[812px] rounded-lg shadow-md mt-12 flex justify-center items-center">
          <p className="text-[#888] text-lg">Image Goes Here</p>
        </div>
      </div>
      {/* Brands Section */}
      <div className="w-full py-[24px] px-[24px] lg:py-[94px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden">
        <div className="absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0">
          <img src={roundBg} alt="Background decoration" />
        </div>
        <div className="absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0">
          <img src={roundBg} alt="Background decoration" />
        </div>
        <Container horizontalPadding="0">
          <SectionTitle
            topText="Brands"
            middleText="Exclusively built for Shopify"
            bottomText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus.Praesent non ante vitae turpis."
          />
        </Container>
        <div className="max-w-[1170px] mx-auto bg-[#EDEDED] h-[800px] rounded-lg shadow-md mt-12 flex justify-center items-center">
          <p className="text-[#888] text-lg">Image Goes Here</p>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="relative overflow-hidden">
        <Container>
          <div className="sm:py-[150px] py-[24px] relative z-10">
            <div className="absolute -top-[10%] -left-[100%] pointer-events-none z-0">
              <img src={bannerBg} alt="Background decoration" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] sm:gap-[130px] shrink-0">
              <div className="flex flex-col sm:gap-2 w-full">
                <div className="flex sm:justify-start justify-center items-center text-center gap-3">
                  <img src={rightSideHr} alt="" className="max-w-[100px]" />
                  <p className="text-xl font-normal leading-[30px]">Benefits</p>
                  <img src={leftSideHr} alt="" className="max-w-[100px]" />
                </div>
                <h1 className="sm:text-5xl sm:text-4xl text-3xl font-semibold text-gradient sm:leading-[72px] leading-[60px]">
                  Exclusive customer Experience
                </h1>
                <p className="text-[#A6A6A6] text-lg font-light leading-[27px]">
                  A perfect balance—customers get great value, and merchants
                  boost their sales effortlessly!
                </p>
              </div>

              <div className="flex flex-col gap-[30px]">
                {benefitsData.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-3 items-start"
                  >
                    <div className="p-3 rounded-sm bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px]">
                      <img src={benefit.image} alt="benefit" />
                    </div>
                    <h3 className="sm:text-[32px] sm:text-[25px] text-[16px] font-normal text-[#f7f7f7] sm:leading-[48px]">
                      {benefit.title}
                    </h3>
                    <p className="text-base font-normal leading-[30px] text-[#A6A6A6]">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Protection Coverage Section */}
      <div className="w-full sm:py-[150px] py-[24px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden">
        <div className="absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0">
          <img src={roundBg} alt="Background decoration" />
        </div>
        <div className="absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0">
          <img src={roundBg} alt="Background decoration" />
        </div>
        <Container>
          {/* <div className="max-w-full mx-auto flex flex-col gap-2">
            <div className="flex justify-center items-center gap-3">
              <img src={rightSideHr} alt="" className="max-w-[100px]" />
              <p className="text-sm sm:text-xl font-normal sm:leading-[30px] whitespace-nowrap">
                Protection Coverage
              </p>
              <img src={leftSideHr} alt="" className="max-w-[100px]" />
            </div>
            <div className="max-w-[620px] mx-auto">
              <h1 className="sm:text-5xl text-3xl font-semibold text-gradient text-center sm:leading-[72px] leading-[36px]">
                Sync with your existing checkout module.
              </h1>
            </div>
            <div className="max-w-[722px] mx-auto">
              <p className="text-[#A6A6A6] sm:text-lg text-sm font-light text-center sm:leading-[27px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis ante eu sem tempus, eleifend sollicitudin felis cursus.
                Praesent non ante vitae turpis.
              </p>
            </div>
          </div> */}
          <SectionTitle
            topText="Protection Coverage"
            middleText="Sync with your existing checkout module."
            bottomText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus Praesent non ante vitae turpis."
          />
          <div className="max-w-[874px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[48px]">
            <div className="flex flex-col gap-3 items-start max-w-[422px]">
              <div className="bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] p-4 rounded-xl">
                <img
                  src={benefit1}
                  alt="Easy to setup icon"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Easy to setup
              </h3>
              <p className="text-[#A6A6A6] text-base leading-[27px]">
                Check out our custom research services designed to tackle your
                business challenges! We offer market analysis and consumer
                insights to help you make better decisions and boost your
                growth.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start max-w-[422px]">
              <div className="bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] p-4 rounded-xl">
                <img
                  src={benefit2}
                  alt="No backhand branding icon"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                No Backhand Branding
              </h3>
              <p className="text-[#A6A6A6] text-base leading-[27px]">
                Check out our custom research services designed to tackle your
                business challenges! We offer market analysis and consumer
                insights to help you make better decisions and boost your
                growth.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Support Section */}
      <Container>
        <div className="sm:py-[150px] py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="flex flex-col gap-4 md:max-w-[570px] w-full">
              <div className="flex sm:justify-start justify-center items-center gap-3">
                <img src={rightSideHr} alt="" className="max-w-[100px]" />
                <p className="text-xl font-normal leading-[30px]">Support</p>
                <img src={leftSideHr} alt="" className="max-w-[100px]" />
              </div>
              <h2 className="sm:text-5xl text-3xl font-semibold text-gradient leading-[72px] text-center md:text-left">
                Instant support and service
              </h2>
              <p className="text-[#A6A6A6] text-base leading-relaxed text-center md:text-left">
                A perfect balance—customers get great value, and merchants boost
                their sales effortlessly!
              </p>
              <div className="mt-10 flex flex-col gap-6 w-full">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px] flex items-center justify-center">
                    <img
                      src={writingIcon}
                      alt="Seamless claim icon"
                      className="w-full"
                    />
                  </div>
                  <p className="text-white text-base">
                    Seamless claim submission experience
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px] flex items-center justify-center">
                    <img
                      src={clockIcon}
                      alt="Fast claim processing icon"
                      className="w-full"
                    />
                  </div>
                  <p className="text-white text-base">
                    Fast and transparent claim processing
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px] flex items-center justify-center">
                    <img
                      src={supportIcon}
                      alt="Expert support icon"
                      className="w-full"
                    />
                  </div>
                  <p className="text-white text-base">
                    Dedicated expert support from start to finish
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full">
              <img
                src={supportImage}
                alt="Support team"
                className="rounded-xl w-full max-w-[570px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForMerchantSection;
