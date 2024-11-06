import React from "react";
import { useField } from "formik";

const InputValidation = ({ className, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="text-xs  ">{label}</label>
      <div className="flex justify-start flex-col w-full text-start  ">
        <input
          {...field}
          {...props}
          className={`${
            meta.touched && meta.error
              ? " outline-red-600"
              : "outline-green-600"
          } w-full  rounded-md p-1 border-gray-400 border ${className} p-2   `}
        />
        {meta.touched && meta.error && (
          <div className="text-red-600  text-xs">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default InputValidation;
