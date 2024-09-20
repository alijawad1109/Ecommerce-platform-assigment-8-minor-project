import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.allProducts.find((prod) => prod.id === parseInt(id))
  );

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id, product]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success(`Product has been added to your cart!`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
    }
  };

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <ToastContainer />
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-6">
        <div className="md:w-1/2">
          <img
            src={product.image}
            className="w-[80%] h-[80%] rounded-lg"
            alt={product.title}
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-green-600 mb-4">
            ${product.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
