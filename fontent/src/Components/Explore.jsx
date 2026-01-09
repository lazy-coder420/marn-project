import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Container from '../Components/Container';
import Card from '../Components/Card';
import SectionHeading from '../Components/SectionHeading';
import Letop1 from '../assets/Letop1.png'
import Letop2 from '../assets/Letop2.png'
import Letop3 from '../assets/Letop3.png'


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


const Explore = () => {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
   rows:2,
    slidesToScroll: 4,
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
<Container >
    <div className='mt-37.5 mb-10 flex gap-22'> 
    <SectionHeading 
    title="Our Products's" 
    heading="Explore Our Products" />
    </div>
</Container>

<Container >
 <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Card
      photosrc={Letop1}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop2}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop3}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop1}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop2}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop3}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop1}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop2}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop3}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop1}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop2}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>
        <div>
          <Card
      photosrc={Letop3}
      title="ASUS FHD Gaming Laptop"
      discount="120"
      price="160"
      review="88"  
      Percentage="40"
      btn="Add to Cart"
    />
        </div>

  
       
      </Slider>
    </div>
    <div className='flex justify-center mb-46 items-center'><button className='bg-primary py-4 px-12 mt-19 cursor-pointer'>View All Products</button></div>
</Container>
</>
  )
}

export default Explore
