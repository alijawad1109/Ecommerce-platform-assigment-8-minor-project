// components/LandingPage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";
import ProductCard from "./ProductCard";

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="landing-page">
      <header className=" text-black mt-10 py-4">
        <h1 className="text-center text-4xl font-bold">Welcome to Our Store</h1>
        <p className="text-center mt-2">
          Discover amazing products at unbeatable prices!
        </p>
      </header>
      <div className="max-w-6xl  mx-auto p-4">
        <h2 className="text-center text-3xl my-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full">No products available</p>
          )}
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4 mt-6">
        <p className="text-center">
          &copy; 2024 Your Aj Designs Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
