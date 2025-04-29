import React, { useState } from "react";
import rightSideHr from "../../assets/howItWorks/right-side-hr.png";
import leftSideHr from "../../assets/howItWorks/left-side-hr.png";
import CustomIcon from "../../assets/icon/CustomIcon";
import { useNavigate } from "react-router";

const Pricing = ({ hideToggle }) => {
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
    <div className="container mt-[150px]">
      {/* Header Section */}
      <div className="w-[732px] max-w-full mx-auto flex flex-col gap-4 px-4">
        <div className="flex justify-center items-center gap-3">
          <img src={rightSideHr} alt="" className="max-w-[100px]" />
          <p className="text-xl font-normal leading-[30px]">Pricing</p>
          <img src={leftSideHr} alt="" className="max-w-[100px]" />
        </div>
        <h1 className="text-5xl font-semibold text-gradient text-center leading-[72px]">Simple, Transparent Pricing No Hidden Fees!</h1>
        <p className="text-[#A6A6A6] text-lg font-light text-center leading-[27px]">
          Choose a plan that fits your needs and scale with ease. No surprises, just value-packed features.
        </p>
      </div>

      {/* MONTHLY AND YEARLY PLAN TOGGLE */}
      {!hideToggle && (
        <div className="flex justify-center mt-8">
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
      )}

      {/* pricing package cards */}
      <div className="grid grid-cols-3 gap-[30px] mt-[48px]">
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
              <span className="text-[#FFFFFF] text-5xl font-normal leading-14">{item.price}</span> / per month
            </p>

            <button className="btn-secondary" onClick={() => navigate("/contact-us")}>
              Contact Us
            </button>

            <hr class="w-full h-[1px]  bg-[#FFFFFF33] border-0 "></hr>

            <div className="flex flex-col gap-4">
              <p className="text-[#FFFFFF] text-lg font-medium leading-7">What you will get</p>

              <div className="flex items-center gap-2">
                <span>
                  <CustomIcon iconName={"tick-icon"} />
                </span>
                Employee directory
              </div>
              <div className="flex items-center  gap-2">
                {" "}
                <span>
                  <CustomIcon iconName={"tick-icon"} />
                </span>{" "}
                Task management
              </div>
              <div className="flex items-center  gap-2">
                {" "}
                <span>
                  <CustomIcon iconName={"tick-icon"} />
                </span>{" "}
                Calendar integration
              </div>
              <div className="flex items-center  gap-2">
                {" "}
                <span>
                  <CustomIcon iconName={"tick-icon"} />
                </span>{" "}
                File storage
              </div>
              <div className="flex items-center  gap-2">
                {" "}
                <span>
                  <CustomIcon iconName={"tick-icon"} />
                </span>{" "}
                Communication tools
              </div>
              <div className="flex items-center  gap-2">
                {" "}
                <span>
                  <CustomIcon iconName={"tick-icon"} />
                </span>{" "}
                Reporting and analytics
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
