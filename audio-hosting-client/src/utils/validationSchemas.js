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
    .min(6, "Password should be at least 6 characters long"),
  repeatPassword: Yup.string()
    .required("Repeat password")
    .oneOf([Yup.ref("password"), null], "Passwords should match")
})

export const createPlaylistSchema = Yup.object().shape({
  name: Yup.string()
    .required("Enter the name")
    .min(3, "Playlist name should be at least 3 characters long"),
})