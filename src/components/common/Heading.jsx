import React from 'react'

const Heading = ({children, vari, className = "" }) => {
    const variants = {
        primary: " text-off-black",
        secondary: " text-off-gray-100",
        
        
    }
  return (

    <h2 className={` font-medium text-custom-28 sm:text-custom-32 md:text-custom-34 leading-130 ${variants[vari]} ${className}`}> {children} </h2>

  )
}

export default Heading