import React, { useState } from "react";
import CustomIcon from "../../assets/icon/CustomIcon";
import SectionTitle from "../Common/SectionTitle";
import Container from "../Common/Container";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

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

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="mt-[50px] lg:mt-[150px]">
      {/* Header Section */}

      <SectionTitle
        topText={"Customer Support"}
        middleText={"Frequently Asked Question"}
        bottomText={"Find answers to common questions and get the support you need—quick and easy"}
      />

      {/* FAQ Section */}
      <div className="max-w-[732px] mx-auto mt-12">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] rounded-2xl mb-4 overflow-hidden">
            <button className="flex items-center gap-4 p-4 w-full text-left" onClick={() => toggleFAQ(faq.id)}>
              <CustomIcon iconName={openFAQ === faq.id ? "accordion-close-icon" : "accordion-open-icon"} />
              <p className="text-[12px] lg:text-lg font-normal text-[#f7f7f7] leading-[18px] lg:leading-[27px]">{faq.question}</p>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openFAQ === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="p-4 pt-0 text-[#A6A6A6] text-[12px] lg:text-base font-light leading-[18px] lg:leading-6">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
