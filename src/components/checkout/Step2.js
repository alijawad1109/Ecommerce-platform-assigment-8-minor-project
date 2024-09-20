import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Step2 = ({ nextStep }) => {
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().required("Card Number is required"),
    expiryDate: Yup.string().required("Expiry Date is required"),
    cvc: Yup.string().required("CVC is required"),
  });

  return (
    <div className="checkout-step">
      <h2 className="text-3xl font-semibold mb-6">Payment Information</h2>
      <Formik
        initialValues={{
          cardNumber: "",
          expiryDate: "",
          cvc: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values); // Store or process the payment information
          nextStep();
        }}
      >
        {() => (
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <Field
                name="cardNumber"
                className="input-field mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="cardNumber"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date
              </label>
              <Field
                name="expiryDate"
                className="input-field mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="expiryDate"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <Field
                name="cvc"
                className="input-field mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="cvc"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="btn mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step2;
