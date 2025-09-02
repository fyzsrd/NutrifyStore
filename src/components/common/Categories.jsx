import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/nutrify/categories/top`
      );
      
      
      setCategories(res.data.categories || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategories([]); // fallback to empty
    } finally {
      setLoading(false);
    }
  };

  fetchCategories();
}, []);


  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6">Shop by Category</h2>
        <p>Loading categories...</p>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-6">Shop by Category</h2>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {/* Default All Categories option */}
        <Link
          to="/categories/"
          className="min-w-[120px] flex-shrink-0 p-4 bg-white rounded-2xl shadow hover:shadow-md text-center"
        >
          <div className="h-20 w-20 mx-auto mb-2 bg-amber-200 rounded-full flex items-center justify-center">
            🛒
          </div>
          <p className="font-medium">All Categories</p>
        </Link>

        {/* Dynamic categories */}
        {categories.map((c) => (
          <Link
            key={c._id}
            to={`/categories/${c._id}`}
            className="min-w-[120px] flex-shrink-0 p-4 bg-white rounded-2xl shadow hover:shadow-md text-center"
          >
            <div className="h-20 w-20 mx-auto mb-2 bg-amber-200 rounded-full flex items-center justify-center">
              🥤
            </div>
            <p className="font-medium">{c.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
