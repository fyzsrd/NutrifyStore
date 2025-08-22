import { useState } from "react";
import { Star, Heart, Truck, RefreshCw, ShieldCheck } from "lucide-react";

const ProductDetail = () => {
  const [selectedWeight, setSelectedWeight] = useState("1kg");

  const weights = [
    { label: "1kg", price: 1889, discount: 0 },
    { label: "2kg", price: 3449, discount: 11 },
    { label: "2kg (Pack of 2)", price: 6883, discount: 25 },
  ];

  return (
    <div className="bg-white">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left - Product Images */}
        <div className="flex flex-col items-center md:sticky md:top-20 self-start">
          <img
            src="https://nutrabay.com/cdn/shop/products/AvatarAlphaWhey.png"
            alt="Avatar Alpha Whey"
            className="w-80 h-80 object-contain"
          />
          <div className="flex gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-16 border rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-purple-500"
              >
                <img
                  src="https://nutrabay.com/cdn/shop/products/AvatarAlphaWhey.png"
                  alt="thumb"
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <h1 className="text-2xl font-bold">
            Avatar Alpha Whey 1kg | Belgian Chocolate | 33 Servings | 20g Protein
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-500" /> 4.6
            </span>
            <span className="text-gray-600">(224 reviews)</span>
          </div>

          <p className="text-2xl font-semibold mt-4">₹1889</p>
          <p className="text-gray-500 text-sm">Inclusive of all taxes</p>

          {/* Flavour Selector */}
          <div className="mt-4">
            <h3 className="font-semibold">Select Flavour:</h3>
            <button className="mt-2 border px-4 py-2 rounded-lg bg-purple-100 text-purple-700">
              Belgian Chocolate
            </button>
          </div>

          {/* Weight Selector */}
          <div className="mt-4">
            <h3 className="font-semibold">Select Weight:</h3>
            <div className="flex gap-3 mt-2 flex-wrap">
              {weights.map((w) => (
                <button
                  key={w.label}
                  onClick={() => setSelectedWeight(w.label)}
                  className={`border px-4 py-2 rounded-lg ${
                    selectedWeight === w.label
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {w.label} <br />
                  ₹{w.price}{" "}
                  {w.discount > 0 && (
                    <span className="text-green-600 text-sm">({w.discount}% OFF)</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700">
              Add to Cart
            </button>
            <button className="flex-1 py-3 rounded-xl border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50">
              Buy Now
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-sm">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
              <p>100% Authentic</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="w-6 h-6 text-purple-600" />
              <p>Free Shipping</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <RefreshCw className="w-6 h-6 text-purple-600" />
              <p>Easy Returns</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="w-6 h-6 text-purple-600" />
              <p>2 Lakh+ Customers</p>
            </div>
          </div>

          {/* Long Product Info */}
          <div className="mt-6 space-y-4">
            {Array(8).fill(
              "Mix 1 scoop with 180-200ml water/milk post 30-45 mins of your exercise. Avatar Alpha Whey provides 20g protein per serving to support muscle recovery and growth."
            ).map((text, i) => (
              <p key={i} className="text-gray-600">{text}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto p-4 mt-10">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-600">
          Mix 1 scoop with 180-200ml water/milk post 30-45 mins of your exercise. 
          Avatar Alpha Whey provides 20g protein per serving to support muscle recovery 
          and growth.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
