import { useEffect, useState } from "react";

const CartDrawer = ({ open, onClose, items = [] }) => {
  const [shouldRender, setShouldRender] = useState(open);
  const [animate, setAnimate] = useState(false);

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
      className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
        animate ? "opacity-100" : "opacity-0"
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
            items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border p-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.qty} × ₹{item.price}
                  </p>
                </div>
                <p className="font-semibold">₹{item.qty * item.price}</p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <button className="w-full rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
