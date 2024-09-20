import React from "react";
import { useSelector } from "react-redux";

const Step3 = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout-step">
      <h2 className="text-3xl font-semibold mb-6">Review Your Order</h2>
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border-b border-gray-300"
            >
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-lg font-semibold text-blue-600">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        {/* <button
          onClick={handlePlaceOrder}
          className="btn bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Place Order
        </button> */}
      </div>
    </div>
  );
};

export default Step3;
