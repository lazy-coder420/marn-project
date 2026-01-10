import React from 'react'
import { useLocation } from 'react-router'


const BreadCrump = ({className}) => {
        
        let location = useLocation()
        let  locationPath = location.pathname.split("/")[1]

  return (
       <div className={`${className} flex gap-4` } >
        <h2>Home</h2>
        <h2>/</h2>
        <h2>{locationPath}</h2>
       </div>
  )
}

export default BreadCrump
