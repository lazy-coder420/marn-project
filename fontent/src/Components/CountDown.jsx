import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';  
import Flex from '../Components/Flex';
const CountDown = ({className}) => {

 const conduct_date = '2026-01-01 23:59:59';
 const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setTime(countDown); 
    }, 1000);


  }, []);

  return (

    <Flex className= {`text-3xl items-center font-bold gap-4 ${className}`}>
        <h2><p className='text-xs font-medium'>day</p>{time.days}:</h2>
        <h2><p className='text-xs font-medium'>hours</p>{time.hours}:</h2>
        <h2><p className='text-xs font-medium'>minutes</p>{time.minutes}:</h2>
        <h2><p className='text-xs font-medium'>seconds</p>{time.seconds}:</h2>
    </Flex>

  
  
  )
}

export default CountDown;
