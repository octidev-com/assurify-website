import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  emailAddress: yup.string().email("Please enter a valid email address").required("Email address is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?[0-9]\d{1,14}$/, "Please enter a valid phone number"),
  orderNote: yup.string(), // Optional field
});
