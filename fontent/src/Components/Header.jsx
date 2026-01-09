import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import Container from '../Components/Container';
import Flex from '../Components/Flex';

const Header = () => {
  return (
    <header className="bg-black py-3 text-white">
      <Container>
        <Flex className="justify-center">
          
          {/* Left text */}
          <div className="w-[70%] flex justify-end">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
              <a href="/shop" className="underline">
                Shop Now
              </a>
            </p>
          </div>

          {/* Right language button */}
          <div className="w-[30%] flex justify-end">
            <button className="flex items-center gap-1.5">
              English
              <FaChevronDown className="text-sm" />
            </button>
          </div>

        </Flex>
      </Container>
    </header>
  );
};

export default Header;
