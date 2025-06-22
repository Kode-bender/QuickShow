import React from 'react'
import AdminNavBar from '../../components/admin/AdminNavBar'
import SideBar from '../../components/admin/SideBar'
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <AdminNavBar /> 
      <div className="flex">
        <SideBar />
        <div className="flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto">
            <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout