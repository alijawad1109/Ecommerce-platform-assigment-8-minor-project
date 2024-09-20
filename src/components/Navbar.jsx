import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          MyStore
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/products" className="text-white hover:underline">
            Products
          </Link>
          <Link to="/cart" className="text-white hover:underline">
            Cart
          </Link>
          <Link to="/checkout" className="text-white hover:underline">
            Checkout
          </Link>
          {/* <Link to="/orders" className="text-white hover:underline">
            Order History
          </Link>
          <Link to="/admin" className="text-white hover:underline">
            Admin
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
