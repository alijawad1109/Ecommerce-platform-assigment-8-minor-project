import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Step1 = ({ nextStep }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    zipCode: Yup.string().required("Zip Code is required"),
  });

  return (
    <div className="checkout-step">
      <h2 className="text-3xl font-semibold mb-6">Shipping Information</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          zipCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values); // You can store these values in Redux or pass them down
          nextStep();
        }}
      >
        {() => (
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <Field
                name="firstName"
                className="input-field mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Field
                name="lastName"
                className="input-field mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <Field
                name="address"
                className="input-field mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <Field
                name="city"
                className="input-field mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <Field
                name="zipCode"
                className="input-field mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="zipCode"
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

export default Step1;
