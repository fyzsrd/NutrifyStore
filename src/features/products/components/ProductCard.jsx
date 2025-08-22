import React from "react";

export const ProductCard = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow hover:shadow-md transition border p-3 flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col sm:w-64">
      
      {/* Mobile: Image left, Details right */}
      <div className="flex sm:flex-col gap-3">
        
        {/* Product Image */}
        <div className="relative w-28 h-28 sm:w-full sm:h-48 flex-shrink-0">
          <img
            src="https://m.media-amazon.com/images/I/71zlbAQ+ajL._SL1500_.jpg"
            alt="Product"
            className="w-full h-full object-contain bg-gray-50 rounded-lg"
          />
          {/* Discount Badge */}
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
            22% OFF
          </span>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between flex-1">
          {/* Rating */}
          {/* <div className="flex items-center text-xs mb-1">
            <span className="bg-green-600 text-white px-1.5 py-0.5 rounded-md flex items-center">
              4.8 ★
            </span>
            <span className="ml-2 text-gray-600">(1076)</span>
          </div> */}

          {/* Title */}
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
            ALPINO High Protein Super Oats Chocolate 1kg – Rolled Oats, ...
          </h3>

          {/* Subtext */}
          <p className="text-xs text-gray-500">Chocolate | 1kg</p>

          {/* Price Section */}
          <div className="mt-1 flex items-center space-x-2">
            <span className="text-base font-bold text-gray-900">₹494</span>
            <span className="line-through text-xs text-gray-400">₹549</span>
            <span className="text-green-600 text-xs font-medium">10% OFF</span>
          </div>

          {/* Delivery */}
          {/* <p className="text-xs text-gray-500">
            Get it by <span className="font-semibold">Fri, Aug 1</span>
          </p> */}

          {/* Button */}
          <button className="mt-2 w-full bg-indigo-600 text-white text-sm py-2 rounded-lg hover:bg-indigo-700">
            2 Options ▼
          </button>
        </div>
      </div>
    </div>
  );
};
