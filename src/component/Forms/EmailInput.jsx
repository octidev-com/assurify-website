import { useCheckout } from "@stripe/react-stripe-js";
import React from "react";

const EmailInput = () => {
  const checkout = useCheckout();
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleBlur = () => {
    checkout.updateEmail(email).then((result) => {
      if (result.error) {
        setError(result.error);
      }
    });
  };

  const handleChange = (e) => {
    setError(null);
    setEmail(e.target.value);
  };
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-full px-4 h-[48px] rounded-2xl mt-2 border   opacity-[0.6] focus:outline-none`}
      />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default EmailInput;
