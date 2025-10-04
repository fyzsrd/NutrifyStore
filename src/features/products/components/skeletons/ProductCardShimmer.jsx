import React from 'react'

export const ProductCardShimmer = () => {
  return (
    <div className="text-gray-100 min-w-[168px] max-w-[168px] sm:min-w-[224px] sm:max-w-[224px] relative bg-white border-2 p-2 flex flex-col justify-between gap-2 rounded-lg animate-pulse">
      {/* Image Skeleton */}
      <div className="flex items-center justify-center border border-[#D6D9DD] p-2 sm:p-3 relative rounded-xl min-h-[168px] sm:min-h-[224px]">
        <div className="w-full h-full bg-gray-200 rounded-lg"></div>
      </div>

      {/* Details Skeleton */}
      <div className="flex flex-col mt-2 gap-2">
        {/* Title */}
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        {/* Flavor/Weight */}
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>

        {/* Price Section */}
        <div className="flex items-center space-x-2 mt-1">
          <div className="h-4 bg-gray-200 rounded w-12"></div>
          <div className="h-3 bg-gray-200 rounded w-8"></div>
          <div className="h-3 bg-gray-200 rounded w-10"></div>
        </div>

        {/* Button */}
        <div className="mt-2 h-8 bg-gray-300 rounded-lg w-full"></div>
      </div>
    </div>
  )
}
