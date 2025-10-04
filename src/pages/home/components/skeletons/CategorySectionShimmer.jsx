import React from 'react'

const CategorySectionShimmer = () => {
  
  const shimmerArray = Array.from({ length: 6 });

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-6">Shop by Category</h2>

      <div className="flex space-x-4 overflow-x-auto">
        {shimmerArray.map((_, idx) => (
          <div 
            key={idx} 
            className="min-w-[120px] flex-shrink-0 p-4 bg-white rounded-2xl shadow animate-pulse"
          >
            <div className="h-20 w-20 mx-auto mb-2 bg-gray-200 rounded-full"></div>
            <div className="h-4 w-16 mx-auto bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorySectionShimmer
