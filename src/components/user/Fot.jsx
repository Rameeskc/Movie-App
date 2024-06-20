import React from "react";
import { FaHome } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdChildCare } from "react-icons/md";
import { MdUpcoming } from "react-icons/md";

const Fot = () => {
    const links =[
        {
            id:1,
            link:<FaHome/>
        },
        {
            id:2,
            link:<PiTelevisionSimpleBold />
        },
        {
            id:3,
            link:<BiSolidMoviePlay />
        },
        {
            id:4,
            link:<MdChildCare />
        },
        {
            id:5,
            link:<MdUpcoming />

        },
    ]
  return (
    <div className=" fixed bottom-0 flex w-screen h-16 bg-black justify-between lg:hidden">
      
      <ul className=" flex items-center text-white justify-evenly w-screen h-16 text-2xl">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" text-gray-500 capitalize"
          >
            {link}
          </li>
        ))}
      </ul>  
    </div>
  );
};

export default Fot;