import { Link } from "react-router-dom";
import CartDrawer from "../features/cart/CartPage";
import { ProductCard } from "../features/products/components/ProductCard";
import Categories from "../components/common/Categories";
import HeroSection from "../components/common/HeroSection";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/nutrify/home/"); // your backend endpoint
        setProducts(res.data.data.products);


      } catch (err) {
        console.error("Failed to fetch home data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeData();
  }, []);


  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection />


      {/* Categories */}
       <Categories categories={categories} />





      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product._id} to={`/product-detail/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Home;
