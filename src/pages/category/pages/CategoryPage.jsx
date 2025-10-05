import React from 'react'
import banner from '../../../assets/Banners/Container.png'
import { ProductCard } from '../../../features/products/components/ProductCard'
import { Link, useParams } from 'react-router-dom'
import { useFetchProductsByCategoryQuery } from '../api/categoryPageApi'
import { ProductCardShimmer } from '../../../features/products/components/skeletons/ProductCardShimmer'
import NoDataFoundBox from '../../../components/common/NoDataFoundBox'



export const CategoryPage = () => {
    const { id } = useParams();
    console.log("category: ", id)

    const { data: productsByCategory, isLoading: loadingProducts } = useFetchProductsByCategoryQuery(id);

    console.log(loadingProducts)
    console.log(productsByCategory)




    return (
        <div className="max-w-7xl mx-auto px-1 py-0.5  sm:px-0.5 ">
            <div className="w-full h-30 overflow-hidden  mb-3.5 sm:h-64 md:h-80 lg:h-96 " >
                <img className=' h-full object-fill' src={banner} alt="banner" />
            </div>



            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">

                <h1 className="text-2xl font-bold capitalize">Supplements</h1>
                <h1 className="text-2xl font-bold capitalize">Supplements</h1>

                {/* Sort Dropdown */}
                <select className="mt-2 sm:mt-0 border rounded-xl px-3 py-2">
                    <option>Sort by</option>
                    <option>Price: Low → High</option>
                    <option>Price: High → Low</option>
                </select>
            </div>

            {/* Grid of Products */}
            <section className="">
                <h2 className="text-xl font-semibold mb-6">Featured Products</h2>
                
                    

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-1 ">
                        {/* <div className='flex gap-4 overflow-x-auto '> */}

                        {loadingProducts || !productsByCategory ? (
                            // 👇 Show shimmer while loading or before data is defined
                            <>
                                <ProductCardShimmer />
                                <ProductCardShimmer />
                                <ProductCardShimmer />
                            </>
                        ) : productsByCategory?.data?.length > 0 ? (
                            // 👇 Show products when data exists
                            productsByCategory.data.map((p) => (
                                <ProductCard key={p._id} product={p} />
                            ))
                        ) : (
                            // 👇 Show "no data" only after data load is complete
                            <div className="col-span-full flex justify-center items-center min-h-[200px]">
                                <NoDataFoundBox />
                            </div>
                        )}

                    </div>
               



            </section>

            {/* Pagination  */}
            <div className="flex justify-center mt-8 space-x-2">
                <button className="px-4 py-0.5 rounded-lg border hover:bg-gray-100">1</button>
                <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">2</button>
                <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">Next →</button>
            </div>
        </div>
    )
}
