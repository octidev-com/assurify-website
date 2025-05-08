import React, { useState } from 'react'

const Description = () => {
  const [visibleQuestions, setVisibleQuestions] = useState(5)

  const questions = [
    {
      title: '1. What is Assurify?',
      content: (
        <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          Assurify is a comprehensive app designed to enhance your digital
          security and simplify your daily tasks. From monitoring personal
          information breaches to managing important documents, Assurify acts as
          your digital assistant, ensuring your online world remains protected
          and organized.
        </p>
      )
    },
    {
      title: '2. Why You Need Assurify?',
      content: (
        <>
          <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            In today’s interconnected world, online threats are increasing
            daily. Personal data theft, password breaches, and identity fraud
            have become significant concerns. Assurify provides:
          </p>
          <ul className='list-disc list-inside text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            <li>A proactive way to safeguard sensitive information.</li>
            <li>Tools to streamline document management.</li>
            <li>Real-time alerts for potential vulnerabilities.</li>
          </ul>
          <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            Investing in a solution like Assurify not only secures your data but
            also gives you peace of mind.
          </p>
        </>
      )
    },
    {
      title: '3. Feature Of Assurify?',
      content: (
        <>
          <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            Assurify’s robust features make it stand out in the crowded security
            app market. Here are some key highlights:
          </p>
          <ul className='flex flex-col gap-[12px] list-disc list-inside text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            <li>
              <span className='font-normal text-[#f7f7f7]'>
                Breach Monitoring:
              </span>{' '}
              Receive real-time alerts if your personal data appears in any
              breach database.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>
                Password Management:
              </span>{' '}
              Generate and store strong, unique passwords for all your accounts
              securely.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>
                Secure Document Storage:
              </span>{' '}
              Organize and access your critical documents safely from anywhere.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>
                Identity Theft Protection:
              </span>{' '}
              Tools to protect your identity and mitigate risks in case of
              fraud.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>
                Intuitive Dashboard:
              </span>{' '}
              Easy-to-use interface that provides a holistic view of your
              digital security.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>
                Multi-Device Support:
              </span>{' '}
              Sync Assurify across devices for seamless access to your data.
            </li>
          </ul>
        </>
      )
    },
    {
      title: '4. How the Lifetime Deal Works',
      content: (
        <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          The Assurify Lifetime Deal offers unparalleled value by allowing you
          lifetime access for a one-time payment of $69.99, compared to the
          regular yearly subscription costing $1,140. This means you save over
          90%, making it a no-brainer investment.
        </p>
      )
    },
    {
      title: '5. Who Should Use Assurify?',
      content: (
        <>
          <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            Assurify is ideal for:
          </p>
          <ul className='flex flex-col gap-[12px] list-disc list-inside text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            <li>
              <span className='font-normal text-[#f7f7f7]'>Freelancers:</span>{' '}
              Manage sensitive client information securely.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>
                Small Business Owners:
              </span>{' '}
              Protect company data and streamline operations.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>Individuals:</span>{' '}
              Safeguard personal details and avoid identity theft.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>Families:</span>{' '}
              Share secure access to essential documents and passwords.
            </li>
          </ul>
        </>
      )
    },
    {
      title: '6. Benefits of the Lifetime Deal',
      content: (
        <>
          <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            Opting for the Assurify Lifetime Deal ensures:
          </p>
          <ul className='flex flex-col gap-[12px] list-disc list-inside text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
            <li>
              <span className='font-normal text-[#f7f7f7]'>Cost Savings:</span>{' '}
              Pay once and enjoy lifetime benefits
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>Peace of Mind:</span>{' '}
              Enhanced security for your personal and professional data.
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>Ease of Use:</span> A
              user-friendly platform to simplify your digital tasks
            </li>
            <li>
              <span className='font-normal text-[#f7f7f7]'>
                Future Updates:
              </span>{' '}
              Access to all future upgrades without additional costs.
            </li>
          </ul>
        </>
      )
    },
    {
      title: '7. Pricing Comparison: Lifetime Deal vs. Regular Pricing',
      content: (
        <div className='border border-[#F7F7F7] rounded-[8px] overflow-hidden'>
          <table className='border-collapse w-full'>
            <tr>
              <th className='border border-[#F7F7F7] p-2'>Plan</th>
              <th className='border border-[#F7F7F7] p-2'>
                Annual Subscription
              </th>
              <th className='border border-[#F7F7F7] p-2'>
                Lifetime Deal Price
              </th>
            </tr>
            <tr>
              <td className='border border-[#F7F7F7] p-2'>Regular Price</td>
              <td className='border border-[#F7F7F7] p-2'>$1,140/year</td>
              <td className='border border-[#F7F7F7] p-2'>-</td>
            </tr>
            <tr>
              <td className='border border-[#F7F7F7] p-2'>Annual Price</td>
              <td className='border border-[#F7F7F7] p-2'>-</td>
              <td className='border border-[#F7F7F7] p-2'>$69.99</td>
            </tr>
          </table>
        </div>
      )
    },
    {
      title: '8. How to Redeem the Assurify Lifetime Deal',
      content: (
        <ul className='flex flex-col gap-[12px] list-disc list-inside text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          <li className='font-normal text-[#f7f7f7]'>
            Visit the official Assurify Lifetime Deal page.
          </li>
          <li className='font-normal text-[#f7f7f7]'>
            Click on the "Buy Now" button.
          </li>
          <li className='font-normal text-[#f7f7f7]'>
            Complete the payment process.
          </li>
          <li className='font-normal text-[#f7f7f7]'>
            Download and activate your app to start securing your digital life.
          </li>
        </ul>
      )
    },
    {
      title: '9. Tips For Maximize Assurify',
      content: (
        <ul className='flex flex-col gap-[12px] list-disc list-inside text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          <li>
            <span className='font-normal text-[#f7f7f7]'>Regular Updates:</span>{' '}
            Always ensure your app is updated to access the latest features.
          </li>
          <li>
            <span className='font-normal text-[#f7f7f7]'>Set Alerts:</span>{' '}
            Customize breach monitoring alerts for faster responses.
          </li>
          <li>
            <span className='font-normal text-[#f7f7f7]'>
              Use Across Devices:
            </span>{' '}
            Sync Assurify across all devices to maximize utility.
          </li>
          <li>
            <span className='font-normal text-[#f7f7f7]'>
              Leverage Secure Storage:
            </span>{' '}
            Store important documents for easy access and added safety.
          </li>
        </ul>
      )
    },
    {
      title: '10. Conclusion',
      content: (
        <p className='text-[12px] lg:text-base font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          In an era where online security is paramount, investing in tools like
          Assurify is essential. The Assurify Lifetime Deal offers a rare
          opportunity to secure your digital world at a fraction of the cost.
          Originally priced at $1,140, you can now access lifetime benefits for
          just $69.99. Don’t wait – take the step towards enhanced security and
          organization today!
        </p>
      )
    }
  ]

  // handle see more button function
  const handleSeeMore = () => {
    setVisibleQuestions(questions.length)
  }

  // handle see less button function
  const handleSeeLess = () => {
    setVisibleQuestions(5)
  }

  return (
    <div className='flex flex-col gap-[16px] lg:gap-[24px]'>
      {/* top section */}
      <div className='flex flex-col gap-3'>
        <h1 className='text-[20px] lg:text-[40px] font-semibold text-[#f7f7f7] leading-[30px] lg:leading-[60px] tracking-[-0.4px]'>
          Transform Your Digital Security for Just $69.99
        </h1>
        <p className='text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          With the Assurify Lifetime Deal, originally priced at $1,140 but now
          available for only $69.99, you gain access to a robust suite of tools
          that keep your digital life secure and hassle-free.
        </p>
        <p className='text-[12px] lg:text-[16px] font-light text-[#A6A6A6] leading-[18px] lg:leading-[24px] tracking-[-0.16px]'>
          In this guide, we’ll explore everything about this deal, from features
          to benefits, and answer frequently asked questions to help you make an
          informed decision.
        </p>
      </div>

      {/* bottom section */}
      <div className='flex flex-col gap-[12px] lg:gap-4'>
        {/* Table of Contents */}
        <div className='flex flex-col gap-3'>
          <h1 className='text-[18px] lg:text-[32px] font-semibold text-[#f7f7f7] leading-[27px] lg:leading-12 tracking-[-0.32px]'>
            Table of Contents
          </h1>
        </div>

        {/* Render Questions Dynamically */}
        {questions.slice(0, visibleQuestions).map((question, index) => (
          <div key={index} className='flex flex-col gap-3'>
            <h2 className='text-[16px] lg:text-2xl font-medium text-[#f7f7f7] leading-[24px] lg:leading-9 tracking-[-0.24px]'>
              {question.title}
            </h2>
            {question.content}
          </div>
        ))}

        {/* See More Button */}
        <div className='flex justify-start gap-[24px]'>
          <button
            onClick={handleSeeMore}
            disabled={visibleQuestions === questions.length}
            className={`my-3 cursor-pointer text-[16px] text-[#f7f7f7] text-base font-medium leading-[24px] ${
              visibleQuestions === questions.length
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:underline'
            }`}>
            See more..
          </button>

          <button
            onClick={handleSeeLess}
            disabled={visibleQuestions === 5}
            className={`my-3 cursor-pointer text-[16px] text-[#f7f7f7] text-base font-medium leading-[24px] ${
              visibleQuestions === 5
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:underline'
            }`}>
            See less..
          </button>
        </div>
      </div>
    </div>
  )
}

export default Description
