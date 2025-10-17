import React, { useState } from "react";

const PaymentSelection = () => {
  const [selectedMethod, setSelectedMethod] = useState("razorpay");

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-gray-50 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Payment Method
      </h2>
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="razorpay"
            checked={selectedMethod === "razorpay"}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <span>💳 Pay Online (Razorpay)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={selectedMethod === "cod"}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <span>💵 Cash on Delivery (COD)</span>
        </label>
      </div>
    </div>
  );
};

export default PaymentSelection;
