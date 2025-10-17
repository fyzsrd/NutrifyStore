import React from 'react'

const CheckOutAddressModal = ({ addresses, onClose, onSelect }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-lg shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Select Delivery Address</h2>
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {addresses.map((addr) => (
            <div
              key={addr._id}
              onClick={() => onSelect(addr)}
              className="border rounded-md p-3 hover:border-blue-500 cursor-pointer"
            >
              <p className="font-semibold">
                {addr.firstName} {addr.lastName}
              </p>
              <p>{addr.addressLine}</p>
              <p>{addr.city}, {addr.state} - {addr.pincode}</p>
              <p>Phone: {addr.mobileNumber}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CheckOutAddressModal
