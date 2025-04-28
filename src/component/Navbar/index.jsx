import React from 'react'
import OrgIcon from '../../assets/icon/assurify-icon.png'

const Navbar = () => {
  return (
    <div className='bg-[rgba(255,255,255,0.12)] backdrop-blur-[37px] border-b-[0.5px] border-b-[rgba(255,255,255,0.6)] text-white flex justify-center w-full items-center p-6 sticky top-0 z-50'>
      <div className='container flex justify-between items-center'>
        <img src={OrgIcon} alt='' />
        <div className='flex gap-6 '>
          <a
            className='text-[16px] font-normal active:text-[#48BD42] hover:text-[#48BD42]'
            href=''>
            Home
          </a>
          <a
            className='text-[16px] font-normal active:text-[#48BD42] hover:text-[#48BD42]'
            href=''>
            Documentation
          </a>
          <a
            className='text-[16px] font-normal active:text-[#48BD42] hover:text-[#48BD42]'
            href=''>
            Discussion
          </a>
          <a
            className='text-[16px] font-normal active:text-[#48BD42] hover:text-[#48BD42]'
            href=''>
            Deals
          </a>
          <a
            className='text-[16px] font-normal active:text-[#48BD42] hover:text-[#48BD42]'
            href=''>
            Pricing
          </a>
        </div>
        <div className='flex gap-[30px]'>
          <button type='button' className='btn-secondary'>
            View Demo
          </button>
          <button type='button' className='btn-primary'>
            Try For Free
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
