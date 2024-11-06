import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../Schema/Schema";

const SignIn = () => {
  const onSubmit = () => {
    console.log("Submitted");
  };

  const { errors, handleSubmit, touched, handleBlur, values, handleChange } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  console.log(errors);

  return (
    <div className="w-full bg-slate-50">
      <div className="container mx-auto px-28 flex justify-center items-center py-20">
        <div className="w-2/5 shadow-lg bg-white rounded-md flex flex-col gap-3 justify-center items-center p-3">
          <h3 className="text-2xl font-semibold">Sign in </h3>
          <form
            className="w-full flex flex-col gap-2 items-center p-5"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={`w-full p-2 rounded-md text-sm border  ${
                touched.email && errors.email
                  ? "  outline-red-600"
                  : "outline-green-600"
              }`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label htmlFor="password"></label>
            <input
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className={`w-full p-2 rounded-md text-sm border ${
                errors.password ? " outline-red-600" : "outline-green-600"
              }`}
            />
            <div className="flex  w-full justify-between">
              <div className="flex gap-1 text-sm p-2">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="flex items-center">
                <p className="text-sm">Forget Password</p>
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              className="bg-green-500 p-2 rounded-lg text-white w-full hover:bg-green-600  cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
