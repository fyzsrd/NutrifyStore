import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Menu, X } from "lucide-react"; // icons

const ProfileLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex bg-gray-50">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block w-64 bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-8">My Account</h2>
          <NavMenu onClick={() => setMobileOpen(false)} />
        </aside>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMobileOpen(false)}
        ></div>

        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">My Account</h2>
            <button onClick={() => setMobileOpen(false)}>
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <NavMenu onClick={() => setMobileOpen(false)} />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8">
          {/* Mobile menu button */}
          <button
            className="md:hidden mb-4 flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg shadow"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
            Menu
          </button>

          <Outlet /> {/* ✅ Child routes render here */}
        </main>
      </div>
    </>
  );
};

export default ProfileLayout;

const NavMenu = ({ onClick }) => (
  <nav className="space-y-4">
    <NavLink
      to="/profile"
      end
      onClick={onClick}
      className={({ isActive }) =>
        `block p-2 rounded-lg ${
          isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      Overview
    </NavLink>
    <NavLink
      to="/profile/orders"
      onClick={onClick}
      className={({ isActive }) =>
        `block p-2 rounded-lg ${
          isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      Orders
    </NavLink>
    <NavLink
      to="/profile/addresses"
      onClick={onClick}
      className={({ isActive }) =>
        `block p-2 rounded-lg ${
          isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      Addresses
    </NavLink>
    <NavLink
      to="/profile/settings"
      onClick={onClick}
      className={({ isActive }) =>
        `block p-2 rounded-lg ${
          isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      Settings
    </NavLink>
  </nav>
);
