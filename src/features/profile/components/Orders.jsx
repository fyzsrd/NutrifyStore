import React from 'react'

 const Orders = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>

      <div className="space-y-6">
        {/* Order Card 1 */}
        <div className="border rounded-lg bg-white shadow-sm p-4">
          <div className="flex justify-between items-center border-b pb-3 mb-3">
            <div>
              <p className="text-sm text-gray-500">Order ID: <span className="font-medium">#ORD123456</span></p>
              <p className="text-sm text-gray-500">Placed on: <span className="font-medium">01 Sep 2025</span></p>
            </div>
            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
              Delivered
            </span>
          </div>

          {/* Item */}
          <div className="flex gap-4 items-center">
            <img
              src="https://via.placeholder.com/60"
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-medium">Dummy Product Name</p>
              <p className="text-sm text-gray-600">Qty: 1</p>
            </div>
            <p className="font-semibold">₹2,999</p>
          </div>

          <div className="flex justify-between items-center mt-4 border-t pt-3">
            <p className="font-semibold">Total: ₹2,999</p>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View Details
            </button>
          </div>
        </div>

        {/* Order Card 2 */}
        <div className="border rounded-lg bg-white shadow-sm p-4">
          <div className="flex justify-between items-center border-b pb-3 mb-3">
            <div>
              <p className="text-sm text-gray-500">Order ID: <span className="font-medium">#ORD123457</span></p>
              <p className="text-sm text-gray-500">Placed on: <span className="font-medium">25 Aug 2025</span></p>
            </div>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
              Shipped
            </span>
          </div>

          {/* Item */}
          <div className="flex gap-4 items-center">
            <img
              src="https://via.placeholder.com/60"
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-medium">Another Dummy Product</p>
              <p className="text-sm text-gray-600">Qty: 2</p>
            </div>
            <p className="font-semibold">₹4,999</p>
          </div>

          <div className="flex justify-between items-center mt-4 border-t pt-3">
            <p className="font-semibold">Total: ₹4,999</p>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders