import React from "react";

export const ProductCard = ({ product }) => {
  if (!product) return null;
  

  // Normalize data (fallbacks for different API shapes)
  const price = product.price ?? product.defaultPrice ?? 0;
  const mrp = product.mrp ?? product.defaultMrp ?? null;
  const images = product.defaultThumbnail ?? null
  const flavor = product.flavor ?? null;
  const weight = product.weight ?? null;
  const weightType = product.weightType ?? null;


  // Calculate discount
  const discount =
    mrp && price ? Math.round(((mrp - price) / mrp) * 100) : 0;

  return (
    <div className="w-full min-h-48 bg-white rounded-xl shadow hover:shadow-md transition border p-3 flex flex-col sm:w-64">
      {/* Image + Badge */}
      <div className="relative w-full min-h-48 h-48 flex-shrink-0">
        <img
          src={images || "/placeholder.png"}
          alt={product.name}
          className="w-full h-full object-contain bg-gray-50 rounded-lg"
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 mt-3">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Subtext (flavor + weight) */}
        {(flavor || weight) && (
          <p className="text-xs text-gray-500">
            {flavor ? flavor : ""}
            {flavor && weight ? " | " : ""}
            {weight ? `${weight} ${weightType}` : ""}
          </p>
        )}

        {/* Price Section */}
        <div className="mt-1 flex items-center space-x-2">
          <span className="text-base font-bold text-gray-900">₹{price}</span>
          {mrp && (
            <>
              <span className="line-through text-xs text-gray-400">
                ₹{mrp}
              </span>
              {discount > 0 && (
                <span className="text-green-600 text-xs font-medium">
                  {discount}% OFF
                </span>
              )}
            </>
          )}
        </div>

        {/* CTA Button */}
        <button className="mt-2 w-full bg-indigo-600 text-white text-sm py-2 rounded-lg hover:bg-indigo-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};
