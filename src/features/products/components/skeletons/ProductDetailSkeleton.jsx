import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <div className="bg-white animate-pulse">
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Product Images Skeleton */}
        <div className="flex flex-col items-center">
          <div className="w-80 h-80 bg-gray-200 rounded-lg" />
          <div className="flex gap-2 mt-4 flex-wrap">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-gray-200 rounded-lg"
                ></div>
              ))}
          </div>
        </div>

        {/* Right - Info Skeleton */}
        <div className="flex flex-col space-y-4">
          <div className="w-48 h-6 bg-gray-200 rounded"></div>
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
          <div className="w-24 h-8 bg-gray-200 rounded"></div>

          {/* Variant Selector */}
          <div className="space-y-2 mt-4">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="flex gap-3 flex-wrap">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-24 h-10 bg-gray-200 rounded-lg"></div>
                ))}
            </div>
          </div>

          {/* Weight Selector */}
          <div className="space-y-2 mt-4">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="flex gap-3 flex-wrap">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-24 h-12 bg-gray-200 rounded-lg"></div>
                ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <div className="flex-1 h-12 bg-gray-200 rounded-xl"></div>
            <div className="flex-1 h-12 bg-gray-200 rounded-xl"></div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-sm">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mb-2"></div>
                  <div className="w-20 h-3 bg-gray-200 rounded"></div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Tabs Section Skeleton */}
      <div className="max-w-7xl mx-auto p-4 mt-10 space-y-2">
        <div className="w-40 h-6 bg-gray-200 rounded"></div>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="w-full h-4 bg-gray-200 rounded"></div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
