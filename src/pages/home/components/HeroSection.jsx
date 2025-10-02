import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative bg-blue-50 rounded-2xl p-8 md:p-16 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Fuel Your Fitness, <span className="text-amber-600">Naturally</span>
      </h1>
      <p className="max-w-xl mx-auto text-gray-600 mb-6">
        Shop supplements, vitamins, and proteins crafted to support your health journey.
      </p>
      <button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700"   >
        Shop Now
      </button>
    </section>
  )
}

export default HeroSection