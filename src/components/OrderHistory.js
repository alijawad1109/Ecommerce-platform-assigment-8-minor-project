// components/OrderHistory.js
import React from "react";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const orders = useSelector((state) => state.orders.history); // Get orders from the state

  return (
    <div className="order-history max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p className="text-center text-lg">No orders have been placed yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-item border p-4 mb-2 rounded-lg">
            <h3 className="font-semibold">Order ID: {order.id}</h3>
            <p>Total: ${order.total.toFixed(2)}</p>
            <h4 className="mt-2">Items:</h4>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.title} (Quantity: {item.quantity}) - $
                  {item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
