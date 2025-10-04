import React from 'react'
import emptyBoxAnimation from '../../assets/animation/Empty Box.json'
import Lottie from 'lottie-react'

const NoDataFoundBox = () => {
  return (
    <div className=" flex flex-col items-center w-full justify-center">
                   <Lottie animationData={emptyBoxAnimation} loop={true}  className="w-48 h-48"/>
                   <h1 className="text-gray-700"> No available Data Found</h1>

                 </div>
  )
}

export default NoDataFoundBox