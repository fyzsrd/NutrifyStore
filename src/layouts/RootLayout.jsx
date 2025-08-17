
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const RootLayout = () => {


  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="p-6 bg-amber-50">
        <Outlet />
      </main>

      {/* Sidebar Cart */}


      {/* Footer */}
      <footer className="p-4 text-center text-gray-500">
        © {new Date().getFullYear()} Nutraline
      </footer>
    </div>
  );
};

export default RootLayout;
