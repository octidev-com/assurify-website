import React, { useState } from "react";
import roundBg from "../assets/banner/round-bg.png";
import CustomIcon from "../assets/icon/CustomIcon";
import FAQ from "../component/Home/FAQ";
import { useNavigate } from "react-router";
import SectionTitle from "../component/Common/SectionTitle";
import NavbarSpacer from "../component/Common/NavbarSpacer";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const navigate = useNavigate();

  const pricingData = isMonthly
    ? [
        { id: 1, title: "Basic", price: "$0.00" },
        { id: 2, title: "Starter", price: "$9.00" },
        { id: 3, title: "Starter Plus", price: "$19.00" },
        { id: 4, title: "Enterprise", price: "$49.00" },
        { id: 5, title: "Ultimate", price: "$99.00" },
        { id: 6, title: "Lifetime Deal", price: "$69.99" },
      ]
    : [
        { id: 1, title: "Basic", price: "$0.00" },
        { id: 2, title: "Starter", price: "$97.20" },
        { id: 3, title: "Starter Plus", price: "$205.20" },
        { id: 4, title: "Enterprise", price: "$529.20" },
        { id: 5, title: "Ultimate", price: "$1069.20" },
        { id: 6, title: "Lifetime Deal", price: "$69.99" },
      ];

  return (
    <div className="w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden">
      {/* Right side bg image */}
      <div className="absolute -top-[800px] -left-[500px] pointer-events-none z-0">
        <img src={roundBg} alt="Background decoration left" className="w-[75vw] max-w-none opacity-80" />
      </div>

      {/* Left side bg image */}
      <div className="absolute -top-[800px] -right-[500px] pointer-events-none z-0">
        <img src={roundBg} alt="Background decoration right" className="w-[75vw] max-w-none opacity-80" />
      </div>

      {/* Spacer to prevent content overlap with Navbar */}
      <NavbarSpacer />

      <div className="container mt-14 mx-auto">
        {/* Header Section */}
        <SectionTitle
          topText={"Pricing"}
          middleText={"Simple, Transparent Pricing No Hidden Fees!"}
          bottomText={"Choose a plan that fits your needs and scale with ease. No surprises, just value-packed features."}
        />

        {/* Monthly and Annually toggle switch */}
        <div className="flex justify-center mt-12">
          <div className="relative flex items-center bg-[#1A1B1A] rounded-[16px] w-[200px] h-[40px] overflow-hidden">
            <button
              className={`relative z-10 w-1/2 h-full flex items-center justify-center text-sm font-medium  transition-all duration-300 overflow-hidden ${
                isMonthly
                  ? "bg-[linear-gradient(94deg,#48BD42_2.15%,#FFF_97.92%)] text-black rounded-[14px] shadow-[0_0_10px_rgba(72,189,66,0.8)]"
                  : "bg-[#1A1B1A] text-white"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`relative z-10 w-1/2 h-full flex items-center justify-center text-sm font-medium  transition-all duration-300 overflow-hidden ${
                !isMonthly
                  ? "bg-[linear-gradient(94deg,#48BD42_2.15%,#FFF_97.92%)] text-black rounded-[14px] shadow-[0_0_10px_rgba(72,189,66,0.8)]"
                  : "bg-[#1A1B1A] text-white"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing package cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-8 mx-auto max-w-[1200px]">
          {pricingData.map((item) => (
            <div
              key={item.id}
              className="p-[40px] rounded-2xl bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] flex flex-col gap-8"
            >
              <div>
                <h4 className="text-2xl font-medium leading-8">{item.title}</h4>
                <p className="text-sm font-normal leading-5 mt-1">15-day free trial</p>
              </div>
              <p className="text-[#FFFFFFCC] text-sm font-normal leading-6">
                <span className="text-[#FFFFFF] text-5xl font-normal leading-14">{item.price}</span> /{" "}
                {isMonthly ? "per month" : "per year"}
              </p>
              <button className="btn-secondary" onClick={() => navigate("/contact-us")}>
                Contact Us
              </button>

              <hr className="w-full h-[1px] bg-[#FFFFFF33] border-0" />

              <div className="flex flex-col gap-4">
                <p className="text-[#FFFFFF] text-lg font-medium leading-7">What you will get</p>
                <div className="flex items-center gap-2">
                  <span>
                    <CustomIcon iconName={"tick-icon"} />
                  </span>
                  Employee directory
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <CustomIcon iconName={"tick-icon"} />
                  </span>
                  Task management
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <CustomIcon iconName={"tick-icon"} />
                  </span>
                  Calendar integration
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <CustomIcon iconName={"tick-icon"} />
                  </span>
                  File storage
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <CustomIcon iconName={"tick-icon"} />
                  </span>
                  Communication tools
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <CustomIcon iconName={"tick-icon"} />
                  </span>
                  Reporting and analytics
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
};

export default Pricing;
