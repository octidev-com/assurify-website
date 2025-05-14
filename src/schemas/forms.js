import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  emailAddress: yup.string().email("Please enter a valid email address").required("Email address is required"),
  storeAddress: yup.string().required("Store address is required"),
});

export const contactUsSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  emailAddress: yup.string().email("Please enter a valid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});
