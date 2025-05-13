import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Container from "../component/Common/Container";
import SectionTitle from "../component/Common/SectionTitle";
import CheckoutForm from "../component/Forms/CheckoutForm";
import { useLocation } from "react-router";

const Checkout = () => {
  const location = useLocation();
  const price = location.state.price;
  const plan = location.state.plan;

  // load stripe using stripe publishable key
  const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const fetchClientSecret = async () => {
    const response = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan: plan, price: price }),
    });
    const json = await response.json();
    return json.checkoutSessionClientSecret;
  };
  return (
    <div>
      <Container>
        {/* MAIN SECTION */}
        <SectionTitle middleText={"Checkout"} />

        <div className="mt-[32px] lg:mt-14 mx-auto px-4 lg:px-0 min-h-screen">
          <CheckoutProvider stripe={stripe} options={{ fetchClientSecret }}>
            <CheckoutForm />
          </CheckoutProvider>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
