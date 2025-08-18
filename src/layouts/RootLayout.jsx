
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CartDrawer from '../features/cart/CartPage'
const RootLayout = () => {

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className=" overflow-hidden">
      {/* Navbar */}
      <Navbar cartCount={3} onCartClick={() => setCartOpen(true)} />
        
         <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={[
        { name: "Whey Protein", qty: 1, price: 999 },
        { name: "Vitamin C", qty: 2, price: 299 },
         { name: "Whey Protein", qty: 1, price: 999 },
        { name: "Vitamin C", qty: 2, price: 299 },
         { name: "Whey Protein", qty: 1, price: 999 },
        { name: "Vitamin C", qty: 2, price: 299 },
         { name: "Whey Protein", qty: 1, price: 999 },
        { name: "Vitamin C", qty: 2, price: 299 },
         { name: "Whey Protein", qty: 1, price: 999 },
        { name: "Vitamin C", qty: 2, price: 299 },
         { name: "Whey Protein", qty: 1, price: 999 },
        { name: "Vitamin C", qty: 2, price: 299 },
         { name: "Whey Protein", qty: 1, price: 999 },
        { name: "Vitamin C", qty: 2, price: 299 },

      ]} />

      {/* Page content */}
      <main className="p-6 ">
        <Outlet />
      </main>

      {/* Sidebar Cart */}


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
