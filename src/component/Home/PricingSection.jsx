import React, { useState } from "react";
import CustomIcon from "../../assets/icon/CustomIcon";
import { useNavigate } from "react-router";
import SectionTitle from "../Common/SectionTitle";
import Button from "../Common/Button";
import FAQ from "./FAQ";

const PricingSection = ({ hideToggle }) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const navigate = useNavigate();

  // navigate user to checkout page with selected price data
  const handleCheckout = (price) => {
    navigate("/checkout", {
      state: {
        price,
      },
    });
  };

  const faqs = [
    {
      id: 1,
      question: "Is there a free trial available",
      answer:
        "Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!",
    },
    {
      id: 2,
      question: "What is shipping protection, and how does it work?",
      answer:
        "Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!",
    },
    {
      id: 3,
      question: "How do I add shipping protection to my order?",
      answer:
        "Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!",
    },
    {
      id: 4,
      question: "How do I file a claim a damaged or missing order?",
      answer:
        "Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!",
    },
    {
      id: 5,
      question: "Is there a time limit for filing a claim?",
      answer:
        "Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!",
    },
    {
      id: 6,
      question: "How long does it take to process a claim?",
      answer:
        "Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!",
    },
    {
      id: 7,
      question: "Who do I contact for help with a claim?",
      answer:
        "Yes! We offer a free trial so you can explore all features risk-free. No credit card required experience the benefits  and see how we can help your business grow effortlessly!",
    },
  ];

  const pricingData = isMonthly
    ? [
        { id: 1, title: "Basic", price: 0.0 },
        { id: 2, title: "Starter", price: 9.0 },
        { id: 3, title: "Starter Plus", price: 19.0 },
        { id: 4, title: "Enterprise", price: 49.0 },
        { id: 5, title: "Ultimate", price: 99.0 },
        { id: 6, title: "Lifetime Deal", price: 69.99 },
      ]
    : [
        { id: 1, title: "Basic", price: 0.0 },
        { id: 2, title: "Starter", price: 97.2 },
        { id: 3, title: "Starter Plus", price: 205.2 },
        { id: 4, title: "Enterprise", price: 529.2 },
        { id: 5, title: "Ultimate", price: 1069.2 },
        { id: 6, title: "Lifetime Deal", price: 69.99 },
      ];

  return (
    <>
      {/* Header Section */}
      <SectionTitle
        topText={"Pricing"}
        middleText={"Simple, Transparent Pricing No Hidden Fees!"}
        bottomText={"Choose a plan that fits your needs and scale with ease. No surprises, just value-packed features."}
      />

      {/* MONTHLY AND YEARLY PLAN TOGGLE */}
      {!hideToggle && (
        <div className="flex justify-center mt-[32px] lg:mt-12">
          <div className="relative flex items-center bg-[#1A1B1A] rounded-[16px] w-[200px] h-[40px] overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-1/2 h-full rounded-[14px] z-0 transition-transform duration-300 ease-in-out shadow-[0_0_10px_rgba(72,189,66,0.8)]`}
              style={{
                transform: isMonthly ? "translateX(0%)" : "translateX(100%)",
                background: "linear-gradient(94deg, #48BD42 2.15%, #FFF 97.92%)",
              }}
            ></div>
            <button
              className={`relative z-10 w-1/2 h-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                isMonthly ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`relative z-10 w-1/2 h-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                !isMonthly ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Annually
            </button>
          </div>
        </div>
      )}

      {/* Pricing package cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px] mt-[20px] lg:mt-[30px] mx-auto">
        {pricingData.map((item) => (
          <div
            key={item.id}
            className="p-[24px] lg:p-[40px] rounded-2xl bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] transition-transform duration-200 ease-out hover:-translate-y-1 hover:border hover:border-[#48BD42]"
          >
            <div>
              <h4 className="text-[18px] lg:text-2xl font-medium leading-[27px] lg:leading-8">{item.title}</h4>
              <p className="text-[#ffffffcc] text-[12px] lg:text-sm font-normal leading-[18px] lg:leading-5 mt-1">15-day free trial</p>
            </div>

            <p className="mt-[16px] lg:mt-[32px] text-[#FFFFFFCC] text-sm font-normal leading-6">
              <span className="text-[#FFFFFF] text-[32px] lg:text-5xl font-normal leading-[48px] lg:leading-14">${item.price}</span> /{" "}
              {isMonthly ? "per month" : "per year"}
            </p>
            <Button variant="secondary-outline" onClick={() => handleCheckout(item.price)} className={"mt-[24px] lg:mt-[32px] w-full"}>
              Contact Us
            </Button>

            <hr className="my-[24px] lg:my-[32px] w-full h-[1px] bg-[#FFFFFF33] border-0" />

            <div className="flex flex-col gap-4">
              <p className="text-[#FFFFFF] text-lg font-medium leading-7">What you will get</p>
              <div className="flex items-center gap-2">
                <span>
                  <CustomIcon iconName={"tick-icon"} className={"w-[16px]"} />
                </span>
                <p className="text-[#ffffffcc] text-[13px] lg:text-[14px] leading-[22px]">Employee directory</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CustomIcon iconName={"tick-icon"} className={"w-[16px]"} />
                </span>
                <p className="text-[#ffffffcc] text-[13px] lg:text-[14px] leading-[22px]">Task management</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CustomIcon iconName={"tick-icon"} className={"w-[16px]"} />
                </span>
                <p className="text-[#ffffffcc] text-[13px] lg:text-[14px] leading-[22px]">Calendar integration</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CustomIcon iconName={"tick-icon"} className={"w-[16px]"} />
                </span>
                <p className="text-[#ffffffcc] text-[13px] lg:text-[14px] leading-[22px]">File storage</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CustomIcon iconName={"tick-icon"} className={"w-[16px]"} />
                </span>
                <p className="text-[#ffffffcc] text-[13px] lg:text-[14px] leading-[22px]">Communication tools</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CustomIcon iconName={"tick-icon"} className={"w-[16px]"} />
                </span>
                <p className="text-[#ffffffcc] text-[13px] lg:text-[14px] leading-[22px]">Reporting and analytics</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FAQ faqs={faqs} />
    </>
  );
};

export default PricingSection;
