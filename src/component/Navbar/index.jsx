import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-around items-center p-6'>
      <img src='/src/assets/icon/assurify-icon.png' alt='' />
      <div className='flex gap-6 '>
        <a
          className='text-lg font-normal active:text-[#48BD42] hover:text-[#48BD42]'
          href=''>
          Home
        </a>
        <a
          className='text-lg font-normal active:text-[#48BD42] hover:text-[#48BD42]'
          href=''>
          Documentation
        </a>
        <a
          className='text-lg font-normal active:text-[#48BD42] hover:text-[#48BD42]'
          href=''>
          Discussion
        </a>
        <a
          className='text-lg font-normal active:text-[#48BD42] hover:text-[#48BD42]'
          href=''>
          Deals
        </a>
        <a
          className='text-lg font-normal active:text-[#48BD42] hover:text-[#48BD42]'
          href=''>
          Pricing
        </a>
      </div>
      <div className='flex gap-[30px]'>
        <button
          type='button'
          className='border border-white px-6 py-[11px] rounded-2xl text-base font-medium cursor-pointer'>
          View Demo
        </button>
        <button
          type='button'
          className='bg-white text-[#000000] px-6 py-[11px] rounded-2xl text-base font-medium cursor-pointer'>
          Try For Free
        </button>
      </div>
    </div>
  )
}

export default Navbar
