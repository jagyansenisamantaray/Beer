import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fullname: Yup.string().min(2).max(25).required("Please enter your name"),
  dob: Yup.date().required("Please enter your dob"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.number().min(6).required("Please enter your password")
  
});