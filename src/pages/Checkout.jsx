// With loading state which does not work
import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Container from "../component/Common/Container";
import SectionTitle from "../component/Common/SectionTitle";
import CheckoutForm from "../component/Forms/CheckoutForm";
import LoadingSpinner from "../component/Common/LoadingSpinner";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Load stripe using stripe publishable key
  const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const fetchClientSecret = async () => {
    try {
      const response = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
      });
      const json = await response.json();
      console.log(json.checkoutSessionClientSecret);
      const secret = json.checkoutSessionClientSecret;

      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Simulate a delay of 1 second

      return secret;
    } catch (error) {
      console.error("Error fetching client secret:", error);
      return null;
    }
  };

  // console.log(isLoading);
  return (
    <div className="pt-[32px] md:pt-[56px]">
      <Container>
        {/* MAIN SECTION */}
        <SectionTitle middleText={"Checkout"} />

        <div className="mt-[24px] lg:mt-[32px] mx-auto min-h-[90vh]">
          {/* {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : ( */}
          {isLoading && <LoadingSpinner />}
          <CheckoutProvider stripe={stripe} options={{ fetchClientSecret }}>
            {!isLoading && <CheckoutForm />}
          </CheckoutProvider>
          {/* )} */}
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
