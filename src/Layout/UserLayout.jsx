import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/user/Header';
import Fot from '../components/user/Fot';
import Bottom from '../components/user/Bottom';

const UserLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Fot/>
    <Bottom/>
    </>
  )
}

export default UserLayout