import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Container from "../component/Common/Container";
import SectionTitle from "../component/Common/SectionTitle";
import CheckoutForm from "../component/Forms/CheckoutForm";

const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const fetchClientSecret = () => {
  return fetch("http://localhost:3000/create-checkout-session", {
    method: "POST",
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

        <div className="mt-[32px] lg:mt-14 mx-auto px-4 lg:px-0">
          <CheckoutProvider stripe={stripe} options={{ fetchClientSecret }}>
            <CheckoutForm />
          </CheckoutProvider>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
