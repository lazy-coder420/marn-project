import React from 'react';
import Container from '../Components/Container';
import SectionHeading from '../Components/SectionHeading';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../Components/Card';

import Sell1 from '../assets/Sell1.png';
import Sell2 from '../assets/Sell2.png';
import Sell3 from '../assets/Sell3.png';
import Sell4 from '../assets/Sell4.png';

/* ---------- Slider Arrows ---------- */
function SampleNextArrow({ onClick }) {
  return <div onClick={onClick} />;
}

function SamplePrevArrow({ onClick }) {
  return <div onClick={onClick} />;
}

/* ---------- BestSellingProducts ---------- */
const BestSellingProducts = () => {
  const settings = {
    dots: true,
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
          dots: true,
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
      {/* Heading */}
      <Container>
        <div className="mt-37.5 mb-10 flex gap-22 justify-between">
          <SectionHeading
            title="This Month"
            heading="Best Selling Products"
          />
          <div className="self-end">
            <button className="bg-primary py-4 px-12 mr-4.5 text-white">
              View All
            </button>
          </div>
        </div>
      </Container>

      {/* Slider */}
      <Container>
        <Slider {...settings}>
          <Card
            photosrc={Sell1}
            title="The north coat"
            discount="260"
            price="360"
            review="65"
            Percentage="40"
            btn="Add to Cart"
          />
          <Card
            photosrc={Sell2}
            title="Gucci duffle bag"
            discount="960"
            price="1160"
            review="65"
            Percentage="40"
            btn="Add to Cart"
          />
          <Card
            photosrc={Sell3}
            title="RGB liquid CPU Cooler"
            discount="160"
            price="170"
            review="65"
            Percentage="40"
            btn="Add to Cart"
          />
          <Card
            photosrc={Sell4}
            title="Small BookShelf"
            discount="120"
            price="160"
            review="88"
            Percentage="40"
            btn="Add to Cart"
          />
        </Slider>
      </Container>
    </>
  );
};

export default BestSellingProducts;
