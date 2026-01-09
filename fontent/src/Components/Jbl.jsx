import React from 'react';
import Jbl1Img from '../assets/Jbl1Img.png'; 
import Container from '../Components/Container';
import Down from '../Components/Down';

const Jbl = () => {
  return (
    <Container>
      {/* Parent must be relative */}
      <div className="relative mt-35">

        {/* Image */}
        <img src={Jbl1Img} alt="Jbl1" className="w-full" />

        {/* Text overlay */}
        <div className="absolute top-1/2 left-14 -translate-y-1/2">
          <h3 className="text-green-500 mb-4">Categories</h3>

          <h2 className="text-white font-semibold text-5xl mb-6 leading-tight">
            Enhance Your <br /> Music Experience
          </h2>

          <Down />

          <button className="mt-6 py-4 px-12 bg-green-500 text-white rounded">
            Buy Now!
          </button>
        </div>

      </div>
    </Container>
  );
};

export default Jbl;
