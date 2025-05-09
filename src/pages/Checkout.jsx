import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Container from "../component/Common/Container";
import SectionTitle from "../component/Common/SectionTitle";
import CheckoutForm from "../component/Forms/CheckoutForm";

const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const fetchClientSecret = () => {
  return fetch("http://localhost:3000/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item: { name: "Lifetime Deal", price: 99 },
    }),
  })
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret);
};

const Checkout = () => {
  return (
    <div>
      <Container>
        {/* MAIN SECTION */}
        <SectionTitle middleText={"Checkout"} />

        <div className="mt-[32px] lg:mt-14 mx-auto px-4 lg:px-0 min-h-screen">
          {stripe ? (
            <CheckoutProvider stripe={stripe} options={{ fetchClientSecret }}>
              <CheckoutForm />
            </CheckoutProvider>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold">Loading...</h2>
              <p>Please wait while we prepare your checkout session.</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
