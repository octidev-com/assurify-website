import { PaymentElement, useCheckout } from "@stripe/react-stripe-js";
import { useFormik } from "formik";
import { checkoutSchema } from "../../schemas/forms";
import { useState } from "react";

// EmailInput component
const EmailInput = ({ email, setEmail, setEmailError }) => {
  const checkout = useCheckout();

  const handleBlur = () => {
    checkout.updateEmail(email).then((result) => {
      if (result.error) {
        setEmailError(result.error);
      }
    });
  };

  const handleEmailChange = (e) => {
    setEmailError(null);
    setEmail(e.target.value);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleBlur}
        className={`w-full px-4 h-[48px] rounded-2xl mt-2 border opacity-[0.6] focus:outline-none`}
      />
    </div>
  );
};

// PayButton component
const PayButton = ({ loading }) => {
  return (
    <button type="submit" className="btn-primary-green-full disabled:cursor-not-allowed">
      {loading ? "Loading..." : "Pay Now"}
    </button>
  );
};

// Initial values for the form
const initialValues = {
  firstName: "",
  lastName: "",
  // country: "",
  city: "",
  address: "",
  emailAddress: "",
  phoneNumber: "",
  orderNote: "",
};

const CheckoutForm = () => {
  // const { confirm, total, updateEmail } = useCheckout();
  const checkout = useCheckout();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const productDetails = [
    { title: "Assurify Lifetime Deal * 1", price: checkout.total.total.amount },
    { title: "Subtotal", price: checkout.total.total.amount },
    { title: "Shipping", price: 0 },
  ];

  const onSubmit = async (values) => {
    console.log("testing", values);

    // Validate email explicitly
    // if (!email) {
    //   setEmailError({ message: "Email is required" });
    //   return;
    // }

    console.log("email", checkout.updateEmail);

    setLoading(true);
    try {
      // Update email with Stripe
      const updateResult = await checkout.updateEmail(email);
      console.log("updateResult", updateResult);
      if (updateResult.error) {
        setEmailError(updateResult.error);
        return;
      }

      // Confirm payment
      const confirmResult = await confirm();
      if (confirmResult.type === "error") {
        setEmailError(confirmResult.error);
        return;
      }

      confirm().then((result) => {
        if (result.type === "error") {
          setError(result.error);
        }
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setEmailError({ message: "An unexpected error occurred" });
    } finally {
      setLoading(false);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    onSubmit: onSubmit,
  });

  // Disable the PayButton if there are issues
  // const isDisabled = !email || emailError || Object.keys(errors).length > 0 || loading;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row lg:items-start gap-[24px] lg:gap-[30px]">
        {/* COLUMN 1 */}
        <div className="w-full lg:max-w-[670px] flex flex-col gap-[24px] lg:gap-[30px]">
          <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-[30px]">
            {/* FIRST NAME */}
            <div className="flex-1">
              <label htmlFor="firstName" className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 h-[48px] rounded-2xl mt-2 border ${
                  errors.firstName && touched.firstName ? "border-red-500" : "border-[#A6A6A6]"
                } opacity-[0.6] focus:outline-none`}
              />
              {errors.firstName && touched.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            {/* LAST NAME */}
            <div className="flex-1">
              <label htmlFor="lastName" className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 h-[48px] rounded-2xl mt-2 border ${
                  errors.lastName && touched.lastName ? "border-red-500" : "border-[#A6A6A6]"
                } opacity-[0.6] focus:outline-none`}
              />
              {errors.lastName && touched.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          {/* TOWN / CITY */}
          <div className="flex-1">
            <label htmlFor="city" className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
              Town / City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 h-[48px] rounded-2xl mt-2 border ${
                errors.city && touched.city ? "border-red-500" : "border-[#A6A6A6]"
              } opacity-[0.6] focus:outline-none`}
            />
            {errors.city && touched.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

          {/* ADDRESS */}
          <div className="flex-1">
            <label htmlFor="address" className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 h-[48px] rounded-2xl mt-2 border ${
                errors.address && touched.address ? "border-red-500" : "border-[#A6A6A6]"
              } opacity-[0.6] focus:outline-none`}
            />
            {errors.address && touched.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* EMAIL */}
          <div className="flex-1">
            <label htmlFor="emailAddress" className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={values.emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 h-[48px] rounded-2xl mt-2 border ${
                errors.emailAddress && touched.emailAddress ? "border-red-500" : "border-[#A6A6A6]"
              } opacity-[0.6] focus:outline-none`}
            />
            {/* <EmailInput email={email} setEmail={setEmail} setEmailError={setEmailError} /> */}
            {errors.emailAddress && touched.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress}</p>}
          </div>

          {/* PHONE NUMBER */}
          <div className="flex-1">
            <label htmlFor="phoneNumber" className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              inputMode="tel"
              autoComplete="tel"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 h-[48px] rounded-2xl mt-2 border ${
                errors.phoneNumber && touched.phoneNumber ? "border-red-500" : "border-[#A6A6A6]"
              } opacity-[0.6] focus:outline-none`}
              placeholder="e.g. +1 234 567 8901"
            />
            {errors.phoneNumber && touched.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          {/* ORDER NOTE */}
          <div className="flex-1">
            <label htmlFor="orderNote" className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
              Order Note
            </label>
            <textarea
              rows={5}
              id="orderNote"
              name="orderNote"
              value={values.orderNote}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Add any notes about your order here"
              className={`w-full p-4 rounded-2xl mt-2 border ${
                errors.orderNote && touched.orderNote ? "border-red-500" : "border-[#A6A6A6]"
              } opacity-[0.6] focus:outline-none`}
            />
            {errors.orderNote && touched.orderNote && <p className="text-red-500 text-sm">{errors.orderNote}</p>}
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="w-full lg:max-w-[470px] flex flex-col gap-[24px] lg:gap-[30px]">
          {/* Coupon Code */}
          <div className="w-full lg:w-[470px]">
            <div className="p-4 border-[1px] border-[#48bd421a] rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]">
              <label htmlFor="Coupon Code" className="text-base text-[#A6A6A6] font-light leading-6">
                Have a coupon code?
              </label>
              <div className="flex gap-[12px] mt-[8px]">
                <input
                  type="text"
                  id="coupon-code"
                  placeholder="Coupon Code"
                  className="w-full px-4 h-[48px] rounded-2xl border border-[#A6A6A6] opacity-[0.6] focus:outline-none"
                />
                <button className="flex justify-center align-middle text-[#000000] bg-[#F7F7F7] disabled:bg-[#A6A6A6] rounded-[16px] py-[11px] px-[24px]">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Your Order */}
          <div className="w-full lg:w-[470px]">
            <div className="p-4 border-[1px] border-[#48bd421a] rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]">
              <h3 className="text-[#fff] text-[20px] font-semibold leading-[30px]">Your Order</h3>
              <div className="flex flex-col gap-[16px] mt-[12px]">
                <div className="flex justify-between items-center">
                  <p className="text-[#fff] text-[16px] font-medium leading-[24px]">Product</p>
                  <p className="text-[#fff] text-[16px] font-medium leading-[24px]">Subtotal</p>
                </div>
                {productDetails.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <p className="text-[#A6A6A6] text-[16px] leading-[24px]">{item.title}</p>
                    <p className="text-[#A6A6A6] text-[16px] leading-[24px]">{item.price}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <p className="text-[#fff] text-[16px] font-medium leading-[24px]">Total</p>
                  <p className="text-[#fff] text-[16px] font-medium leading-[24px]">{checkout.total.total.amount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="w-full lg:w-[470px]">
            <div className="p-4 border-[1px] border-[#48bd421a] rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]">
              <h3 className="text-[#fff] text-[20px] font-semibold leading-[30px]">Payment Method</h3>
              <div className="flex flex-col gap-[16px] mt-[12px]">
                <PaymentElement
                  options={{
                    layout: {
                      type: "accordion",
                      defaultCollapsed: false,
                      radios: false,
                      spacedAccordionItems: true,
                    },
                  }}
                />
                <PayButton loading={loading} />

                {/* Show error message if there is any error while making payment */}
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
