// components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-600 mt-1">${product.price}</p>
      <Link to={`/products/${product.id}`}>
        <button className="mt-3 bg-blue-500 text-white py-1 px-4 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
