// CartItemBox.jsx
import React from "react";

const CartItemBox = ({
  item,
  variant,
  loadingItemId,
  handleQtyChange,
  handleRemove,
  checkoutLoading,
}) => {
  const idToUse = variant?._id ?? item._id;
  const price = variant?.price ?? item.price ?? 0;

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 gap-4"
    >
      {/* Left - Image and Name */}
      <div className="flex items-center gap-4 w-full md:w-2/3">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg border p-1 bg-gray-50"
          src={variant?.images?.[0] ?? item.image ?? ""}
          alt={item.name ?? ""}
        />
        <div className="flex flex-col">
          <p className="font-medium text-gray-800">{variant?.productId?.name ?? variant?.name ?? item.name}</p>
          <div className="flex gap-2">
            <p className="text-sm text-gray-500">{variant?.flavor ?? ""}</p>
            <p className="text-sm text-gray-500">
              {variant?.weight ?? ""} {variant?.weightType ?? ""}
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-1 flex items-center">
            ₹{price} ×{" "}
            <input
              type="number"
              min="1"
              disabled={loadingItemId === idToUse || checkoutLoading}
              value={item.quantity}
              onChange={(e) => handleQtyChange(item._id, Number(e.target.value))}
              className={`w-16 text-center border rounded px-1 py-0.5 ml-2 focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                loadingItemId === idToUse || checkoutLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label={`Quantity for ${item.name}`}
            />
          </p>
        </div>
      </div>

      {/* Right - Total & Remove */}
      <div className="flex items-center gap-7 mt-2 md:mt-0">
        <p className="font-semibold text-gray-800 text-lg">₹ {price * item.quantity}</p>
        {loadingItemId === idToUse ? (
          <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
        ) : (
          <button
            onClick={() => handleRemove(idToUse)}
            disabled={checkoutLoading}
            className="text-red-500 hover:text-red-600 text-xl font-bold"
            aria-label={`Remove ${item.name} from cart`}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItemBox;
