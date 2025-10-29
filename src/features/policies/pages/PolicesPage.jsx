import React from "react";
import { Link, Outlet } from "react-router-dom";

const PolicesPage = () => {
  const links = [
    { name: "Terms & Conditions", path: "terms" },
    { name: "Cancellation & Refund", path: "cancellation-refund" },
    { name: "Shipping & Delivery", path: "shipping-delivery" },
    { name: "Contact Us", path: "contact-us" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <aside className="w-full md:w-1/4 border-r border-gray-200 p-4 bg-white">
        <h2 className="text-xl font-semibold mb-4">Our Policies</h2>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block p-2 rounded hover:bg-blue-100 text-gray-700"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default PolicesPage;
