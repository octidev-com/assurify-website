import React, { useState } from 'react'
import OrgIcon from '../../assets/icon/assurify-icon.png'
import { NavLink } from 'react-router'
import CustomIcon from '../../assets/icon/CustomIcon'
import Button from '../Common/Button'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      {/* Navbar */}
      <div className='bg-[rgba(255,255,255,0.12)] backdrop-blur-[37px] border-b-[0.5px] border-b-[rgba(255,255,255,0.6)] text-white flex justify-center w-full items-center p-3 sm:p-4 lg:p-6 sticky top-0 z-50'>
        <div className='container flex justify-between items-center max-w-full px-3 sm:px-4 lg:px-6'>
          {/* Logo */}
          <img
            src={OrgIcon}
            alt='Assurify logo'
            className='w-[80px] sm:w-[100px] h-auto'
          />

          {/* Toggle Text for Mobile */}
          <button
            className='md:hidden text-white text-[16px] font-normal'
            onClick={toggleSidebar}>
            <CustomIcon iconName='hamburger-icon' />
          </button>

          {/* Navigation Links - Hidden on Mobile */}
          <div className='hidden md:flex gap-2 sm:gap-3 lg:gap-6 flex-wrap items-center'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `text-[14px] sm:text-[16px] font-normal ${
                  isActive ? 'text-[#48BD42]' : 'text-white'
                } hover:text-[#48BD42]`
              }>
              Home
            </NavLink>
            <NavLink
              to='/forMerchant'
              className={({ isActive }) =>
                `text-[14px] sm:text-[16px] font-normal ${
                  isActive ? 'text-[#48BD42]' : 'text-white'
                } hover:text-[#48BD42]`
              }>
              For Merchant
            </NavLink>
            <NavLink
              to='/deals'
              className={({ isActive }) =>
                `text-[14px] sm:text-[16px] font-normal ${
                  isActive ? 'text-[#48BD42]' : 'text-white'
                } hover:text-[#48BD42]`
              }>
              Deals
            </NavLink>
            <NavLink
              to='/pricing'
              className={({ isActive }) =>
                `text-[14px] sm:text-[16px] font-normal ${
                  isActive ? 'text-[#48BD42]' : 'text-white'
                } hover:text-[#48BD42]`
              }>
              Pricing
            </NavLink>
          </div>

          {/* Buttons - Hidden on Mobile */}
          <div className='hidden md:flex gap-2 sm:gap-3 lg:gap-[30px] flex-wrap items-center'>
            <Button buttonText={'View Demo'} variant='secondary-outline' />

            <Button buttonText={'Try For Free'} />
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-[rgba(255,255,255,0.12)] backdrop-blur-[37px] border-b-[0.5px] border-b-[rgba(255,255,255,0.6)] text-white p-6 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        {/* Close Icon */}
        <button
          className='absolute top-6 right-6 text-white text-[16px] font-normal'
          onClick={toggleSidebar}>
          <CustomIcon iconName='close-icon' />
        </button>

        {/* Sidebar Links */}
        <div className='flex flex-col gap-6 mt-12'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }
            onClick={toggleSidebar}>
            Home
          </NavLink>
          <NavLink
            to='/forMerchant'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }
            onClick={toggleSidebar}>
            For Marcent
          </NavLink>
          <NavLink
            to='/deals'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }
            onClick={toggleSidebar}>
            Deals
          </NavLink>
          <NavLink
            to='/pricing'
            className={({ isActive }) =>
              `text-[16px] font-normal ${
                isActive ? 'text-[#48BD42]' : 'text-white'
              } hover:text-[#48BD42]`
            }
            onClick={toggleSidebar}>
            Pricing
          </NavLink>
        </div>

        {/* Sidebar Buttons */}
        <div className='flex flex-col gap-4 mt-8'>
          <Button buttonText={'View Demo'} variant='secondary-outline' />

          <Button buttonText={'Try For Free'} />
        </div>
      </div>

      {/* Overlay for Sidebar (visible when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-opacity-50 z-40 md:hidden'
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

export default Navbar
