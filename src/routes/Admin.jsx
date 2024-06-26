import React from 'react'
import{Route,Routes} from "react-router-dom";
import AdminLayout from '../Layout/AdminLayout';
import AdminHome from './../pages/admin-pages/AdminHome';
import MovieAdd from './../pages/admin-pages/MovieAdd';
import EditMovie from '../pages/admin-pages/EditMovie';

const Admin = () => {
  return (
    <Routes>
        <Route path='/' element={<AdminLayout/>}>  
            <Route path='/Home' element={<AdminHome/>}/>
            <Route path='/MovieAdd' element={<MovieAdd/>}/>
            <Route path='/EditMovie/:movieId' element={<EditMovie/>}/>
        </Route>
    </Routes>
  )
}

export default Admin