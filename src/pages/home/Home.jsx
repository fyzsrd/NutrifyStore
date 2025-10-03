import { Link } from "react-router-dom";
import { ProductCard } from "../../features/products/components/ProductCard";
import HeroSection from "./components/HeroSection";
import { useEffect, useState } from "react";
import CategorySection from "./components/CategorySection";
import { ProductCardShimmer } from "../../features/products/components/skeletons/ProductCardShimmer";
import { getFeaturedProduct } from "./api/HomeApi";
import emptyBoxAnimation from './assets/json/Empty Box.json';
import Lottie from "lottie-react";
import NoDataFoundBox from "../../components/common/NoDataFoundBox";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetchHomePageProducts()
  
  },[])
  const fetchHomePageProducts=async ()=>{
    try{
      setLoading(true)
      const res=await getFeaturedProduct()

      setProducts(res?.data?.data?.products)
      
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }


  // if (loading) return <p className="text-center">Loading...</p>;

  return (
    <>
      <div className="space-y-12">
        {/* Hero Section */}
        <HeroSection />


        {/* Categories */}
        {/* <Categories categories={categories} /> */}
        <CategorySection />





        {/* Featured girs*/}
        {/* <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Featured Products</h2> */}

          {/* Product Grid */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
             
          </div>
        </div> */}

        {/* Featured Products carousal */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Featured Products</h2>

          {/* Products container */}
          <div className="flex gap-4 overflow-x-auto ">
            {loading ? (
              <>
              <ProductCardShimmer />
              <ProductCardShimmer />
              <ProductCardShimmer />
              <ProductCardShimmer /></>
              ) :(
                <>
                {products.length > 0 
                ? (products.map((p)=>(<ProductCard key={p._id} product={p}/>))) 
                : (
                  <NoDataFoundBox />
                 
                
                )}
                
           
                </>
              )}
            
          </div>
        </div>


      </div>


    </>
  );
};

export default Home;
