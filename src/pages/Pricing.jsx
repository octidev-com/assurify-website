
import Container from "../component/Common/Container";
import PricingSection from "../component/Home/PricingSection";
import TopBg from "../component/Common/TopBg";
import FAQ from "../component/Home/FAQ";


const Pricing = () => {
  const faqs = [
    {
      id: 1,
      question: 'Is there a free trial available for all plans?',
      answer:
        'Yes! Every package, including the Lifetime Deal, comes with a 15-day free trial to try the Assurify Shipping Protection App with full confidence.'
    },
    {
      id: 2,
      question: "What's included in the Free Plan?",
      answer: (
        <div>
          The Free Plan is entirely free and consists of:
          <ul className='list-disc pl-5'>
            <li>50 safe and secure orders/month</li>
            <li>Claim Management</li>
            <li>Basic Analytics</li>
            <li>Chat Support</li>
            <li>It's ideal for small businesses or those just beginning</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      question: "What's the difference between Starter and Starter Plus?",
      answer: (
        <div>
          <span className='font-semibold'>Starter: </span>
          600 safe orders/month, Return Management, Basic Analytics
          <br />
          <span className='font-semibold'>Beginner Plus: </span>
          Beginner Plus includes 2500 secure orders/month, Checkout Extension,
          Advanced Analytics, and all Starter functions. Beginner Plus is much
          better suited for growing shops needing deeper insights and more
          automation.
        </div>
      )
    },
    {
      id: 4,
      question: 'For a 15-day trial, do I need to enter payment details?',
      answer:
        "No, you can start the trial without entering your card information. Attempt all functions first-- dedicate just when you're prepared."
    },
    {
      id: 5,
      question: 'What is the Checkout Extension, and which plans include it?',
      answer: (
        <div>
          The Checkout Extension lets customers add shipping defense during
          checkout. It's included in:
          <ul className='list-disc pl-5'>
            <li>Starter</li>
            <li>Starter Plus</li>
            <li>Business</li>
            <li>Ultimate</li>
            <li>Lifetime Deal</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      question: 'What type of assistance is included in each plan?',
      answer:
        'All strategies come with Chat Support and On-Call Assistance. However, the Ultimate and Lifetime Deal plans also offer Priority Support for faster resolutions.'
    },
    {
      id: 7,
      question: 'What does "safe and secure orders/month" suggest?',
      answer:
        "This describes the variety of orders safeguarded under the Assurify Shipping Protection system. Each strategy has a limit, unless you're on Enterprise or Ultimate, which use unlimited safeguarded orders."
    },
    {
      id: 8,
      question:
        'Is there an advantage to choosing the Annual Plan vs. the Monthly Plan?',
      answer:
        'Yes. The annual plans are priced at a significant discount compared to month-to-month billing. You also get undisturbed service and comfort.'
    },
    {
      id: 9,
      question: "What's included in the Lifetime Deal?",
      answer: (
        <div>
          The Lifetime Deal is a one-time payment of $1140 and consists of:
          <ul className='list-disc pl-5'>
            <li>Lifetime Access</li>
            <li>Unlimited protected orders</li>
            <li>Checkout Extension</li>
            <li>Claim & Return Management</li>
            <li>Advanced Analytics</li>
            <li>Chat & Priority Support</li>
            <li>Seasonal Updates</li>
          </ul>
          It's perfect for businesses searching for long-lasting cost savings.
        </div>
      )
    },
    {
      id: 10,
      question: 'Can I update my strategy as my service grows?',
      answer:
        "Definitely! You can upgrade anytime to match your shop's requirements, whether moving from Starter to Starter Plus or opting for the Lifetime Deal."
    }
  ]
  return (
    <>

    <TopBg>
      <div className="pt-[32px] md:pt-[56px]">
        <PricingSection />
        <FAQ faqs={faqs} />
      </div>
    </TopBg>

    </>
  )
}

export default Pricing
