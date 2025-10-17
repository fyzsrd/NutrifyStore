// CartDrawer.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGuestItem, updateGuestQty } from "../../../store/slices/cartSlice";
import { useGetCartQuery, useRemoveItemFromCartMutation } from "../api/cartApi";
import CartItemBox from "./cartItemsBox";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ open, onClose }) => {
  const [shouldRender, setShouldRender] = useState(open);
  const [animate, setAnimate] = useState(false);
  const [loadingItemId, setLoadingItemId] = useState(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const navigate=useNavigate()

  const handleToCheckOut=()=>{
    navigate('/checkOut')

  }

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const guestItems = useSelector((state) => state.cart.items);

  const { data: userCart } = useGetCartQuery(undefined, { skip: !isAuthenticated });
  const [removeItemFromCart] = useRemoveItemFromCartMutation();

  const items = isAuthenticated ? userCart?.data?.items || [] : guestItems;

  // Remove item
  const handleRemove = async (_id) => {
    setLoadingItemId(_id);
    try {
      if (isAuthenticated) {
        await removeItemFromCart(_id).unwrap();
      } else {
        dispatch(removeGuestItem(_id));
      }
    } finally {
      setLoadingItemId(null);
    }
  };

  // Change quantity
  const handleQtyChange = async (_id, newQty) => {
    if (newQty < 1) return;

    setLoadingItemId(_id);
    try {
      if (!isAuthenticated) {
        dispatch(updateGuestQty({ _id, qty: newQty }));
      } else {
        // TODO: call your API to update authenticated cart item quantity
        // await updateCartQty({ _id, qty: newQty });
      }
    } finally {
      setLoadingItemId(null);
    }
  };

  // Drawer animation & body scroll lock
  useEffect(() => {
    if (open) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setAnimate(true));
    } else {
      setAnimate(false);
      document.body.style.overflow = "auto";
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  // Cleanup on unmount
  useEffect(() => {
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  if (!shouldRender) return null;

  const total = items.reduce(
    (sum, item) => sum + ((item.variantId?.price ?? item.price ?? 0) * item.quantity),
    0
  );

  const isAnyLoading = loadingItemId !== null || checkoutLoading;

  return (
    <div
      className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"}`}
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
            items.map((item) => {
              const variant = isAuthenticated ? item.variantId : item.selectedVariant;
              const idToUse = variant?._id ?? item._id;

              return (
                <CartItemBox
                  key={idToUse}
                  item={item}
                  variant={variant}
                  loadingItemId={loadingItemId}
                  checkoutLoading={checkoutLoading}
                  handleQtyChange={handleQtyChange}
                  handleRemove={handleRemove}
                  isAuthenticated={isAuthenticated}
                />
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-2">
          <p className="font-semibold text-lg">Total: ₹{total}</p>
          <button
          onClick={handleToCheckOut}
            disabled={isAnyLoading}
            className={`w-full rounded-xl px-4 py-2 text-white ${
              isAnyLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900 hover:bg-gray-800"
            }`}
          >
            {isAnyLoading ? "Processing..." : "Checkout"}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
