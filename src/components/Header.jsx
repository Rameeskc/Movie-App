import React from "react";
import logo  from "../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Fot from "../components/Fot";

const Header=()=> {

    const links =[
        {
            id:1,
            link:"Home"
        },
        {
            id:2,
            link:"Tv Shows"
        },
        {
            id:3,
            link:"Movies"
        },
        {
            id:4,
            link:"Kids"
        },
        {
            id:5,
            link:"Upcoming"
        },
    ]
    return(
        <div className=" flex w-full h-16 bg-black justify-between border-none">
            <div className=" w-70 h-16 pl-3 md:pl-10 flex items-center">
                <img src={logo} alt="logo" className="h-10  md:h-16 w-70 "/>
            </div>
                <ul className=" hidden lg:flex items-center text-white">
                    {links.map(({id,link})=>(
                        <li key={id} className=" px-3 justify-center text-gray-500 capitalize cursor-pointer hover:text-white duration-200">
                            {link}
                            </li>

                    ))}
                </ul>
            <div className=" hidden lg:flex items-center relative">
                <input  type="text" 
                        className=" w-50 h-10 flex rounded-full items-center px-4 pl-10 focus:outline-none text-gray-500 bg-[#262728] hover:border"
                        placeholder="Movies, shows and more..."/>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearch  className=" text-gray-500"/>
                </div>
            </div>
            
            <div className="flex items-center">
                <div className="lg:hidden mr-4">
                    <IoSearch className="text-gray-500 text-2xl" />
                </div>
                <div className="w-16 h-16 flex text-3xl items-center justify-center">
                    <FaUserCircle className="text-[#db4a2b]" />
                </div>
            </div>
        </div>
        
    )
}

export default Header