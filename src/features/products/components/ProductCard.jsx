import React from "react";

export const ProductCard = () => {
  let product={
    "_id": "68de5b0a72576ed3251628c6",
    "name": "GNC Pro Performance 100% Whey Protein ",
    "price": 2000,
    "mrp": 2500,
    "flavor": "chocolate",
    "weight": 2,
    "weightType": "kg",
    "defaultThumbnail": [
        "https://res.cloudinary.com/dzdnecqmf/image/upload/v1759402836/variants/yhvsowbdhxzn7niplebj.webp"
    ],
    "sku": "GNC-CP-2KG-CHOC"
}
 
  

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
    <div className="text-gray-100 min-w-[168px] max-w-[168px] sm:min-w-[224px] sm:max-w-[224px] relative bg-white border-2 p-2 flex flex-col justify-between gap-2 rounded-lg">
  {/* Image */}
  <div className="flex items-center justify-center border border-[#D6D9DD] p-2 sm:p-3 relative rounded-xl min-h-[168px] sm:min-h-[224px]">
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
  <div className="flex flex-col mt-2">
    <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
      {product.name}
    </h3>
    {(flavor || weight) && (
      <p className="text-xs text-gray-500 mt-0.5">
        {flavor ? flavor : ""}{flavor && weight ? " | " : ""}{weight ? `${weight} ${weightType}` : ""}
      </p>
    )}

    {/* Price Section */}
    <div className="mt-1 flex items-center space-x-2">
      <span className="text-base font-bold text-gray-900">₹{price}</span>
      {mrp && (
        <>
          <span className="line-through text-xs text-gray-400">₹{mrp}</span>
          {discount > 0 && (
            <span className="text-green-600 text-xs font-medium">{discount}% OFF</span>
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
