import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; // ✅ Import Redux hook
import logo from "../../assets/logo/nutrify-logo.png";
import axios from "axios";

const Navbar = ({ onCartClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Get cart items from Redux
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  const cart = useSelector((state) => state.cart.items);
  // console.log("Cart State:", cart);

  const onSearch = (e) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(q.trim())}`;
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/nutrify/categories/`)
      .then((res) => {
        if (res.data.success) {
          setCategories(res.data.categories || []);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <p className="text-center py-10">Loading...</p>;
  // }

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
              to="/profile"
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

              {/* ✅ Only show badge if cart has items */}
              {cartCount > 0 && (
                <span className="absolute bottom-7 right-0.5 min-w-5 flex items-center justify-center rounded-full bg-gray-900 px-1.5 text-xs font-medium text-white">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- Categories Row --- */}
      <nav className="bg-gray-50 border-t border-gray-200 scrollbar-hide overflow-x-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ul className="flex space-x-6">
            {categories.map((cat) => (
              <li key={cat._id} className="relative group">
                <NavLink
                  to={`/categories/${cat._id}`} // 👈 dynamic category route
                  className="block py-3 font-medium hover:text-blue-600 text-sm"
                >
                  {cat.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
