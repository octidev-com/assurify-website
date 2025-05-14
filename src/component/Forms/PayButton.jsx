import React, { useState } from "react";
import { useCheckout } from "@stripe/react-stripe-js";

const PayButton = ({ onSubmit }) => {
  const { confirm } = useCheckout();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await confirm();
      if (result.type === "error") {
        console.error("Payment error:", result.error.message);
      } else {
        onSubmit(); // Call form submission logic if payment is successful
      }
    } catch (err) {
      console.error("Error during payment:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button type="button" className="btn-primary-green-full disabled:cursor-not-allowed" disabled={loading} onClick={handleClick}>
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default PayButton;
