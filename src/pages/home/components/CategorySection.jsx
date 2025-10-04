import React from 'react'
import { NavLink } from 'react-router-dom'
const CategorySection = ({ CategorySectionData }) => {

    return (
        <section className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-semibold mb-6">Shop by Category</h2>

            <div className="flex space-x-4 overflow-x-auto ">
                {/* Default All Categories option */}
                <div className='min-w-[120px] flex-shrink-0 p-4 bg-white rounded-2xl shadow hover:shadow-md text-center'>
                    <div className="h-20 w-20 mx-auto mb-2 bg-amber-200 rounded-full flex items-center justify-center">
                        🛒
                    </div>
                    <p className="font-medium">All Categories</p>
                </div>

                {/* </Link> */}

                {/* Dynamic categories */}

                {CategorySectionData?.length >0 ? (
                    CategorySectionData.map((c) => (
                    <NavLink key={c._id} to={`categories/${c._id}`}>
                        <div className='min-w-[120px] flex-shrink-0 p-4 bg-white rounded-2xl shadow hover:shadow-md text-center'>
                            <div className="h-20 w-20 mx-auto mb-2 bg-amber-200 rounded flex items-center justify-center">
                                <img
                                    src={c.thumbnail} alt={c.name}
                                    className='rounded'
                                />
                            </div>
                            <p className="font-medium">{c.name}</p>
                        </div>

                    </NavLink>


                ))
                ):(
                     <p className="text-gray-500 ">No categories found</p>
                )}

            </div>
        </section>
    )
}

export default CategorySection

