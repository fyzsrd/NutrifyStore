import { Link } from "react-router-dom";
import { ProductCard } from "../../features/products/components/ProductCard";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import { ProductCardShimmer } from "../../features/products/components/skeletons/ProductCardShimmer";
import NoDataFoundBox from "../../components/common/NoDataFoundBox";
import { useGetFeaturedProductsQuery, useGetSubCategoriesQuery } from "./api/productHomeApi";
import CategorySectionShimmer from "./components/skeletons/CategorySectionShimmer";

const Home = () => {

  const { data: featuredProducts, isLoading: loadingProducts } = useGetFeaturedProductsQuery();
  const { data: categories, isLoading: loadingCategories } = useGetSubCategoriesQuery();

  
  // if (loading) return <p className="text-center">Loading...</p>;

  return (
    <>
      <div className="space-y-12">
        {/* Hero Section */}
        <HeroSection />


        {/* Categories */}
        {/* <Categories categories={categories} /> */}
        {loadingCategories 
        ? (<CategorySectionShimmer />) 
        : (
        <CategorySection CategorySectionData={categories?.categories}/>
        )}





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
            {loadingProducts ? (
              <>
                <ProductCardShimmer />
                <ProductCardShimmer />
                <ProductCardShimmer />
                <ProductCardShimmer />
              </>
            ) : (
              <>
                {featuredProducts?.data?.products?.length > 0 ? (
                  featuredProducts.data.products.map((p) => (
                    <ProductCard key={p._id} product={p} />
                  ))
                ) : (
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
