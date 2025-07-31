import React from 'react'
import Navbar from '../Navbar'
import { useLocation, Outlet } from 'react-router-dom'

const MainLayout = () => {
   const Location = useLocation();
   
   const navbar = location.pathname === '/navbar'

  return (
    <div className='w-full min-h-screen flex flex-col items-center overflow-hidden'>
      { !navbar && <Navbar /> }
      <Outlet />
    </div>
  )
}

export default MainLayout