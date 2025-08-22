import { Link } from "react-router-dom";
import CartDrawer from "../features/cart/CartPage";
import { ProductCard } from "../features/products/components/ProductCard";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-blue-50 rounded-2xl p-8 md:p-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Fuel Your Fitness, <span className="text-amber-600">Naturally</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Shop supplements, vitamins, and proteins crafted to support your health journey.
        </p>
        <Link
          to="/c/supplements"
          className="px-6 py-3 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700"
        >
          Shop Now
        </Link>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: "All Categories", to: "/category" },
            { name: "Vitamins", to: "/category/vitamins" },
            { name: "Protein", to: "/category/protein" },
            { name: "Combos", to: "/category/combos" },
            { name: "Deals", to: "/deals" },

          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="p-4 bg-white rounded-2xl shadow hover:shadow-md text-center"
            >
              <div className="h-20 w-20 mx-auto mb-2 bg-amber-200 rounded-full flex items-center justify-center">
                🥤
              </div>
              <p className="font-medium">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <CartDrawer />

      {/* Featured Products (placeholder) */}
  <section className="max-w-6xl mx-auto px-4">
  <h2 className="text-xl font-semibold mb-6">Featured Products</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <Link to={"product-deatil"} >
    <ProductCard />
    </Link>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    
  </div>
</section>
    </div>
  );
};

export default Home;
