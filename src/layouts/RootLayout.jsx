
import { Outlet } from "react-router-dom";


import { useState } from "react";
import CartDrawer from '../features/cart/CartPage'

import { Navbar, Footer } from "../components/index";

const RootLayout = () => {

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar onCartClick={() => setCartOpen(true)} />

      {/* Cart Drawer */}
      <CartDrawer 
        open={cartOpen} 
        onClose={() => setCartOpen(false)} 
        items={[]} 
      />

      {/* Page content */}
      <main className="flex-1 p-3">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
