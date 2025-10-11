
import { useGetAddressesQuery } from "../api/profileApi";
import { useSelector } from "react-redux";

const Addresses = () => {


  const {
    data:addressData,
    isLoading,
    isError
  } = useGetAddressesQuery();



  return (
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded shadow flex flex-col h-[85vh]">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800">My Addresses</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Add Address
        </button>
      </div>

      {/* Scrollable content */}
      <div className="p-4 overflow-y-auto flex-1">
        {isLoading && <p className="text-gray-500">Loading addresses...</p>}
        {isError && <p className="text-red-500">Failed to load addresses.</p>}

        {addressData && addressData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addressData.map((a) => (
              <div
                key={a._id}
                className={`p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col justify-between`}
              >
                {/* Address Info */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {a.firstName} {a.lastName}
                  </h2>
                  <p className="text-gray-600">{a.addressLine}</p>
                  <p className="text-gray-600">
                    {a.city}, {a.state} - {a.pincode}
                  </p>
                  <p className="text-gray-600">Phone: {a.mobileNumber}</p>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-4 ">
                

                  {/* Default badge / Set default */}
                  {a.defaultAddress ? (
                    <span className="inline-block px-3 py-2 text-xs bg-blue-100 text-blue-800 font-semibold rounded">
                      Default
                    </span>
                  ) : (
                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition text-sm">
                      Set Default
                    </button>
                  )}

                    {/* Delete */}
                  <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !isLoading && (
            <p className="text-center text-gray-500 mt-6">No addresses found.</p>
          )
        )}
      </div>
    </div>
  );
};

export default Addresses;
