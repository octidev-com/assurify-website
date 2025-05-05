import React from "react";
import Container from "../Common/Container";
import Button from "../Common/Button";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-[12px] lg:gap-[16px] text-center mt-[32px] lg:mt-[56px]">
            <h1 className="lg:max-w-[602px] max-w-[299px] text-[#F7F7F7] text-[48px] lg:text-[114px] font-semibold leading-[62px] lg:leading-[130px]">
              Guard Your Packages
            </h1> 
            <p className="max-w-[279px] lg:max-w-[570px] mx-auto text-xs sm:text-base lg:text-lg font-light text-[#F7F7F7] leading-[18px] lg:leading-[30px]">
              Assurify isn't just about protecting lost, stolen, or damaged packages; it's about protecting your brand.
            </p>
          <div className="flex justify-center gap-4 sm:gap-5 lg:gap-7 mt-[16px] lg:mt-[32px]">
            <Button>How it works</Button>
            <Button variant="secondary-outline">View Demo</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
