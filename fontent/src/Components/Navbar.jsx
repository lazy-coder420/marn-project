import React from 'react'
import Container from '../Components/Container';
import Flex from '../Components/Flex';
import Nlogo from '../assets/Nlogo.png';
import { HiMagnifyingGlass } from "react-icons/hi2";

import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";



const Navbir = () => {
  return (
<>
<nav className='py-10 pb-4'>
<Container >
    <Flex className=" justify-between items-center" >
        <div>
            <img src={Nlogo} alt="" />
        </div>

        <ul className='flex gap-12 '>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
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
