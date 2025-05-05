import SectionTitle from "../component/Common/SectionTitle";
import Container from "../component/Common/Container";
import CheckoutForm from "../component/Forms/CheckoutForm";

const Checkout = () => {
  return (
    <div>
      {/* SPACER TO PREVENT CONTENT OVERLAP WITH NAVBAR */}

      <Container>
        {/* MAIN SECTION */}
        <SectionTitle middleText={"Checkout"} />

        <div className="mt-[32px] lg:mt-14 mx-auto px-4 lg:px-0">
          <CheckoutForm />
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
