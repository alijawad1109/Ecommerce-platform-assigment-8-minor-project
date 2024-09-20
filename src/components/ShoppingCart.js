import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice"; // Import the remove action
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Dispatch the remove action
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout"); // Redirect to the checkout route
  };

  return (
    <div className="shopping-cart max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item border p-4 mb-2 rounded-lg flex items-center"
            >
              <img
                src={item.image}
                className="w-20 h-20 object-cover rounded-md mr-4"
                alt={item.title}
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">Price: ${item.price}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)} // Call handleRemove with the item's id
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={handleProceedToCheckout} // Call function on click
            className="btn mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
