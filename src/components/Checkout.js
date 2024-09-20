// components/Checkout.js
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/slices/orderSlice";
import Step1 from "./checkout/Step1";
import Step2 from "./checkout/Step2";
import Step3 from "./checkout/Step3";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step === 3) {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const newOrder = {
        id: Date.now(),
        total: total,
        items: cartItems,
      };

      console.log("New Order being dispatched:", newOrder); // Log new order
      dispatch(addOrder(newOrder));
      toast.success("Order placed successfully!");

      setTimeout(() => {
        window.location.href = "/"; // Redirect to order history page
      }, 2000);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="checkout max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
        Checkout
      </h1>
      <div className="progress mb-4">
        <div className="flex justify-between">
          <span
            className={`step ${
              step >= 1 ? "active text-blue-600" : "text-gray-400"
            }`}
          >
            Step 1
          </span>
          <span
            className={`step ${
              step >= 2 ? "active text-blue-600" : "text-gray-400"
            }`}
          >
            Step 2
          </span>
          <span
            className={`step ${
              step >= 3 ? "active text-blue-600" : "text-gray-400"
            }`}
          >
            Step 3
          </span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded mt-1">
          <div
            className="progress-fill h-2 bg-blue-600 rounded"
            style={{ width: `${(step - 1) * 50}%` }}
          />
        </div>
      </div>
      <div className="step-content mb-6">
        {step === 1 && <Step1 nextStep={handleNextStep} />}
        {step === 2 && <Step2 nextStep={handleNextStep} />}
        {step === 3 && <Step3 />}
      </div>
      <div className="navigation mt-6 flex justify-between">
        {step > 1 && (
          <button
            className="btn-secondary bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition duration-200"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        )}
        <button
          className="btn-primary bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          onClick={handleNextStep}
        >
          {step === 3 ? "Complete Purchase" : "Next"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
