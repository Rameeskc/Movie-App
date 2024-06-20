import React from 'react'
import image4 from "../../assets/banner-image.png"

const Banner = () => {
  return (
    <div className=' w-full h-[600px] lg:w-full lg:h-[700px] bg-slate-800'>
      <img src={image4} alt="banner" className='h-full w-full' />
    </div>
  )
}

export default Banner