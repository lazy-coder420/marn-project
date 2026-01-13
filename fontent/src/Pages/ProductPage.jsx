import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
// import Card from '../Components/Card'
import BreadCrump from '../Components/BreadCrump'
import Pagination  from '../Components/Pagination'


const ProductPage = () => {

  const [Products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {setProducts(data.products)
        console.log(data.products)
      })
  }, [])
  
  return (
    <>
      <Container>
        <BreadCrump className="mt-25"/>
        <Flex className="mt-12.5 items-start">

          {/* Left Sidebar */}
          <div className="w-[20%]">

            <h2 className="text-xl font-semibold mb-6">
              Shop by Category
            </h2>

            <ul className="space-y-4 text-base text-gray-800">
              <li className="cursor-pointer hover:text-black">Woman’s Fashion</li>
              <li className="cursor-pointer hover:text-black">Men’s Fashion</li>
              <li className="cursor-pointer hover:text-black">Electronics</li>
              <li className="cursor-pointer hover:text-black">Home & Lifestyle</li>
              <li className="cursor-pointer hover:text-black">Medicine</li>
              <li className="cursor-pointer hover:text-black">Sports & Outdoor</li>
              <li className="cursor-pointer hover:text-black">Baby’s & Toys</li>
              <li className="cursor-pointer hover:text-black">Groceries & Pets</li>
              <li className="cursor-pointer hover:text-black">Health & Beauty</li>
            </ul>

            <h2 className="text-xl font-semibold mt-10 mb-4">
              Shop by Color
            </h2>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 cursor-pointer">
                <span className="w-3 h-3 rounded-full bg-black"></span>
                <span className="text-gray-600">Black</span>
              </li>

              <li className="flex items-center gap-3 cursor-pointer">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-gray-600">Red</span>
              </li>

              <li className="flex items-center gap-3 cursor-pointer">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="text-gray-600">Green</span>
              </li>
            </ul>

          </div>

          {/* Right Content */}
<div className="w-[80%]">
  <Flex className="flex flex-wrap gap-7 ">
    {/* {
      Products.map((item ) => {
        
        })
        } */}
        <Pagination itemsPerPage={6} Products={Products}/>
  </Flex>
</div>


        </Flex>
      </Container>
    </>
  )
}

export default ProductPage
