import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQty } from "../../../store/slices/cartSlice";

const CartDrawer = ({ open, onClose, }) => {
  const [shouldRender, setShouldRender] = useState(open);
  const [animate, setAnimate] = useState(false);

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items)

  // console.log(items)
  

  const handleRemove = (_id) => {
    dispatch(removeFromCart(_id))
  };

  const handleQtyChange = (_id, newQty) => {
    if (newQty < 1) return;
    dispatch(updateQty({ _id, qty: newQty }));
  };

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";

      // 👇 trigger animation after mount
      requestAnimationFrame(() => setAnimate(true));
    } else {
      document.body.style.overflow = "auto";
      setAnimate(false);

      // wait for animation to finish, then unmount
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`relative ml-auto h-screen w-full md:max-w-[50%] lg:max-w-[40%] bg-white shadow-2xl flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${animate ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            className="rounded-xl p-2 hover:bg-gray-100"
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 gap-4"
              >
                {/* Left - Image and Name */}
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg border p-1 bg-gray-50"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex flex-col">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <div className="flex gap-2">
                      <p className="text-sm text-gray-500 ">{item.selectedVariant.flavor}</p>
                     <p className="text-sm text-gray-500 ">{item.selectedVariant.weight} {" "} {item.selectedVariant.weightType}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      ₹{item.price} ×{" "}
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQtyChange(item._id, Number(e.target.value))
                        }
                        className="w-16 text-center border rounded px-1 py-0.5 ml-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                    </p>
                  </div>
                </div>

                {/* Right - Total & Remove */}
                <div className="flex items-center gap-7 mt-2 md:mt-0">
                  <p className="font-semibold text-gray-800 text-lg">
                    ₹ {item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-600 text-xl font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-2">
          <p className="font-semibold text-lg">
            Total: ₹{items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </p>
          <button className="w-full rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
