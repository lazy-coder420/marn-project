import React from 'react'
import Container from '../Components/Container'
import SectionHeading from '../Components/SectionHeading'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CardCategories from '../Components/CardCategories';





function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute -top-20 right-8 bg-gray-300 rounded-full p-4"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute -top-20 right-23 bg-gray-300 rounded-full p-4"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

const Categories = () => {
     const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
        responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

    <Container>
   <div className='mt-37.5 mb-15 flex gap-22'> 
    <SectionHeading 
    title="Today's" 
    heading="Browse By Category" />
    </div>
</Container>






<Container >
    <div className="slider-container">
      <Slider {...settings}>
        <div className='hover:bg-primary ease-linear duration-300 cursor-pointer'>
          <CardCategories 
          imgSrc={<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_11099_5823)">
<path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6666 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="15.1666" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_11099_5823">
<rect width="56" height="56" fill="white"/>
</clipPath>
</defs>
</svg>
}
          productName="Phon"
          />
        </div>

        
        {/* <div className='hover:bg-primary ease-linear duration-300 cursor-pointer'>
          <CardCategories 
          imgSrc={ <RiComputerLine />}
          productName="Computers"
          />
        </div>
        <div className='hover:bg-primary ease-linear duration-300 cursor-pointer'>
          <CardCategories 
          imgSrc={<CiMobile4 />}
          productName="Phon"
          />
        </div>
        <div className='hover:bg-primary ease-linear duration-300 cursor-pointer'>
          <CardCategories 
          imgSrc={<CiMobile4 />}
          productName="Phon"
          />
        </div>
        <div className='hover:bg-primary ease-linear duration-300 cursor-pointer'>
          <CardCategories 
          imgSrc={<CiMobile4 />}
          productName="Phon"
          />
        </div>
        <div className='hover:bg-primary ease-linear duration-300 cursor-pointer'>
          <CardCategories 
          imgSrc={<CiMobile4 />}
          productName="Phon"
          />
        </div> */}

      </Slider>
    </div>
      <div className="w-full mx-auto h-px  bg-gray-300 mt-20 mb-20"></div>
</Container>
      
    </>
  )
}

export default Categories
