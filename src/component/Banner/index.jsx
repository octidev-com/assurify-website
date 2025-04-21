import React from 'react'

const Banner = () => {
  return (
    <div className='container flex justify-center mt-14'>
      <div className='max-w-[600px]  text-center '>
        <h1 className='text-[114px] font-semibold leading-[130px] mb-4'>
          Guard Your Packages
        </h1>
        <p className='text-xl font-[300px] text-[#F7F7F7] mb-8'>
          Assurify isn't just about protecting lost, stolen, or damaged
          packages; it's about protecting your brand.
        </p>
        <button className='btn-primary mr-[30px]'>How it works</button>
        <button className='btn-secondary'>View Demo</button>
      </div>
    </div>
  )
}

export default Banner
