
import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "../components";

const ProfileLayout = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen fixed w-full flex flex-col md:flex-row bg-amber-200">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block w-64 bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-8">My Account</h2>
          <NavMenu layout="vertical" />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8">
          {/* Mobile Tabs */}
          <div className="md:hidden mb-6">
            <NavMenu layout="tabs" />
          </div>

          {/* Outlet for child routes */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default ProfileLayout;

const NavMenu = ({ layout }) => {
  if (layout === "tabs") {
    // Mobile Tabs
    return (
      <nav className="flex justify-between bg-white rounded-lg shadow overflow-hidden">
        <NavItem to="/profile" label="Overview" tab />
        <NavItem to="/profile/orders" label="Orders" tab />
        <NavItem to="/profile/addresses" label="Addresses" tab />
        {/* <NavItem to="/profile/settings" label="Settings" tab /> */}
      </nav>
    );
  }

  // Desktop Vertical Menu
  return (
    <nav className="space-y-4">
      <NavItem to="/profile" label="Overview" />
      <NavItem to="/profile/orders" label="Orders" />
      <NavItem to="/profile/addresses" label="Addresses" />
      {/* <NavItem to="/profile/settings" label="Settings" /> */}
    </nav>
  );
};

const NavItem = ({ to, label, tab }) => (
  <NavLink
    to={to}
    end={to === "/profile"}
    className={({ isActive }) =>
      tab
        ? `flex-1 text-center px-3 py-2 text-sm font-medium ${
            isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
          }`
        : `block p-2 rounded-lg ${
            isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
          }`
    }
  >
    {label}
  </NavLink>
);
