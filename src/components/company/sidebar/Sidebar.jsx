import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../../assets/dashboard/admin/logo.png';
import { companyNavData } from '../../../constants/sidebarData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoLogOut } from 'react-icons/io5';
import { useSidebar } from '../../../context/SidebarContext';

const Sidebar = () => {

  const location = useLocation().pathname.split("/")[3];
  const { isNavOpen, toggleNav } = useSidebar();
  const sidebarRef = useRef(null);
  const nav = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleNav();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleNav]);






  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`lg:block hidden w-[15rem] h-[100vh] bg-[#ffff] p-5 relative`}>

        <div className='flex items-center gap-x-2'>
          <img src={Logo} alt="Hop On- Logo" className='h-[2rem] mr-2' />
          <h1 className='text-xl font-semibold'>Global Pay</h1>
        </div>

        <div className='mt-10'>
          {companyNavData?.map((i) => (
            <Link to={`/company/dashboard/${i.link}`} key={i.id} className={`flex ${location == i.link && "bg-[#F5F5F5]"} px-5 p-2 rounded-full items-center gap-x-3 mb-2 cursor-pointer ${location == i.link ? "text-[#037AE0]" : "text-[#8F8F8F]"}`}>
              <div>{i.icon}</div>
              <p className='text-sm'>{i.name}</p>
            </Link>
          ))}
        </div>

        <div className='absolute bottom-5 w-[80%] flex justify-between items-center '>
          <div onClick={() => nav("/")} className='flex items-center gap-x-2 cursor-pointer'>
            <IoLogOut className='text-[#F8835C] cursor-pointer text-xl' />
            <p className='text-xs text-[#F8835C]'>Logout</p>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {
        isNavOpen && (
          <div className={`lg:hidden block w-[14rem] z-50 h-[100vh] bg-[#0F0F0F] p-5 fixed top-0 left-0 transition-all duration-300 ease-in-out ${isNavOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`} ref={sidebarRef}>
            <div className='flex items-center gap-x-2'>
              <img src={Logo} alt="leadbot-logo" className='h-[2rem] mr-2' />
              <h1 className='text-xl font-semibold text-white'>Hop On</h1>
            </div>

            <p className='text-[#a6b0cf] mt-[2rem] mb-4 text-xs'>MENU</p>

            <div className='mt-10'>
              {companyNavData?.map((i) => (
                <Link to={`/dashboard/${i.link}`} key={i.id} className={`flex ${location == i.link && "bg-[#F5F5F5]"} px-5 p-2 rounded-full items-center gap-x-3 mb-2 cursor-pointer ${location == i.link ? "text-black" : "text-[#8F8F8F]"}`}>
                  <div>{i.icon}</div>
                  <p className='text-sm'>{i.name}</p>
                </Link>
              ))}
            </div>


            <div className='absolute bottom-5 w-[80%] flex justify-between items-center '>
              <div onClick={() => nav("/")} className='flex items-center gap-x-2 cursor-pointer'>
                <IoLogOut className='text-[#F8835C] cursor-pointer text-xl' />
                <p className='text-xs text-[#F8835C]'>Logout</p>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Sidebar;
