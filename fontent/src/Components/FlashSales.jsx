import React from 'react';
import Container from '../Components/Container';
import SectionHeading from '../Components/SectionHeading';
import Card from '../Components/Card';

import Cardimg1 from '../assets/cardimg1.png';
import Cardimg2 from '../assets/cardimg2.png';
import Cardimg3 from '../assets/cardimg3.png';
import Cardimg4 from '../assets/cardimg4.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CountDown from '../Components/CountDown';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

/* ---------- Slider Arrows ---------- */
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute -top-20 right-5 bg-gray-300 rounded-full p-4 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute -top-20 right-20 bg-gray-300 rounded-full p-4 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

/* ---------- FlashSales Component ---------- */
const FlashSales = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Heading & Countdown */}
      <Container>
        <div className="mt-37.5 mb-10 flex gap-22">
          <SectionHeading title="Today's" heading="Flash Sales" />
          <CountDown className="self-end" />
        </div>
      </Container>

      {/* Slider */}
      <Container>
        <Slider {...settings}>
          {[Cardimg1, Cardimg2, Cardimg3, Cardimg4, Cardimg1, Cardimg2, Cardimg3, Cardimg4].map(
            (img, index) => (
              <div key={index}>
                <Card
                  photosrc={img}
                  title="HAVIT HV-G92 Gamepad"
                  discount="120"
                  price="160"
                  review="88"
                  Percentage="40"
                  btn="Add to Cart"
                />
              </div>
            )
          )}
        </Slider>

        {/* Button */}
        <div className="pl-112.5 mb-15">
          <button className="bg-primary py-4 px-12 text-white mt-10">
            View All Products
          </button>
        </div>

        <div className="container mx-auto px-4">
        <div className="h-px bg-gray-300 my-20"></div>
       </div>

      </Container>
    </>
  );
};

export default FlashSales;
