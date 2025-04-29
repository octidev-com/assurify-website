import React from "react";
import SectionTitle from "../component/Common/SectionTitle";
import NavbarSpacer from "../component/Common/NavbarSpacer";
import Container from "../component/Common/Container";
import PricingSection from "../component/Home/PricingSection";

const Pricing = () => {
  return (
    <div className="w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden">
      <Container>
        <NavbarSpacer />
        <PricingSection />
      </Container>
    </div>
  );
};

export default Pricing;
