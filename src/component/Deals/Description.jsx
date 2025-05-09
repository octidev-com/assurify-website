import React from 'react'

const Description = () => {
  const questions = [
    {
      title: 'What\'s Included in the Lifetime Deal',
      content: (
        <>
          <ul className='list-disc list-inside text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            <li>Unlimited Secure Orders/Month</li>
            <li>Lifetime Access</li>
            <li>Checkout Extension Integration</li>
            <li>Claim Management System</li>
            <li>Return Management Features</li>
            <li>Advanced Analytics Dashboard</li>
            <li>24/7 Chat & Priority Support</li>
            <li>All Future Updates Included</li>
          </ul>
          <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            All the power of our Ultimate Plan—a $1,069/year value—for just $1,140 for life.
          </p>
        </>
      )
    },
    {
      title: 'Why Choose the Lifetime Deal?',
      content: (
        <ul className='list-disc list-inside text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          <li>No Monthly or Yearly Fees</li>
          <li>Instant ROI <span className='font-thin'>— recover your cost with just a few protected orders</span></li>
          <li>Fully Integrated with Shopify Checkout</li>
          <li>Easy Setup — No Developer Needed</li>
          <li>One Payment = Lifetime Access</li>
          <li>Risk-Free with a 15-Day Money-Back Guarantee</li>
        </ul>
      )
    },
    {
      title: 'Price Comparison — Lifetime Deal vs. Ultimate Plan',
      content: (
        <>
          <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            Why keep paying yearly when lifetime protection costs half of the years of the Ultimate Plan?
          </p>
          <div className='relative'>
            {/* Scroll indicator for mobile */}
            <div className='absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none z-10 md:hidden'></div>
            
            {/* Table container with improved scroll styling */}
            <div className='overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-[#2A2A2A] hover:scrollbar-thumb-[#777] transition-colors'>
              <table className='w-full min-w-[600px] text-[12px] lg:text-[14px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[20px] tracking-[-0.16px] border-collapse'>
                <thead>
                  <tr className='bg-[#2A2A2A] border-b-2 border-[#A6A6A6]'>
                    <th className='text-left py-3 px-4 font-bold text-[#f7f7f7] text-[13px] lg:text-[15px] sticky left-0 bg-[#2A2A2A]'>Feature</th>
                    <th className='text-left py-3 px-4 font-bold text-[#f7f7f7] text-[13px] lg:text-[15px]'>Ultimate Plan ($99/month)</th>
                    <th className='text-left py-3 px-4 font-bold text-[#f7f7f7] text-[13px] lg:text-[15px]'>Lifetime Deal - LTD ($1,140 once)</th>
                    <th className='text-left py-3 px-4 font-bold text-[#f7f7f7] text-[13px] lg:text-[15px]'>🏆 Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-[#A6A6A6] bg-[#1A1A1A]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#1A1A1A] font-semibold text-[#D1D1D1]'>Payment Frequency</td>
                    <td className='py-3 px-4'>🔄 12 payments/year (Forever)</td>
                    <td className='py-3 px-4'>💳 1 payment EVER</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#222222]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#222222] font-semibold text-[#D1D1D1]'>Total 1-Year Cost</td>
                    <td className='py-3 px-4'>$1,188</td>
                    <td className='py-3 px-4'>$1,140</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#1A1A1A]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#1A1A1A] font-semibold text-[#D1D1D1]'>Total 3-Year Cost</td>
                    <td className='py-3 px-4'>$3,564</td>
                    <td className='py-3 px-4'>$1,140</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#222222]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#222222] font-semibold text-[#D1D1D1]'>Total 5-Year Cost</td>
                    <td className='py-3 px-4'>$5,940</td>
                    <td className='py-3 px-4'>$1,140</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#1A1A1A]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#1A1A1A] font-semibold text-[#D1D1D1]'>Monthly Cost After Year 1</td>
                    <td className='py-3 px-4'>❌ $99 forever</td>
                    <td className='py-3 px-4'>✅ $0 after Year 1</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#222222]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#222222] font-semibold text-[#D1D1D1]'>Lifetime Access</td>
                    <td className='py-3 px-4'>❌ Pay to maintain access</td>
                    <td className='py-3 px-4'>✅ Free updates forever</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#1A1A1A]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#1A1A1A] font-semibold text-[#D1D1D1]'>Financial Risk</td>
                    <td className='py-3 px-4'>❌ Cancel = lose everything</td>
                    <td className='py-3 px-4'>✅ 15-day money-back guarantee</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#222222]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#222222] font-semibold text-[#D1D1D1]'>Best for Scaling</td>
                    <td className='py-3 px-4'>❌ No long-term savings</td>
                    <td className='py-3 px-4'>✅ Designed for growing stores</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#1A1A1A]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#1A1A1A] font-semibold text-[#D1D1D1]'>Order Protection</td>
                    <td className='py-3 px-4'>✅ Unlimited</td>
                    <td className='py-3 px-4'>✅ Unlimited</td>
                    <td className='py-3 px-4'>=</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#222222]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#222222] font-semibold text-[#D1D1D1]'>Checkout Branding</td>
                    <td className='py-3 px-4'>✅ Included</td>
                    <td className='py-3 px-4'>✅ Included</td>
                    <td className='py-3 px-4'>=</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#1A1A1A]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#1A1A1A] font-semibold text-[#D1D1D1]'>Priority Support & Chat</td>
                    <td className='py-3 px-4'>✅ Only Priority Support Included</td>
                    <td className='py-3 px-4'>✅ Both Included</td>
                    <td className='py-3 px-4'>=</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#222222]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#222222] font-semibold text-[#D1D1D1]'>Advanced Analytics</td>
                    <td className='py-3 px-4'>❌ Not included</td>
                    <td className='py-3 px-4'>✅ Included</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                  <tr className='border-b border-[#A6A6A6] bg-[#1A1A1A]'>
                    <td className='py-3 px-4 sticky left-0 bg-[#1A1A1A] font-semibold text-[#D1D1D1]'>Plan Flexibility</td>
                    <td className='py-3 px-4'>❌ Lose access if canceled</td>
                    <td className='py-3 px-4'>✅ Keep forever</td>
                    <td className='py-3 px-4'>🏆 LTD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'Limited-Time Offer',
      content: (
        <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          This deal won't last forever. Once sold out, the lifetime option will be gone for good. Lock in your access now and enjoy shipping protection without ongoing fees.
        </p>
      )
    }
  ];

  return (
    <div className='flex flex-col gap-[16px] lg:gap-[24px]'>
      {/* top section */}
      <div className='flex flex-col gap-3'>
        <h2 className='text-[20px] lg:text-[40px] font-semibold text-[#f7f7f7] leading-[30px] lg:leading-[60px] tracking-[-0.4px]'>
          Transform Your Digital Security for Just $1,140
        </h2>
        <p className='text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          With the Assurify Lifetime Deal, originally priced at $1,140 but now
          available for only $69.99, you gain access to a robust suite of tools
          that keep your digital life secure and hassle-free.
        </p>
        <p className='text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          In this guide, we'll explore everything about this deal, from features
          to benefits, and answer frequently asked questions to help you make an
          informed decision.
        </p>
      </div>

      {/* bottom section */}
      <div className='flex flex-col gap-[12px] lg:gap-4'>
        {/* Render Questions Dynamically */}
        {questions.map((question, index) => (
          <div key={index} className='flex flex-col gap-3'>
            <h2 className='text-[16px] lg:text-2xl font-medium text-[#f7f7f7] leading-[24px] lg:leading-9 tracking-[-0.24px]'>
              {question.title}
            </h2>
            {question.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Description