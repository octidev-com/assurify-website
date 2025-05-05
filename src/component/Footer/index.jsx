import React from "react";
import OrgIcon from "../../assets/icon/assurify-icon.png";
import CustomIcon from "../../assets/icon/CustomIcon";
import roundBg from "../../assets/banner/round-bg.png";
import { Link } from "react-router";
import Container from "../Common/Container";
import Button from "../Common/Button";

const Footer = () => {
  return (
    <div className="mt-[50px] lg:mt-[150px] w-full">
      <Container>
        {/* Call to Action Section */}
        <div className="mx-auto flex flex-col md:flex-row md:items-center md:justify-between p-[12px] lg:p-12 container border border-[rgba(72,189,66,0.10)] bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px] rounded-[26px] relative z-10 shadow-lg -mb-12 lg:-mb-16">
          <div className="flex flex-col gap-[16px] max-w-[664px] text-center md:text-left">
            <h1 className="text-[18px] lg:text-[40px] font-normal text-[#fff] leading-[27px] lg:leading-[50px] tracking-[-0.18px]">
              Protect Your Customers, Boost Your Margins — Shipping Coverage That Works for Everyone.
            </h1>
            <p className="text-[12px] lg:text-[16px] font-light lg:font-normal text-[#A6A6A6] leading-[18px] lg:leading-[24px]">
              Seamlessly cover lost, stolen, or damaged shipments while building trust with customers and unlocking new revenue with every
              sale.
            </p>
          </div>
          <div className="mx-auto md:mx-0">
            <Button className="mt-4 sm:mt-6 md:mt-0">Try it for free</Button>
          </div>
        </div>
      </Container>

      {/* Footer Section */}
      <div className="w-full relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden">
        <Container>
          {/* Background Elements */}
          <div className="absolute top-1/2 left-[-30%] transform -translate-y-1/2 pointer-events-none z-0">
            <img src={roundBg} alt="Background decoration left" className="w-[150vw] sm:w-[75vw] max-w-none" />
          </div>
          <div className="absolute top-1/2 right-[-30%] transform -translate-y-1/2 pointer-events-none z-0">
            <img src={roundBg} alt="Background decoration right" className="w-[150vw] sm:w-[75vw] max-w-none" />
          </div>

          {/* Main Content with Container */}
          <div className="container relative pt-[80px] sm:pt-[120px] lg:pt-[150px] pb-[40px] sm:pb-[60px] lg:pb-[70px] mx-auto z-10">
            <div className="flex flex-col md:flex-row md:justify-between gap-[24px] ">
              {/* Left Side: Org Name and Description */}
              <div className="max-w-[500px]">
                <img src={OrgIcon} alt="Assurify logo" className="w-[180px] md:w-auto" />
                <p className="text-[#A6A6A6] text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[24px] mt-[12px] md:mt-6">
                  Our shipping protection app helps e-commerce brands safeguard orders from loss, theft, or damage. Enhance customer trust,
                  reduce support costs, and recover revenue effortlessly—while offering seamless, branded protection at checkout that boosts
                  margins and builds long-term loyalty.
                </p>
              </div>

              {/* Right Side: Contacts and Navigation Links */}
              <div className="flex flex-row justify-between gap-4 md:gap-[115px] ">
                {/* Navigation Links */}
                <div className="flex flex-col">
                  <p className="text-[#f7f7f7] text-base sm:text-lg font-semibold leading-6 sm:leading-normal tracking-[-0.16px] md:tracking-[-0.18px]">
                    Company
                  </p>
                  <div className="flex flex-col gap-[12px] md:gap-[16px]  mt-4 md:mt-8">
                    {[
                      {
                        label: "Home",
                        link: "/",
                      },
                      {
                        label: "For Merchant",
                        link: "/forMerchant",
                      },
                      {
                        label: "Deals",
                        link: "/deals",
                      },
                      {
                        label: "Contact Us",
                        link: "/contact-us",
                      },
                      {
                        label: "Privacy Policy",
                        link: "/privacy-policy",
                      },
                    ].map((link) => (
                      <Link
                        to={link.link}
                        key={link.link}
                        className="text-[#fff] text-[12px] sm:text-base font-light leading-5 sm:leading-6"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Links and Newsletter */}
                <div className="flex flex-col">
                  <label htmlFor="user-email" className="text-[#fff] text-base md:text-xl font-semibold leading-6 md:leading-[30px]">
                    Newsletter
                  </label>
                  <div className="flex mt-[12px]">
                    <input
                      type="email"
                      id="user-email"
                      placeholder="Enter email"
                      className="w-[90px] md:w-[140px] lg:w-full py-[7px] md:py-3 px-[10px] md:px-4 rounded-l-xl text-[#fff] text-[10px] sm:text-sm lg:text-base font-normal leading-[15px] sm:leading-6 border border-[#A6A6A6]/30 focus:outline-none focus:border-[#A6A6A6] transition-colors bg-gradient-to-r from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.06)] backdrop-blur-[37px]"
                    />
                    <button className="px-[10px] sm:px-4 py-[7px] sm:py-3 rounded-r-xl bg-[#48BD42] text-[#0C0D0C] text-[10px] sm:text-sm lg:text-base font-normal leading-[15px] sm:leading-6 whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="mt-4 sm:mt-6 lg:mt-8 text-[#fff] text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-[30px]">
                    Follow us on
                  </p>

                  <div className="flex gap-3 lg:gap-4 mt-2 sm:mt-4">
                    {["facebook-icon", "instagram-icon", "youtube-icon", "twitter-icon"].map((icon) => (
                      <a
                        href="#"
                        key={icon}

                        className='w-[28px] sm:w-[40px] lg:w-[50px] h-[28px] sm:h-[40px] lg:h-[50px] rounded-full border border-[#A6A6A6] flex justify-center items-center'>
                        <CustomIcon
                          iconName={icon}
                          className={
                            'h-[16px] md:h-[20px] w-[16px] md:w-[20px]'
                          }
                        />

                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="w-full h-[2px] bg-[#FFFFFF33] border-0 my-6 md:my-10" />

            <p className="text-center text-[#A6A6A6] font-normal text-[14px]  leading-[21px]">@ 2025 copyright assurify</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
