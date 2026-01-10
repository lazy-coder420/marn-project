import React from 'react';

import Banner from '../Components/Banner';
import FlashSales from '../Components/FlashSales';
import BestSellingProducts from '../Components/BestSellingProducts';

import Jbl from '../Components/Jbl';
import Explore from '../Components/Explore';
import NewArrival from '../Components/NewArrival';
import FastDelivery from '../Components/FastDelivery';



const HomePag = () => {
  return (
    <>

      <Banner />
     <FlashSales />
      {/* <Categories /> */}
      <BestSellingProducts />
      <Jbl />
      <Explore />
      <NewArrival />
      <FastDelivery />
      
      
     
    </>
  );
};

export default HomePag;
