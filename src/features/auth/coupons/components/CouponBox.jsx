import React from "react";

const CouponBox = () => {
  return (
    <div className="border border-gray-300 rounded-md p-4 bg-gray-50 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">Coupons</h2>
        <button className="text-blue-600 text-sm hover:underline">
          View all
        </button>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="flex-1 border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition">
          Apply
        </button>
      </div>

      {/* Dummy coupon message */}
      <p className="text-sm text-green-600 mt-2">
        🎉 FIRSTORDER applied — E njoy FREE DELIVERY 
      </p>
    </div>
  );
};

export default CouponBox;
