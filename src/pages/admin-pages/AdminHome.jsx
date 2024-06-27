import React from 'react'
import AdminHeading from '../../components/admin/AdminHeading'
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useMovies } from '../../Context/MovieContext';


const AdminHome = () => {

const {movies} = useMovies()
const navigate = useNavigate
    console.log(movies)
    const headding = [
        {
            id:1,
            item:'Name'
        },
        {
            id:2,
            item:'Language'
        },
        {
            id:3,
            item:'Description'
        },
        {
            id:4,
            item:'Trailer'
        },
        {
            id:5,
            item:'Image'
        },
        {
            id:6,
            item:'Edit'
        },
        {
            id:7,
            item:'Delete'
        },
        

    ]
  return (
    <>
    <div className=' w-full h-16 flex items-center px-4 text-2xl justify-between'>
        <h1 className= ' underline underline-offset-8'>programs list</h1>
        <a href="/Admin/MovieAdd">
        <button className=' h-[30px] w-32 bg-green-600 text-lg rounded'>Add</button>
        </a>
    </div>
    <div className=' w-full h-auto'>
        <table className=' w-full border'>
            <thead>
            <tr className='border-solid border-2'>
                
                   {headding.map(({id,item})=>(
                        <th key={id} className='border-solid border-2 border-gray-500'>
                            {item}
                        </th>
                   ))}
                
            </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie)=>(
                        <tr className=' text-center'>
                        
                        <td className='border-solid border-2 text-center'>{movie.title}</td>
                        <td className='border-solid border-2 text-center'>{movie.language}</td>
                        <td className='border-solid border-2 text-center'>{movie.description}</td>
                        <td className='border-solid border-2 text-center'>{movie.trailer}</td>
                        <td className='border-solid border-2 text-center'>{movie.image}</td>
                        <td className='flex items-center justify-center'><FaEdit /></td>
                        <td><FaTrash /></td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    
    </>
  )
}

export default AdminHome