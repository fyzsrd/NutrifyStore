import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/nutrify-logo.png";

const categories = [
  {
    name: "Supplements",
    to: "/c/supplements",
    children: [
      { name: "Pre Workout", to: "/c/supplements/preworkout" },
      { name: "Post Workout", to: "/c/supplements/postworkout" },
      { name: "BCAA", to: "/c/supplements/bcaa" },
    ],
  },
  {
    name: "Vitamins",
    to: "/c/vitamins",
    children: [
      { name: "Multivitamins", to: "/c/vitamins/multi" },
      { name: "Omega 3", to: "/c/vitamins/omega3" },
    ],
  },
  {
    name: "Protein",
    to: "/c/protein",
    children: [
      { name: "Whey", to: "/c/protein/whey" },
      { name: "Plant Based", to: "/c/protein/plant" },
    ],
  },
  { name: "Combos", to: "/c/combos" },
  { name: "Deals", to: "/deals" },
];

const Navbars = ({ onCartClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const onSearch = (e) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(q.trim())}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white backdrop-blur">
      {/* --- Top Nav --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-950 text-white">
                <img src={logo} alt="Nz" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                NutraLine
              </span>
            </Link>
          </div>

          {/* Search */}
          <form
            onSubmit={onSearch}
            className="hidden flex-1 md:block md:max-w-xl"
          >
            <div className="relative">
              <input
                className="w-full rounded-2xl border px-4 py-2.5 pr-10 outline-none focus:ring-2"
                placeholder="Search products, brands…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-xl px-3 py-1.5 hover:bg-gray-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </button>
            </div>
          </form>

          {/* Right: Account + Cart */}
          <div className="flex items-center gap-1">
            <NavLink
              to="/account"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-gray-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21a8 8 0 1 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="hidden sm:inline">Account</span>
            </NavLink>

            <div className="relative">
              <button
                onClick={onCartClick}
                className="relative inline-flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-gray-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6h15l-1.5 9h-12z" />
                  <path d="M6 6l-2-2" />
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="18" cy="20" r="1.5" />
                </svg>
              </button>
              <span className="absolute bottom-7 right-0.5 min-w-5 items-center justify-center rounded-full bg-gray-900 px-1.5 text-xs font-medium text-white">
                91
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Categories Row --- */}
      <nav className="bg-gray-50 border-t border-gray-200 scrollbar-hide overflow-x-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ul className="flex space-x-6">
            {categories.map((cat, idx) => (
              <li key={idx} className="relative group">
                <NavLink
                  to={cat.to}
                  className="block py-3 font-medium hover:text-blue-600"
                >
                  {cat.name}
                </NavLink>

                {/* Dropdown with group-hover */}
                {cat.children && (
                  <div className="absolute left-0 mt-1 w-48 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    {cat.children.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.to}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbars;
