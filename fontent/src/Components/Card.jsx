import React from 'react'
import { FaStar } from "react-icons/fa";
import Flex from '../Components/Flex'
import { FaRegHeart } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";




const Card = ({ photosrc, title,  discount, price, review, Percentage, btn,}) => {
  return (
    <>


    <div className='w-67.5 group'>
        <div className='relative overflow-hidden'>
            <img src={photosrc} alt="" />
            <h5 className='absolute top-3 left-3 py-1 px-3 text-xs text-white bg-primary runded-sm '>-{Percentage}%</h5>
            <div className='absolute top-3 right-3 flex flex-col gap-3'>
            <div className='w-7.5 h-7.5 bg-white rounded-full flex justify-center items-center'><FaRegHeart  className='text-2xl'/></div>
            <div className='w-7.5 h-7.5 bg-white rounded-full flex justify-center items-center'><LiaEye  className='text-2xl'/></div>
            </div>
             <button className='absolute -bottom-10 group-hover:bottom-0 transition-all duration-300 ease-linear bg-black text-white block w-full  py-2 px-21.75 cursor-pointer '>{btn}</button>

          </div>
         
          <h2>{title}</h2>
     
      <Flex className=" gap-3 mt-2 mb-2">
              <h3>${discount}</h3>
                <h3>${price}</h3>
          </Flex>

    <Flex className=" items-center gap-2">

            <Flex  className=" text-yellow-400  gap-1">
                 <FaStar />
                  <FaStar />
                    <FaStar />
                      <FaStar />
            </Flex>

          <h5>({review})</h5>
     </Flex>
          
    </div>
 
          
</>

  )
}

export default Card
