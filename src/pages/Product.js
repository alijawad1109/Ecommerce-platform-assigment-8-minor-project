// ProductListing.js
import React from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="product-listing grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
