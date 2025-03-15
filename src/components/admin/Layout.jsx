import React from 'react'
import Sidebar from './sidebar/Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
const Layout = () => {
  const location = useLocation().pathname.split("/")[3];

  return (

    <div className='flex items-start bg-[#000] w-screen h-screen'>
      <Sidebar />

      <div className='flex-1 h-[95vh] overflow-auto bg-white m-3 rounded-2xl'>
        <Header location={location} />
        <div className='p-5 flex-1 overflow-x-auto bg-[#F6F7F8] h-[100%]'>
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default Layout