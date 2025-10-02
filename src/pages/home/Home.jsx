import { Link } from "react-router-dom";
import { ProductCard } from "../../features/products/components/ProductCard";
import HeroSection from "./components/HeroSection";
import { useEffect, useState } from "react";
import CategorySection from "./components/CategorySection";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);


  // if (loading) return <p className="text-center">Loading...</p>;

  return (
    <>
      <div className="space-y-12">
        {/* Hero Section */}
        <HeroSection />


        {/* Categories */}
        {/* <Categories categories={categories} /> */}
        <CategorySection />





        {/* Featured Products */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Featured Products</h2>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        {/* Featured Products carousal */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Featured Products</h2>

          {/* Products container */}
          <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 md:grid-cols-4 sm:overflow-x-visible">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>


      </div>


    </>
  );
};

export default Home;
