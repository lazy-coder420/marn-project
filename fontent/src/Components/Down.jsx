import React, { useEffect, useState } from 'react';
import { countDownDateAndTime } from 'countdown-date-time';
import Flex from '../Components/Flex';

const Down = ({ className }) => {
  const conduct_date = '2026-01-01 23:59:59';
  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setTime(countDown);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex className={`text-3xl items-center font-bold gap-6 mb-8 ${className}`}>
      
<div className="relative">
  <div className="w-16 h-16 text-xs bg-white rounded-full flex flex-col items-center justify-center font-medium">
    <span>hours</span>
    <span>{time.hours}</span>
  </div>
</div>

      
<div className="relative">
  <div className="w-16 h-16 text-xs bg-white rounded-full flex flex-col items-center justify-center font-medium">
    <span>days</span>
    <span>{time.days}</span>
  </div>
</div>
<div className="relative">
  <div className="w-16 h-16 text-xs bg-white rounded-full flex flex-col items-center justify-center font-medium">
    <span>minutes</span>
    <span>{time.minutes}</span>
  </div>
</div>
<div className="relative">
  <div className="w-16 h-16 text-xs bg-white rounded-full flex flex-col items-center justify-center font-medium">
    <span>seconds</span>
    <span>{time.seconds}</span>
  </div>
</div>
   
    </Flex>
  )
}

export default Down;
