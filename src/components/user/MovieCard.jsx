import React from 'react'
import image from '../../assets/image.jpg'
import { useMovies } from '../../Context/MovieContext'

const MovieCard = () => {
    const{movies}=useMovies()
    console.log(movies);
  return (
    <div className=' w-full h-[250px] bg-black flex items-center px-5 gap-5 overflow-x-scroll scrollbar-none '>
        <div className=' min-w-40 h-56 bg-white rounded'>
            <img src={image} alt="" className='h-full w-full rounded'/>
        </div>
        
       
        
    </div>
  )
}

export default MovieCard