import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const dispatch = useDispatch();
  const {
    allProducts: products,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p className="text-center">Loading products...</p>;
  }

  if (status === "failed") {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="product-listing grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto my-20 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center">No products available.</p>
      )}
    </div>
  );
};

export default ProductListing;
