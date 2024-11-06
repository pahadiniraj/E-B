import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerm: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerm: false,
    });
  };

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChecktChange = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <div className="bg-slate-50 w-full">
      <div className=" container mx-auto px-32 ">
        <div className=" flex justify-center items-center h-[531px]">
          <div className="bg-white shadow-md flex flex-col items-center w-2/5 gap-3 px-4  py-7 rounded-md border ">
            <h3 className="text-2xl font-semibold">Create Account</h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-full items-center p-2"
            >
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-2 rounded-md text-sm border"
              />
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full p-2 rounded-md text-sm border"
              />
              <input
                type="Password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full p-2 rounded-md text-sm border"
              />
              <input
                type="submit"
                value="Submit"
                className="bg-green-500 p-2 rounded-lg text-white w-full hover:bg-green-600  cursor-pointer"
              />
              <div className="flex  w-full justify-between">
                <div className="flex gap-1 text-sm p-2">
                  <input
                    type="checkbox"
                    id="acceptTerm"
                    onChange={handleChecktChange}
                    name="acceptTerm"
                    checked={formData.acceptTerm}
                  />
                  <label htmlFor="acceptTerm">
                    Accept all terms & Conditions
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
