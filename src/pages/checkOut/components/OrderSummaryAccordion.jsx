import React, { useState } from "react";
import { useInitiateOrderQuery } from '../api/orderApi'
// adjust path

const OrderSummaryAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Call the API
    const { data, isLoading, isError } = useInitiateOrderQuery(undefined, { refetchOnMountOrArgChange: true });

    if (isLoading) return <p>Loading order summary...</p>;
    if (isError) return <p>Failed to load order summary</p>;

    // Use API data
    const orderItems = data?.data?.orderItems || [];
    const removedItems = data?.data?.removedItems || [];
    const totalAmount = data?.data?.totalAmount || 0;

    
    return (
        <div className="border border-gray-300 rounded-md bg-gray-50 shadow-sm">
            {/* Top section with total always visible */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Grand Total</h2>
                <span className="text-xl font-bold text-green-600">₹{totalAmount}</span>
            </div>

            {/* Toggle button for accordion */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left"
            >
                <span className="text-lg font-semibold text-gray-800">Order Summary</span>
                <span className="text-blue-600 text-sm">{isOpen ? "Hide ▲" : "View ▼"}</span>
            </button>

            {/* Collapsible section */}
            {isOpen && (
                <div className="p-4 border-t border-gray-300 space-y-2">
                    {removedItems.length > 0 && (
                        <div className="text-red-600 text-sm mb-2">
                            Some items were removed due to insufficient stock:
                            <ul className="ml-4 list-disc">
                                {removedItems.map((item) => (
                                    <li key={item.variantId}>
                                        {item.productName} (Available: {item.availableStock})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {orderItems.map((item) => (
                        <div
                            key={item.variantId}
                            className="flex flex-col justify-between text-gray-700 text-sm border-b border-gray-200 py-2"
                        >
                            {/* Product name */}
                            <span className="font-medium text-gray-800">{item.productName}</span>

                            {/* Variant info */}
                            <span className="text-gray-600 text-xs">
                                Variant: {item.weight}
                                {item.weightType} {item.flavor && `- ${item.flavor}`}
                            </span>

                            {/* Quantity and subtotal */}
                            <div className="flex justify-between mt-1 text-gray-700">
                                <span>Qty: {item.quantity}</span>
                                <span>₹{item.subtotal}</span>
                            </div>
                        </div>
                    ))}

                    {/* Delivery info */}
                    <div className="flex justify-between text-gray-700 text-sm">
                        <span>Delivery</span>
                        <span>Free</span>
                    </div>

                    {/* Total */}
                    <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold text-gray-800">
                        <span>Total</span>
                        <span>₹{totalAmount}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderSummaryAccordion;
