import React, { useRef, useState } from 'react';
import Logo from '../../../assets/dashboard/admin/logo.png';
import { adminNav } from '../../../constants/sidebarData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoLogOut } from 'react-icons/io5';
import { useSidebar } from '../../../context/SidebarContext';
import { RxCross2 } from 'react-icons/rx';

const Sidebar = () => {

  const location = useLocation().pathname.split("/")[2];
  const [showLogout, setshowLogout] = useState(false)
  const { isNavOpen } = useSidebar();
  const sidebarRef = useRef(null);
  const nav = useNavigate();


  const handleLogout = (value) => {
    if (value) {
      setshowLogout(false)
      nav("/admin/login");
    }
    else {
      setshowLogout(false)
    }
  }



  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`lg:block hidden w-[15rem] h-[100vh] bg-[#000] p-5 relative`}>

        <div className='flex items-center gap-x-2 border-b border-b-[#2E2E2E] pb-4'>
          <img src={Logo} alt="Hop On- Logo" className='h-[1.5rem] mr-2' />
          <h1 className='text-xl font-semibold text-white'>Global Pay</h1>
        </div>

        <div className='mt-8'>
          {adminNav?.map((i) => (
            <Link to={`/admin/dashboard/${i.link}`} key={i.id} className={`flex ${location == i.link && "bg-[#FF6600]"} p-2 rounded-md items-center gap-x-3 mb-2 cursor-pointer ${location == i.link ? "text-white" : "text-[#a6b0cf]"}`}>
              <div>{i.icon}</div>
              <p className='text-sm'>{i.name}</p>
            </Link>
          ))}
        </div>

        <div onClick={() => setshowLogout(!showLogout)} className='absolute bottom-5 w-[80%] flex items-center gap-x-3 cursor-pointer '>
          <IoLogOut  className='text-[#FF3B30] cursor-pointer text-xl' />
          <p className='text-[#C9C9C9]'>Log out</p>
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

            <div>
              {navData?.map((i) => (
                <Link to={`/dashboard/${i.link}`} key={i.id} className={`flex ${location == i.link && "bg-[#FF6600]"} p-2 rounded-md items-center gap-x-3 mb-2 cursor-pointer ${location == i.link ? "text-white" : "text-[#a6b0cf]"}`}>
                  <div>{i.icon}</div>
                  <p className='text-sm'>{i.name}</p>
                </Link>
              ))}
            </div>

            <div className='absolute bottom-5 w-[80%] flex items-center gap-x-3 '>
              <IoLogOut onClick={() => nav("/admin/login")} className='text-[#FF3B30] cursor-pointer text-xl' />
              <p className='text-[#C9C9C9]'>Log out</p>
            </div>

          </div>
        )}

      {
        showLogout && (
          <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={() => setshowLogout(false)}>

            <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto w-[25rem] transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>

              <div className='flex justify-center items-center w-[100%] flex-col'>
                  <h1>Log out?</h1>
                  <p className='mt-2 text-center text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>

                  <h1 onClick={()=>handleLogout(false)} className='cursor-pointer mt-2 py-2 border-t border-t-[#808080] border-b border-b-[#808080] w-[100%] text-center'>Cancel</h1>
                  <h1 onClick={()=>handleLogout(true)} className='text-red-600 cursor-pointer pt-2'>Logout</h1>
              </div>

            </div>

          </div>
        )
      }
    </>
  );
};

export default Sidebar;
