import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserLayout from '../Layout/UserLayout'
import Home from '../pages/user-pages/Home'
const User = () => {
  return (
    <Routes>
        <Route path='/' element={<UserLayout/>}>

        <Route path='/' element={< Home/>}/>

        </Route>
    </Routes>
  )
}

export default User