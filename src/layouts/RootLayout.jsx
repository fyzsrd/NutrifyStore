
import { Outlet } from "react-router-dom";


import { useState } from "react";
import CartDrawer from '../features/cart/CartPage'

import { Navbar, Footer } from "../components/index";

const RootLayout = () => {

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
     {/* <div className=" overflow-hidden"> */}
      {/* Navbar */}
      <Navbar cartCount={3} onCartClick={() => setCartOpen(true)} />
        
         <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={[
       
      

      ]} />

      {/* Page content */}
      <main className="p-6 ">
        <Outlet />
      </main>

      {/* Sidebar Cart */}


      {/* Footer */}
      <Footer />
    {/* // </div> */}
    </>
  );
};

export default RootLayout;
