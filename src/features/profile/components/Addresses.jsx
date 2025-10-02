import { useState } from "react";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]); // initially empty
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.street) return;

    setAddresses([...addresses, formData]);
    setFormData({ name: "", phone: "", street: "", city: "", state: "", zip: "" });
    setShowForm(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">My Addresses</h1>

      {/* If no addresses */}
      {addresses.length === 0 && !showForm && (
        <div className="text-center text-gray-600">
          <p>No addresses found.</p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Address
          </button>
        </div>
      )}

      {/* List of addresses */}
      {addresses.length > 0 && !showForm && (
        <div className="space-y-4">
          {addresses.map((addr, i) => (
            <div key={i} className="border p-4 rounded-lg shadow-sm bg-white">
              <p className="font-semibold">{addr.name} ({addr.phone})</p>
              <p>{addr.street}</p>
              <p>
                {addr.city}, {addr.state} {addr.zip}
              </p>
            </div>
          ))}

          <button
            onClick={() => setShowForm(true)}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            + Add Another Address
          </button>
        </div>
      )}

      {/* Address Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow p-6 rounded-lg max-w-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={formData.street}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Addresses;
