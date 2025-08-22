import React from 'react'
import banner from '../assets/Banners/Container.png'
import { ProductCard } from '../features/products/components/ProductCard'


export const CategoryPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-1  sm:px-0.5 ">
            <div className="w-full h-30 overflow-hidden  mb-3.5 sm:h-64 md:h-80 lg:h-96 " >
                <img className=' h-full object-fill' src={banner} alt="banner" srcset="" />
            </div>



            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">

                <h1 className="text-2xl font-bold capitalize">Supplements</h1>

                {/* Sort Dropdown */}
                <select className="mt-2 sm:mt-0 border rounded-xl px-3 py-2">
                    <option>Sort by</option>
                    <option>Price: Low → High</option>
                    <option>Price: High → Low</option>
                </select>
            </div>

            {/* Grid of Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {/* Product Card 1 */}
                <div className="p-4 bg-white rounded-2xl shadow hover:shadow-md transition">
                    <div className="h-40 bg-amber-100 rounded-lg mb-3" />
                    <h3 className="font-medium">Whey Protein</h3>
                    <p className="text-sm text-gray-500">₹999</p>
                    <button className="mt-2 w-full rounded-xl bg-amber-600 text-white py-2 hover:bg-amber-700">
                        Add to Cart
                    </button>
                </div>

                <ProductCard />

                {/* Product Card 2 */}
                <div className="p-4 bg-white rounded-2xl shadow hover:shadow-md transition">
                    <div className="h-40 bg-amber-100 rounded-lg mb-3" />
                    <h3 className="font-medium">BCAA</h3>
                    <p className="text-sm text-gray-500">₹599</p>
                    <button className="mt-2 w-full rounded-xl bg-amber-600 text-white py-2 hover:bg-amber-700">
                        Add to Cart
                    </button>
                </div>

                {/* Product Card 3 */}
                <div className="p-4 bg-white rounded-2xl shadow hover:shadow-md transition">
                    <div className="h-40 bg-amber-100 rounded-lg mb-3" />
                    <h3 className="font-medium">Pre Workout</h3>
                    <p className="text-sm text-gray-500">₹799</p>
                    <button className="mt-2 w-full rounded-xl bg-amber-600 text-white py-2 hover:bg-amber-700">
                        Add to Cart
                    </button>
                </div>

                {/* Product Card 4 */}
                <div className="p-4 bg-white rounded-2xl shadow hover:shadow-md transition">
                    <div className="h-40 bg-amber-100 rounded-lg mb-3" />
                    <h3 className="font-medium">Post Workout</h3>
                    <p className="text-sm text-gray-500">₹899</p>
                    <button className="mt-2 w-full rounded-xl bg-amber-600 text-white py-2 hover:bg-amber-700">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Pagination (optional) */}
            <div className="flex justify-center mt-8 space-x-2">
                <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">1</button>
                <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">2</button>
                <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">Next →</button>
            </div>
        </div>
    )
}
