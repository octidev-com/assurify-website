import React from 'react'
import OrgIcon from '../../assets/icon/assurify-icon.png'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='bg-[rgba(255,255,255,0.12)] backdrop-blur-[37px] border-b-[0.5px] border-b-[rgba(255,255,255,0.6)] text-white flex justify-center w-full items-center p-6 sticky top-0 z-50'>
      <div className='container flex justify-between items-center'>
        <img src={OrgIcon} alt='Assurify logo' className='w-[100px] h-[25px]' />
        <div className='flex gap-6'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }>
            Home
          </NavLink>
          <NavLink
            to='/documentation'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }>
            Documentation
          </NavLink>
          <NavLink
            to='/discussion'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }>
            Discussion
          </NavLink>
          <NavLink
            to='/forMerchant'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }>
            For Merchant
          </NavLink>
          <NavLink
            to='/deals'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }>
            Deals
          </NavLink>
          <NavLink
            to='/pricing'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }>
            Pricing
          </NavLink>
        </div>
        <div className='flex gap-[30px]'>
          <NavLink to='/demo' className='btn-secondary'>
            View Demo
          </NavLink>
          <NavLink to='/pricing' className='btn-primary'>
            Try For Free
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
