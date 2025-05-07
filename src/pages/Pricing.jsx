import Container from "../component/Common/Container";
import PricingSection from "../component/Home/PricingSection";
import TopBg from "../component/Common/TopBg";
import FAQ from "../component/Home/FAQ";

const Pricing = () => {
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
  return (
    <TopBg>
      <div className="pt-[32px] md:pt-[56px]">
        <PricingSection />
        <FAQ faqs={faqs} marginTop="150px" isSectionPadding={true} />
      </div>
    </TopBg>
  );
};

export default Pricing
