import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeading from '../components/admin/AdminHeading'

const AdminLayout = () => {
  return (
    <>
    <AdminHeading/>
    <Outlet/>    
    </>
  )
}

export default AdminLayout