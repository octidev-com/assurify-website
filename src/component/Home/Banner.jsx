import React from "react";
import Container from "../Common/Container";
import Button from "../Common/Button";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="text-center mt-[42px] lg:mt-[56px]">
          <div className="flex flex-col gap-[12px] lg:gap-[16px] p-[10px]">
            <h1 className="max-w-[602px] text-[#F7F7F7] text-[48px] lg:text-[96px] font-semibold leading-[62px] lg:leading-[110px]">
              Guard Your Packages
            </h1>
            <p className="max-w-[279px] lg:max-w-[550px] mx-auto text-sm sm:text-base lg:text-lg font-light text-[#F7F7F7]">
              Assurify isn't just about protecting lost, stolen, or damaged packages; it's about protecting your brand.
            </p>
          </div>
          <div className="flex justify-center gap-2 sm:gap-4 lg:gap-5 mt-[16px] lg:mt-[32px]">
            <Button>How it works</Button>
            <Button variant="secondary-outline">View Demo</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
