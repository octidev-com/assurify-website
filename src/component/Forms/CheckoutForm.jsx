import { PaymentElement, useCheckout } from "@stripe/react-stripe-js";
import { useFormik } from "formik";
import { checkoutSchema } from "../../schemas/forms";
import { useState } from "react";

// Initial values for the form
const initialValues = {
  emailAddress: "",
  storeAddress: "",
};

const CheckoutForm = () => {
  // const { confirm, total, updateEmail } = useCheckout();

  const checkout = useCheckout();
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const productDetails = [{ title: "Assurify Lifetime Deal * 1", price: checkout.total.total.amount }];

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      // Create user in the backend
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: values.emailAddress,
          storeAddress: values.storeAddress,
        }),
      });
  
      const userData = await response.json();
  
      if (!response.ok) {
        throw new Error(userData.error || "Failed to create user");
      }
  
      // Update email with Stripe
      const updateResult = await checkout.updateEmail(values.emailAddress);

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

      checkout.confirm().then((result) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[24px] lg:gap-[30px] w-full lg:max-w-[470px] mx-auto">
        <div className="flex flex-col gap-[12px] lg:gap-[16px]">
          {/* EMAIL */}
          <div className="flex flex-col gap-[4px] lg:gap-[8px]">
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
              className={`w-full px-4 h-[48px] rounded-2xl border ${
                errors.emailAddress && touched.emailAddress ? "border-red-500" : "border-[#A6A6A6]"
              } opacity-[0.6] focus:outline-none`}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError.message}</p>}
            {errors.emailAddress && touched.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress}</p>}
          </div>

          {/* STORE ADDRESS */}
          <div className="flex flex-col gap-[4px] lg:gap-[8px]">
            <label htmlFor="storeAddress" className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
              Store Address
            </label>
            <input
              type="text"
              name="storeAddress"
              id="storeAddress"
              value={values.storeAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 h-[48px] rounded-2xl border ${
                errors.storeAddress && touched.storeAddress ? "border-red-500" : "border-[#A6A6A6]"
              } opacity-[0.6] focus:outline-none`}
            />
            {errors.storeAddress && touched.storeAddress && <p className="text-red-500 text-sm">{errors.storeAddress}</p>}
          </div>
        </div>

        <div className="w-full lg:max-w-[470px] flex flex-col gap-[24px] lg:gap-[30px]">
          {/* Your Order */}
          <div className="w-full lg:w-[470px]">
            <div className="p-4 border-[1px] border-[#48bd421a] rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]">
              <h3 className="text-[#fff] text-[18px] lg:text-[20px] font-semibold leading-[27px] lg:leading-[30px]">Your Order</h3>
              <div className="flex flex-col gap-[8px] mt-[12px]">
                <div className="flex justify-between items-center">
                  <p className="text-[#fff] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px]">Product Name</p>
                  <p className="text-[#fff] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px]">Amount</p>
                </div>
                {productDetails.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <p className="text-gray-light text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px]">{item.title}</p>
                    <p className="text-gray-light text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px]">{item.price}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <p className="text-white text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px]">Total</p>
                  <p className="text-white text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px]">
                    {checkout.total.total.amount}
                  </p>
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

                {/* Make Payment Button */}
                <button type="submit" className="btn-primary-green-full disabled:cursor-not-allowed">
                  {loading ? "Loading..." : "Pay Now"}
                </button>

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
