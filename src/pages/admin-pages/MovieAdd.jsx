import React from 'react'

const MovieAdd = () => {
  return (
    <div className=' w-full h-full  flex items-center justify-center'>
        <div className='w-[400px] h-[500px] my-4 border-4 rounded-xl flex flex-col justify-center items-center '>
            <div className='flex flex-col items-center   h-[80px] w-full'>
                <label htmlFor="">Name</label>
                <input type="text" name='Name'  className='text-black border w-60 h-7' />
            </div>
            <div className='flex flex-col items-center h-[80px] w-full'>
                <label htmlFor="">Language</label>
                
                <select name="" id="" className=" w-60 h-7">
                    <option className=" w-60 h-7">English</option>
                    <option className=" w-60 h-7">Hindi</option>
                    <option className=" w-60 h-7">Tamil</option>
                    <option className=" w-60 h-7">Malayalam</option>
                   
                </select>
                
            </div>
            <div className='flex flex-col items-center   h-[80px] w-full'>
                <label htmlFor="">Type</label>
                <select name="" id="" className=" w-60 h-7">
                    <option className=" w-60 h-7">Sports</option>
                    <option className=" w-60 h-7">Tv Shows</option>
                    <option className=" w-60 h-7">Movie</option>
                    <option className=" w-60 h-7">Kids</option>
                   
                </select>
            </div>
            <div className='flex flex-col items-center  h-[80px] w-full'>
                <label htmlFor="">Category</label>
                <select name="" id="" className=" w-60 h-7">
                    <option className=" w-60 h-7">Horror</option>
                    <option className=" w-60 h-7">Drama</option>
                    <option className=" w-60 h-7">Crime Thriller</option>
                    
                   
                </select>
            </div>
            <div className='flex flex-col items-center  h-[80px] w-full'>
                <label htmlFor="">Image</label>
                <input type="text" name='Name' className='text-red-500 border w-60 h-7' />
            </div>
            
            <button className='w-20 h-8 bg-green-600 rounded-lg' >
                add
            </button>
            
            
        </div>
    </div>
  )
}

export default MovieAdd