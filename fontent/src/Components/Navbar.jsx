import React from 'react'
import Container from '../Components/Container';
import Flex from '../Components/Flex';
import Nlogo from '../assets/Nlogo.png';
import { HiMagnifyingGlass } from "react-icons/hi2";

import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router";




const navStyle = ({ isActive }) =>
  `relative transition-all duration-300
   ${
     isActive
       ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black"
       : "text-gray-600 hover:text-gray"
   }`;


const Navbir = () => {
  return (
<>
<nav className='py-10 pb-4'>
<Container >
    <Flex className=" justify-between items-center" >
        <div>
            <img src={Nlogo} alt="" />
        </div>
          {/* Nav Menu */}
          <ul className="flex gap-12 *:cursor-pointer">
            <li>
              <NavLink to="/" end className={navStyle}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navStyle}>
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navStyle}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/signup" className={navStyle}>
                Sign Up
              </NavLink>
            </li>
          </ul>
          
          <div className='flex gap-6 items-center'>
        <div  className='relative '>
            <input type="text" placeholder='What are you looking for?' className='w-60.75 rounded-[4] outline-none
          bg-[#F5F5F5] ps-5 pe-17 py-1.75 ' />
            <HiMagnifyingGlass className='text-2xl absolute top-1 right-4' />
        </div>
      

            <div className='flex gap-4 text-[32px]'>
                <CiHeart />
                <IoCartOutline />
            </div>
              </div>
    
    </Flex>
</Container>
</nav>
</>  )
}

export default Navbir
