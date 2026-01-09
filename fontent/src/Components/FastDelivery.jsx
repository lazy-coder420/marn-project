import React from 'react';
import Container from '../Components/Container';
import { FaTruck, FaHeadphonesAlt, FaShieldAlt } from "react-icons/fa";

const FastDelivery = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-22 mt-34 mb-25 text-center py-16">

        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <FaTruck className="text-white text-2xl" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">
            FREE AND FAST DELIVERY
          </h3>
          <p className="text-gray-500 text-sm">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <FaHeadphonesAlt className="text-white text-2xl" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="text-gray-500 text-sm">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">
            MONEY BACK GUARANTEE
          </h3>
          <p className="text-gray-500 text-sm">
            We return money within 30 days
          </p>
        </div>

      </div>
    </Container>
  );
};

export default FastDelivery;
