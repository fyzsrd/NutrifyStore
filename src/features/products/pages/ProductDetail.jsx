import { useEffect, useState } from "react";
import { Star, Heart, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import { useGetFullProductDetailsQuery } from "../api/productsApi";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [mainImage, setMainImage] = useState(null)
  const { data: product, isLoading: productDetailsLoading } = useGetFullProductDetailsQuery(id)

  useEffect(() => {
    if (product && product.defaultVariantId) {
      const defaultVariant = product.variants.find(
        (v) => v._id === product.defaultVariantId
      );
      setSelectedVariant(defaultVariant);
      setMainImage(defaultVariant?.images?.[0] || product.images?.[0]);
    } else if (product && product.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);




  if (productDetailsLoading) return <p className="text-center py-10">Loading...</p>;
  if (!product) return <p className="text-center py-10">Product not found</p>;

  // ✅ Add to cart handler
  const handleAddToCart = () => {
    if (!selectedVariant) return;

    dispatch(
      addToCart({
        _id: selectedVariant._id,
        name: product.name,
        price: selectedVariant.price,
        image: selectedVariant.images?.[0] || product.images?.[0],
        quantity: 1, // default 1
      })
    );
  };

  return (
    <div className="bg-white">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Product Images */}
        <div className="flex flex-col items-center md:sticky md:top-20 self-start">
          <img
            src={mainImage}
            alt={product.name}
            className="w-80 h-80 object-contain"
          />

          <div className="flex gap-2 mt-4 flex-wrap">
            {/* Variant images */}
            {selectedVariant?.images?.map((img, i) => (
              <div
                key={i}
                className="w-16 h-16 border rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-purple-500"
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt="thumb" className="w-12 h-12 object-contain" />
              </div>
            ))}

            {/* Product images */}
            {product.images?.map((img, i) =>
              !selectedVariant?.images?.includes(img) ? ( // to avoid duplicates
                <div
                  key={i}
                  className="w-16 h-16 border rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-purple-500"
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt="thumb" className="w-12 h-12 object-contain" />
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <hr className="border border-gray-300 rounded-full my-4 shadow-sm" />
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-500" /> Trusted
            </span>

          </div>

          <hr className="border-t-1 border-gray-300 rounded-full my-4 shadow-sm" />

          <p className="text-2xl font-semibold mt-4">
            ₹{selectedVariant?.price || product.price}
          </p>
          <p className="text-gray-500 text-sm">Inclusive of all taxes</p>

          {/* Flavour Selector */}
          {product.variants?.some((v) => v.flavor) && (
            <div className="mt-4">
              <h3 className="font-semibold">Select Flavour:</h3>
              <div className="flex gap-3 mt-2 flex-wrap">
                {[...new Set(product.variants.map((v) => v.flavor))].map(
                  (flavor) => (
                    <button
                      key={flavor}
                      onClick={() => {
                        const variant = product.variants.find(
                          (v) => v.flavor === flavor
                        );
                        setSelectedVariant(variant);
                      }}
                      className={`border cursor-pointer px-4 py-2 rounded-lg ${selectedVariant?.flavor === flavor
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700"
                        }`}
                    >
                      {flavor}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Weight Selector */}
          <div className="mt-4">
            <h3 className="font-semibold">Select Weight:</h3>
            <div className="flex gap-3 mt-2 flex-wrap">
              {product.variants?.map((variant) => (
                <button
                  key={variant._id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`border cursor-pointer px-4 py-2 rounded-lg ${selectedVariant?._id === variant._id
                    ? "border-purple-600 border-2"
                    : "bg-gray-100 text-gray-700"
                    }`}
                >
                  {variant.weight}
                  {variant.weightType} <br />
                  ₹{variant.price}{" "}
                  {variant.mrp > variant.price && (
                    <span className={`text-green-600 font-bold text-sm `}>
                      (
                      {Math.round(
                        ((variant.mrp - variant.price) / variant.mrp) * 100
                      )}
                      % OFF)
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-3 cursor-pointer rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700"
            >
              Add to Cart
            </button>
            <button className="flex-1 py-3  cursor-pointer rounded-xl border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50">
              Buy Now
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-sm">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
              <p>100% Authentic</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="w-6 h-6 text-purple-600" />
              <p>Free Shipping</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <RefreshCw className="w-6 h-6 text-purple-600" />
              <p>Easy Returns</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="w-6 h-6 text-purple-600" />
              <p>2 Lakh+ Customers</p>
            </div>
          </div>

          {/* Long Product Info */}
          <div className="mt-6 space-y-4">
            <hr className="border-t-1 border-gray-300 rounded-full my-4 shadow-sm" />
            <p className="text-gray-600">{product.description}</p>
            {product.howtoUse && (
              <>
              <hr className="border-t-1 border-gray-300 rounded-full my-4 shadow-sm" />
                <p className="text-gray-600">
                  <strong>How to use:</strong> {product.howtoUse}
                </p></>
            )}

            {product.countryInfo && (
              <>
                <hr className="border-t-1 border-gray-300 rounded-full my-4 shadow-sm" />
                <p className="text-gray-600">
                  <strong>Country:</strong> {product.countryInfo}
                </p>
              </>
            )}
            {product.manufactureInfo && (
              <p className="text-gray-600">
                <strong>Manufacturer:</strong> {product.manufactureInfo}
              </p>
            )}
            {product.importerInfo && (
              <p className="text-gray-600">
                <strong>Importer:</strong> {product.importerInfo}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto p-4 mt-10">
        <hr className="border-t-1 border-gray-300 rounded-full my-4 shadow-sm" />
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
