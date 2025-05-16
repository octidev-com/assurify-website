import React, { useEffect, useRef } from "react";
import roundBg from "../../assets/banner/round-bg.png";
import CustomIcon from "../../assets/icon/CustomIcon";
import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";

const ProtectionCoverage = () => {
  const protectionCoverageOptions = [
    { id: 1, title: "Order Placed", iconName: "order_placed" },
    { id: 2, title: "Claim Raised", iconName: "claim_raised" },
    { id: 3, title: "Claim Approved", iconName: "claim_raised" },
    { id: 4, title: "Merchant Paid", iconName: "merchant_paid" },
    { id: 5, title: "Claim Resolved", iconName: "claim_resolved" },
    { id: 6, title: "Reorder / Refund", iconName: "reorder_refund" },
  ];

  // Ref for the container and elements (right side only)
  const containerRef = useRef(null);
  const elementRefs = useRef([]);

  useEffect(() => {
    // Dynamically load GSAP and ScrollTrigger
    const gsapScript = document.createElement("script");
    gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    gsapScript.async = true;

    const scrollTriggerScript = document.createElement("script");
    scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
    scrollTriggerScript.async = true;

    // Flags to track if scripts were appended
    let gsapAppended = false;
    let scrollTriggerAppended = false;

    // Load GSAP first, then ScrollTrigger
    gsapScript.onload = () => {
      document.body.appendChild(scrollTriggerScript);
      scrollTriggerAppended = true;
    };

    scrollTriggerScript.onload = () => {
      const { gsap, ScrollTrigger } = window;

      if (containerRef.current && gsap && ScrollTrigger) {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Initially hide the container (border) and elements
        gsap.set(containerRef.current, { opacity: 0 });
        gsap.set(elementRefs.current, { opacity: 0 });

        // Create a timeline for the animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Fade in the rounded border
        tl.to(containerRef.current, {
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
        });

        // Fade in each element with stagger
        tl.to(
          elementRefs.current,
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.5,
          },
          "-=0.6"
        );
      }
    };

    // Append GSAP script first
    document.body.appendChild(gsapScript);
    gsapAppended = true;

    // Cleanup scripts on unmount
    return () => {
      if (gsapAppended && document.body.contains(gsapScript)) {
        document.body.removeChild(gsapScript);
      }
      if (scrollTriggerAppended && document.body.contains(scrollTriggerScript)) {
        document.body.removeChild(scrollTriggerScript);
      }
    };
  }, []);

  return (
    <div className="w-full relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0">
        <img src={roundBg} alt="Background decoration left" className="w-[75vw] max-w-none" />
      </div>
      <div className="absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0">
        <img src={roundBg} alt="Background decoration right" className="w-[75vw] max-w-none" />
      </div>

      {/* Main content with container */}
      <Container>
        <div className="relative py-[27px] lg:py-[150px] mx-auto z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 justify-center items-center gap-[30px] pb-[27px] sm:pb-0">
            {/* Left side of the main content  */}

            <SectionTitle
              topText={"Protection Coverage"}
              middleText={"Full Coverage & Efficient Claims Solution"}
              bottomText={
                "Assurify protects orders from placement to refund or replacement, making the process seamless for both customers and merchants."
              }
              isTextCentered={false}
            />

            {/* Right side of the main content  */}
            <div className="w-full lg:w-[744px] lg:h-[370px] flex items-center justify-center mx-auto">
              {/* Container for the border */}
              <div
                ref={containerRef}
                className="relative w-[250px] h-[250px] lg:w-[370px] lg:h-[370px] border-2 border-[#FFFFFF4D] rounded-full z-10 "
              >
                {/* Options positioned around the circle */}
                {protectionCoverageOptions.map((opt, index) => {
                  // Mobile positions (for <640px)
                  const mobilePositions = [
                    {
                      top: "0%",
                      left: "50%",
                      transform: "translate(-50%, -80%)",
                    }, // Top
                    {
                      top: "25%",
                      left: "40%",
                      transform: "translate(60%, -50%)",
                    }, // Top-right
                    {
                      top: "75%",
                      left: "40%",
                      transform: "translate(40%, -50%)",
                    }, // Bottom-right
                    {
                      top: "100%",
                      left: "50%",
                      transform: "translate(-50%, -20%)",
                    }, // Bottom
                    {
                      top: "75%",
                      left: "15%",
                      transform: "translate(-60%, -50%)",
                    }, // Bottom-left
                    {
                      top: "25%",
                      left: "15%",
                      transform: "translate(-60%, -50%)",
                    }, // Top-left
                  ];

                  // Desktop positions (for >=1024px)
                  const desktopPositions = [
                    {
                      top: "0%",
                      left: "20%",
                      transform: "translate(-55%, -40%)",
                    }, // Top-left
                    {
                      top: "0%",
                      left: "20%",
                      transform: "translate(65%, -40%)",
                    }, // Top-right
                    {
                      top: "50%",
                      left: "10%",
                      transform: "translate(-60%, -50%)",
                    }, // Middle-left
                    {
                      top: "50%",
                      left: "10%",
                      transform: "translate(100%, -50%)",
                    }, // Middle-right
                    {
                      top: "100%",
                      left: "20%",
                      transform: "translate(-55%, -60%)",
                    }, // Bottom-left
                    {
                      top: "100%",
                      left: "20%",
                      transform: "translate(55%, -60%)",
                    }, // Bottom-right
                  ];

                  // Select positions based on screen size
                  const isMobile = window.innerWidth < 640;
                  const position = isMobile
                    ? mobilePositions[index]
                    : desktopPositions[index] || {
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      };

                  return (
                    <div
                      key={opt.id}
                      ref={(el) => (elementRefs.current[index] = el)}
                      className="absolute flex items-center gap-2 lg:gap-4 p-[5px] lg:p-3 bg-[#000000] rounded-[5px] lg:rounded-lg z-20"
                      style={{
                        top: position.top,
                        left: position.left,
                        transform: position.transform,
                      }}
                    >
                      <div className="p-1.5 lg:p-2 bg-[#98FF9317] rounded-sm">
                        <CustomIcon iconName={opt.iconName} className="w-[14px] h-[14px] lg:w-6 lg:h-6" />
                      </div>
                      <h3 className="text-[#F7F7F7] text-[11px] lg:text-[20px] leading-[17px] lg:leading-[30px]">{opt.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProtectionCoverage;
