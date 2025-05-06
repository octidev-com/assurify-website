import React, { useState } from 'react'
import CustomIcon from '../../assets/icon/CustomIcon'
import SectionTitle from '../Common/SectionTitle'
import Container from '../Common/Container'

const FAQ = ({ faqs }) => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className='mt-[50px] lg:mt-[156px]'>
      {/* Header Section */}

      <SectionTitle
        topText={'Customer Support'}
        middleText={'Frequently Asked Question'}
        bottomText={
          'Find answers to common questions and get the support you need—quick and easy'
        }
      />

      {/* FAQ Section */}
      <Container>
        <div className='max-w-[770px] mx-auto mt-12'>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className='bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] rounded-2xl mb-4 overflow-hidden'>
              <button
                className='flex items-center gap-4 p-4 w-full text-left'
                onClick={() => toggleFAQ(faq.id)}>
                <CustomIcon
                  iconName={
                    openFAQ === faq.id
                      ? 'accordion-close-icon'
                      : 'accordion-open-icon'
                  }
                  className={'w-[20px] h-[20px]'}
                />
                <p className='text-[12px] lg:text-lg font-normal text-[#f7f7f7] leading-[18px] lg:leading-[27px]'>
                  {faq.question}
                </p>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                <p className='p-4 pt-0 text-[#A6A6A6] text-[12px] lg:text-base font-light leading-[18px] lg:leading-6'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default FAQ
