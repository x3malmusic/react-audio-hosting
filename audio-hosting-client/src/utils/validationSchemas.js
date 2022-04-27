import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .required("Enter password")
})

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .required("Enter password")
    .length(6, "Password should be at least 6 characters long"),
  repeatPassword: Yup.string()
    .required("Repeat password")
    .oneOf([Yup.ref("password"), null], "Passwords should match")
})