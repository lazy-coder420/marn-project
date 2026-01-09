import React from 'react'
import Container from '../Components/Container'
import SectionHeading from '../Components/SectionHeading'
import Ps1 from '../assets/Ps1.png'
import Ps2 from '../assets/Ps2.png'
import Ps3 from '../assets/Ps3.png'
import Ps4 from '../assets/Ps4.png'
import Flex from '../Components/Flex'




const NewArrival = () => {
  return (
<>
<Container >
    <div className='mt-37.5 mb-10 flex justify-center items-center gap-22'> 
    <SectionHeading 
    title="Featured" 
    heading="items-center" />
    </div>
</Container>

<Container >
 
        <div className="gap-7.5 flex justify-between">

      {/* LEFT BIG BANNER */}
      <div className="relative ">
        <img
        src={Ps1}
          className=""
        />

        <div className="absolute  rounded-lg"></div>

        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-3xl font-bold mb-2">PlayStation 5</h2>
          <p className="text-sm mb-2 max-w-xs">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button className="underline">Shop Now</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>

        {/* Women Collection */}
        <div className="relative ">
          <img src={Ps2} className=" " />
          <div className="absolute  rounded-lg"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Women’s Collections</h3>
            <p className="text-sm">Featured woman collections</p>
            <span className="underline">Shop Now</span>
          </div>
        </div>

       <div className='flex justify-between mt-7.5'>
               {/* Speakers */}
        <div className="relative">
          <img src={Ps3} className=" " />
          <div className="absolute  rounded-lg"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Speakers</h3>
            <p className="text-sm">Amazon wireless speakers</p>
            <span className="underline">Shop Now</span>
          </div>
        </div>

        {/* Perfume */}
        <div className="relative">
          <img src={Ps4} className="" />
          <div className="absolute  rounded-lg"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Perfume</h3>
            <p className="text-sm">GUCCI INTENSE OUD EDP</p>
            <span className="underline">Shop Now</span>
          </div>
        </div>

       </div>

      </div>
    </div>
  
    
</Container>
</>
  )
}

export default NewArrival
