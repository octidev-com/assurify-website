import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import stepImg1 from "../../assets/howItWorks/steps-img1.png";
import stepImg2 from "../../assets/howItWorks/steps-img2.png";
import stepImg3 from "../../assets/howItWorks/steps-img3.png";
import stepImg4 from "../../assets/howItWorks/steps-img4.png";
import stepImg5 from "../../assets/howItWorks/steps-img5.png";
import stepImg6 from "../../assets/howItWorks/steps-img6.png";
import SectionTitle from "../Common/SectionTitle";
import Button from "../Common/Button";
import Container from "../Common/Container";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const howItWorksSteps = [
    {
      id: 1,
      title: "Protection Selected",
      description: "Customer selects Guide Protection as an added feature directly within their checkout.",
      image: stepImg1,
    },
    {
      id: 2,
      title: "Set Assurance Fees Easily",
      description: "Auto-add assurance fees for lost or damage protection",
      image: stepImg2,
    },
    {
      id: 3,
      title: "Efficient Management Panel",
      description: "Handle lost, damaged, or returned claims in-store",
      image: stepImg3,
    },
    {
      id: 4,
      title: "Automated Claims Processing",
      description: "One-click claims through a simple resolution portal",
      image: stepImg4,
    },
    {
      id: 5,
      title: "Boost Revenue & Trust",
      description: "Offset losses and build trust with shipping guarantee",
      image: stepImg5,
    },
    {
      id: 6,
      title: "Where Custom Meets Care",
      description: "Fully customize pricing and style, backed by 24/7 support",
      image: stepImg6,
    },
  ];

  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  // State to track current step and indicator numbers
  const [currentStep, setCurrentStep] = useState(0);
  const [indicatorNumbers, setIndicatorNumbers] = useState([1, 2, 3]);

  // GSAP ScrollTrigger for content animations (unchanged)
  useEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;

    // Set container height
    gsap.set(container, {
      height: `${window.innerHeight * (howItWorksSteps.length + 1)}px`,
    });

    // Initialize first step's visibility
    gsap.set([image, title, description], {
      opacity: 1,
      y: 0,
    });

    // Pin the content
    ScrollTrigger.create({
      trigger: pin,
      start: "center center",
      end: `+=${window.innerHeight * howItWorksSteps.length}`,
      pin: true,
      pinSpacing: false,
    });

    // ScrollTrigger for content updates
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${window.innerHeight * (howItWorksSteps.length + 15)}`,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress * (howItWorksSteps.length + 15);
        const newStepIndex = Math.min(Math.floor(progress), howItWorksSteps.length);
        const stepProgress = progress - newStepIndex;

        // Update content and indicators
        if (newStepIndex !== currentStep) {
          const step = howItWorksSteps[newStepIndex];
          image.src = step.image;
          image.alt = step.title;
          title.textContent = step.title;
          description.textContent = step.description;
          setCurrentStep(newStepIndex);
          setIndicatorNumbers(newStepIndex < 3 ? [1, 2, 3] : [4, 5, 6]);
        }

        // Animate image, title, and description
        let opacity, y;
        if (newStepIndex === 0 && progress < 0.8) {
          opacity = 4;
          y = 0;
        } else {
          if (stepProgress < 0.8) {
            opacity = 0.6 + stepProgress * 1.8;
            y = 54 - stepProgress * 104;
          } else {
            opacity = 4 - (stepProgress - 0.8) * 5;
            y = (stepProgress - 0.8) * 45;
          }
        }
        gsap.to([image, title, description], {
          opacity,
          y,
          duration: 1,
          ease: "power2.out",
        });
      },
    });

    // Handle resize
    const handleResize = () => {
      gsap.set(container, {
        height: `${window.innerHeight * howItWorksSteps.length}px`,
      });
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentStep]);

  return (
    <Container>
      <div ref={containerRef} className="mt-20 sm:mt-24 md:mt-28 lg:mt-[150px] container min-h-screen overflow-x-hidden">
        {/* Preload Images */}
        <div style={{ display: "none" }}>
          {howItWorksSteps.map((step) => (
            <img key={step.id} src={step.image} alt={`Preload ${step.title}`} width="0" height="0" />
          ))}
        </div>

        <div ref={pinRef} className="relative pb-6 sm:pb-8">
          {/* Header Section */}
          <SectionTitle
            topText={"Protection Coverage"}
            middleText={"How It Works"}
            bottomText={
              "With licensed shipping protection, fast issue resolution, package tracking, product recommendations, and carbon neutral shipping."
            }
          />

          <div className="flex justify-center mt-4 sm:mt-5 md:mt-6">
            <Button>Get Started</Button>
          </div>

          {/* Slider Section */}
          <div className="rounded-xl sm:rounded-2xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-8 px-3 sm:px-4 md:px-5 lg:px-6">
            {/* Left Side Image */}
            <img
              ref={imageRef}
              src={howItWorksSteps[0].image}
              alt={howItWorksSteps[0].title}
              className="order-2 md:order-1 object-contain w-full max-w-[200px] sm:max-w-[240px] md:max-w-[200px] lg:max-w-[300px] mt-3 sm:mt-4 md:mt-0 self-center"
            />

            {/* Description and Navigation Wrapper for small screens */}
            <div className="order-1 flex flex-row md:flex-none justify-center items-center w-full md:w-auto min-w-[240px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[500px]">
              {/* Description Middle Section */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:flex-none pr-1 sm:pr-2 md:pr-3 lg:pr-4 w-[180px] sm:w-[200px] md:w-[260px] lg:w-[400px] self-center">
                <h1
                  ref={titleRef}
                  className="text-[#f7f7f7] text-base sm:text-lg md:text-3xl lg:text-5xl font-normal leading-6 sm:leading-7 md:leading-[48px] lg:leading-[72px] mb-2 sm:mb-3 md:mb-4 lg:mb-5 whitespace-normal"
                >
                  {howItWorksSteps[0].title}
                </h1>
                <p
                  ref={descriptionRef}
                  className="text-[#A6A6A6] text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-4 sm:leading-5 md:leading-6 lg:leading-[30px] whitespace-normal"
                >
                  {howItWorksSteps[0].description}
                </p>
              </div>

              {/* Navigation Indicator */}
              <div className="flex flex-col items-center min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] ml-2 sm:ml-3 md:ml-4 lg:ml-5 self-center">
                {indicatorNumbers.map((number) => (
                  <svg
                    key={number}
                    xmlns="http://www.w3.org/2000/svg"
                    width={window.innerWidth >= 1024 ? "40" : "32"}
                    height={
                      window.innerWidth >= 1024 ? (number - 1 === currentStep ? "109" : "110") : number - 1 === currentStep ? "88" : "90"
                    }
                    viewBox={
                      window.innerWidth >= 1024
                        ? number - 1 === currentStep
                          ? "0 0 40 109"
                          : "0 0 40 110"
                        : number - 1 === currentStep
                        ? "0 0 32 88"
                        : "0 0 32 90"
                    }
                    fill="none"
                    className="mb-[-12px] sm:mb-[-14px] md:mb-[-16px]"
                    aria-label={`Step ${number}`}
                  >
                    <rect
                      x={window.innerWidth >= 1024 ? "20" : "16"}
                      y={
                        number - 1 === currentStep
                          ? window.innerWidth >= 1024
                            ? "39.0833"
                            : "31.0833"
                          : window.innerWidth >= 1024
                          ? "39.5833"
                          : "31.5833"
                      }
                      width={window.innerWidth >= 1024 ? "70" : "56"}
                      height={window.innerWidth >= 1024 ? "1.25" : "1"}
                      rx={window.innerWidth >= 1024 ? "0.625" : "0.5"}
                      transform={`rotate(90 ${window.innerWidth >= 1024 ? "20" : "16"} ${
                        number - 1 === currentStep
                          ? window.innerWidth >= 1024
                            ? "39.0833"
                            : "31.0833"
                          : window.innerWidth >= 1024
                          ? "39.5833"
                          : "31.5833"
                      })`}
                      fill={number - 1 === currentStep ? "url(#paint0_linear_624_353)" : "#A6A6A6"}
                      opacity={number - 1 === currentStep ? "1" : "0.7"}
                    />
                    <circle
                      cx={window.innerWidth >= 1024 ? "20" : "16"}
                      cy={
                        number - 1 === currentStep
                          ? window.innerWidth >= 1024
                            ? "20.2083"
                            : "16.2083"
                          : window.innerWidth >= 1024
                          ? "20.7083"
                          : "16.7083"
                      }
                      r={window.innerWidth >= 1024 ? "19.375" : "15.5"}
                      stroke={number - 1 === currentStep ? "url(#paint1_linear_624_353)" : "white"}
                      strokeWidth={window.innerWidth >= 1024 ? "1.25" : "1"}
                    />
                    <text
                      x={window.innerWidth >= 1024 ? "20" : "16"}
                      y={
                        number - 1 === currentStep
                          ? window.innerWidth >= 1024
                            ? "24.375"
                            : "19.375"
                          : window.innerWidth >= 1024
                          ? "25"
                          : "20"
                      }
                      fontSize={window.innerWidth >= 1024 ? "20" : "16"}
                      fontWeight="600"
                      fill={number - 1 === currentStep ? "white" : "#A6A6A6"}
                      textAnchor="middle"
                      className="select-none"
                    >
                      {number}
                    </text>
                    <defs>
                      {number - 1 === currentStep && (
                        <>
                          <linearGradient
                            id="paint0_linear_624_353"
                            x1Invoices={window.innerWidth >= 1024 ? "20" : "16"}
                            y1={window.innerWidth >= 1024 ? "39.8333" : "31.8333"}
                            x2={window.innerWidth >= 1024 ? "90" : "72"}
                            y2={window.innerWidth >= 1024 ? "39.8333" : "31.8333"}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#48BD42" />
                            <stop offset="1" stopColor="#0C0D0C" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_624_353"
                            x1={window.innerWidth >= 1024 ? "3.52941" : "2.82353"}
                            y1={window.innerWidth >= 1024 ? "10.2083" : "8.2083"}
                            x2={window.innerWidth >= 1024 ? "36.6333" : "29.3067"}
                            y2={window.innerWidth >= 1024 ? "33.2873" : "26.6299"}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#48BD42" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </>
                      )}
                    </defs>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
