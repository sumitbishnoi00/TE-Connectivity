import React from 'react'

const Para = ({children, vari, className = "" }) => {
    const variants = {
        primary: " text-sm sm:text-base md:text-lg text-off-gray-100",
        secondary: " text-sm sm:text-base md:text-lg text-dark-gray-100",
        danger: " text-sm sm:text-base text-off-gray-100",
        ghost: " text-sm sm:text-base text-dark-gray-100",


    }
  return (

    <p className={` font-normal leading-160  ${variants[vari]} ${className} `}> {children} </p>

  )
}

export default Para