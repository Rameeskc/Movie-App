import React from 'react'
import AdminHeading from '../../components/admin/AdminHeading'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


const AdminHome = () => {
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
            item:'Type'
        },
        {
            id:4,
            item:'Category'
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
        <button className=' h-[30px] w-32 bg-green-600 text-lg rounded'>Add</button>
        
    </div>
    <div className=' w-full h-auto'>
        <table className=' w-full border'>
            <tr className='border-solid border-2'>
                
                   {headding.map(({id,item})=>(
                        <th key={id} className='border-solid border-2 border-gray-500'>
                            {item}
                        </th>
                   ))}
                
            </tr>
            <tr className=' text-center'>
                <td className='border-solid border-2 text-center'></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='flex items-center justify-center'><FaEdit /></td>
                <td><FaTrash /></td>
            </tr>
        </table>
    </div>
    
    </>
  )
}

export default AdminHome