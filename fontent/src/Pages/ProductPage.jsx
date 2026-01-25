import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
// import Card from '../Components/Card'
import BreadCrump from '../Components/BreadCrump'
import Pagination  from '../Components/Pagination'
import Skeleton from '../Components/Skeleton'
import { useDispatch } from 'react-redux'
import { TOTALProducts } from '../createSlice'

const ProductPage = () => {

  const [Products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setcategory] = useState([])


  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {setProducts(data.products) 
        setLoading(true)
        dispatch(TOTALProducts(data.products))
      })
  }, [])
  
    
useEffect(()=>{
const UncommonCategory = [...new Set(Products.map((item)=>item.category))]
 
// eslint-disable-next-line react-hooks/set-state-in-effect
setcategory(UncommonCategory)

 }, [Products])

 const handleFilter = (item) => {
  
  const FilterItem = Products.filter((categoryItem)=> categoryItem.category == item)
};

 

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
            {
              category.map((item, idx)=>{
                return(
                   <li key={idx} onClick={()=>handleFilter(item)} className="cursor-pointer hover:text-black">{item}</li> 
                )
              })
            }

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

         {
          loading ? 
            <Pagination itemsPerPage={6} />
            : 
           
           <>
           <Skeleton /> 
           <Skeleton /> 
           <Skeleton /> 
           <Skeleton /> 
           <Skeleton /> 
           <Skeleton /> 
           </>

           
         }


  </Flex>
</div>


        </Flex>
      </Container>
    </>
  )
}

export default ProductPage;
