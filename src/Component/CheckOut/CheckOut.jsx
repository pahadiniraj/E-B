import React from "react";
import TextType from "../CustomInputs/InputValidation";
import { Formik, Form } from "formik";
import InputValidation from "../CustomInputs/InputValidation";

const CheckOut = () => {
  return (
    <div>
      <div className=" container mx-auto px-5 flex w-full ">
        <div className="w-3/5 ">
          <h1>Billing Information</h1>
          <Formik
            initialValues={{
              name: "",
              price: 0,
              quantity: 0,
              weight: 0,
              inStock: true,
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="flex gap-3">
                  <InputValidation
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Enter your Name"
                    className="w-2/3 p-2"
                  />
                  <InputValidation
                    label="Middle Name"
                    name="middleName"
                    type="text"
                    placeholder="Enter your Name"
                    className="w-2/3 p-2"
                  />
                  <InputValidation
                    label="Last Name"
                    name="lastname"
                    type="text"
                    placeholder="Enter your Name"
                    className="w-2/3 "
                  />
                </div>
                <InputValidation
                  label="Street Address"
                  name="email"
                  type="text"
                  placeholder="Enter your Name"
                  className="w-2/3 "
                />
                <div className="flex w-full gap-3">
                  <TextType
                    label="Country / Region "
                    name="email"
                    placeholder="Enter your Name"
                    className="w-2/3 "
                  ></TextType>
                  <TextType
                    label="States "
                    name="email"
                    placeholder="Enter your Name"
                    className="w-2/3 "
                  ></TextType>
                  <TextType
                    label="Zip Code "
                    name="text"
                    placeholder="Enter your Name"
                    className="w-2/3 "
                  ></TextType>
                </div>
                <div className="flex  w-full bg-red-200  gap-3 ">
                  <div className=" w-2/4">
                    <TextType
                      label="Email"
                      name="email"
                      placeholder="Enter your Name"
                      className="w-full"
                    ></TextType>
                  </div>
                  <div className=" w-2/4">
                    <TextType
                      label="Phone"
                      name="email"
                      placeholder="Phone Number"
                      className=" w-full"
                    ></TextType>
                  </div>
                </div>
                <TextType
                  label="Phone"
                  name="email"
                  type="checkbox"
                  placeholder="Phone Number"
                  className=" w-full"
                ></TextType>

                {/* <button
                  type="submit"
                  className={`w-full bg-green-600 text-white p-1 rounded-md  ${
                    isSubmitting ? "bg-blue-200" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  Submit
                </button> */}
              </Form>
            )}
          </Formik>
        </div>
        <div className="w-2/5 bg-green-200">Hello</div>
      </div>
    </div>
  );
};

export default CheckOut;
