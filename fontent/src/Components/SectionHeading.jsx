import React from 'react'

const SectionHeading = ({ title, heading }) => {
  return (
<div>
       <h5 className='text-primary font-semibold border-l-20 border-primary pl-4 mb-6 rounded-sm'>{title}</h5>
         <h2 className='text-4xl font-semibold'>{heading}</h2>
    </div>
  )
}

export default SectionHeading
