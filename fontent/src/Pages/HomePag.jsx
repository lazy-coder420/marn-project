import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import FlashSales from '../Components/FlashSales';
// 
import BestSellingProducts from '../Components/BestSellingProducts';

import Jbl from '../Components/Jbl';
import Explore from '../Components/Explore';
import NewArrival from '../Components/NewArrival';
import FastDelivery from '../Components/FastDelivery';
import Footer from '../Components/Footer';


const HomePag = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
     <FlashSales />
      {/* <Categories /> */}
      <BestSellingProducts />
      <Jbl />
      <Explore />
      <NewArrival />
      <FastDelivery />
      
      <Footer />
     
    </>
  );
};

export default HomePag;
