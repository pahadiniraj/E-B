import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const basicSchema = yup.object().shape({
  // name: yup.string().required(),
  email: yup.string().email("Enter Valid Email").required(),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "please create strong password" })
    .required("Required"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match")
  //   .required(),
});
