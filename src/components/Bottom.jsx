import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import logo2 from "../assets/appleStore.svg";
import logo3 from "../assets/googlePlay.svg";

const Bottom = () => {
  const links = [
    {
      id: 1,
      link: "For You",
    },
    {
      id: 2,
      link: "Tv Shows",
    },
    {
      id: 3,
      link: "Movies",
    },
    {
      id: 4,
      link: "Kids",
    },
  ];

  const support = [
    {
      id: 1,
      link: "Help Center",
    },
    {
      id: 2,
      link: "Terms Of Use",
    },
    {
      id: 3,
      link: "Privasy Policy",
    },
    {
      id: 4,
      link: "Content Complaints",
    },
  ];

  const logo = [
    {
      id: 1,
      link: <FaFacebook />,
    },
    {
      id: 1,
      link: <FaXTwitter />,
    },
    {
      id: 1,
      link: <AiFillInstagram />,
    },
    {
      id: 1,
      link: <FaYoutube />,
    },
  ];

  return (
    <>
      <div className=" flex flex-col w-full h-[600px] mt-16 md:h-[300px]">
        <div className="flex flex-col h-[600px] w-full md:flex-row md:h-[300px] bg-[#17181a] py-12 border-gray-500">
          <div className=" flex">
            <div className=" h-[200px] w-[200px]">
              <ul className="px-8">
                <li className=" text-lg text-white font-bold font-Roboto pb-3">
                  Cinema Circle
                </li>
                {links.map(({ id, link }) => (
                  <li
                    key={id}
                    className=" font-Roboto text-gray-400 leading-7 font-bold cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" h-[200px] w-[200px]">
              <ul>
                <li className=" text-lg text-white font-bold font-Roboto pb-3">
                  Support
                </li>
                {support.map(({ id, link }) => (
                  <li
                    key={id}
                    className=" font-Roboto text-gray-400 leading-7 font-bold cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full h-[180px] bg-[#17181a] flex flex-col items-center md:h-[200px]">
            <p className=" font-Roboto font-bold text-2xl text-white pb-6">
              Connect With Us
            </p>
            <ul className="flex gap-5">
              {logo.map(({ id, link }) => (
                <li key={id} className=" text-3xl text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className=" w-full h-[50px] bg-[#17181a] md:h-[200px] flex flex-col items-center">
            <p className=" font-Roboto font-bold text-2xl text-white pb-6 md:text-xl lg:text-2xl">
              Download the App
            </p>
            <div className="flex flex-col gap-5 lg:flex-row">
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[120px] mb-16 lg:mb-0 md:w-full md:h-[50px] flex items-center text-white  bg-[#202123] ">
        <p className="pl-5">
          Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Bottom;
