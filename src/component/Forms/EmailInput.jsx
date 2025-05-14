import React, { useState } from "react";
import { useCheckout } from "@stripe/react-stripe-js";

const EmailInput = ({ value, onChange, onBlur, name }) => {
  const checkout = useCheckout();
  const [error, setError] = useState(null);

  const handleEmailBlur = async (e) => {
    onBlur(e);
    if (value) {
      try {
        const result = await checkout.updateEmail(value);
        if (result.error) {
          setError(result.error);
        } else {
          setError(null);
        }
      } catch (err) {
        console.error("Error updating email:", err);
        setError({ message: "Error validating email" });
      }
    }
  };

  return (
    <div>
      <input
        type="email"
        required={true}
        value={value}
        onChange={onChange}
        onBlur={handleEmailBlur}
        name={name}
        className={`w-full px-4 h-[48px] rounded-2xl mt-2 border ${
          error ? "border-red-500" : "border-[#A6A6A6]"
        } opacity-[0.6] focus:outline-none`}
      />
      {error && <div className="text-red-500 text-sm">{error.message}</div>}
    </div>
  );
};

export default EmailInput;
