import ThankYouImg from "../../assets/confirmation/thank-you.svg";
import Button from "../Common/Button";
import SectionTitle from "../Common/SectionTitle";

const ConfirmationSection = () => {
  return (
    <div className="max-w-[646px] mx-auto mt-[56px]">
      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <img src={ThankYouImg} alt="Thank you illustration" className="w-[278px] h-[300px]" />
      </div>

      {/* Headings */}
      <SectionTitle
        middleText="Thank You For Choosing Assurity Shipping Protection!"
        bottomText="Your purchase has been successfully completed. We are thrilled to have you on board!"
      />
      <p className="mx-auto text-[#A6A6A6] text-[12px] lg:text-lg font-light text-center leading-[18px] lg:leading-[27px] mt-6 mb-6">
        With Assurify Shipping Protection, your orders are now backed by fast, reliable, and hassle-free coverage.
        <br /> No more worrying about lost, stolen, or damaged packages — we've got you covered!
      </p>

      {/* Order summary section */}
      <div className="w-full mt-6">
        <div className="w-full max-w-[646px] p-4 rounded-xl bg-white/5 backdrop-blur-xl shadow-md space-y-4">
          <h3 className="text-white text-lg font-semibold">Order Summary</h3>

          <div className="flex justify-between text-gray-400 text-sm">
            <p>App Name</p>
            <p>Assurify</p>
          </div>

          <div className="flex justify-between text-gray-400 text-sm">
            <div>
              <p>Promo Code</p>
              <p className="text-xs mt-1">You have 180 days for using this promo code</p>
            </div>
            <p className="text-right">Assurify1401</p>
          </div>

          <div className="flex justify-between text-white font-medium pt-2 mt-2">
            <p>Total</p>
            <p>$50.00</p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-6 space-y-4 font-light text-[#A6A6A6] text-[12px] lg:text-lg">
        <div>
          <p className="leading-[27px">Here's what happens next:</p>
          <p className="leading-[27px]">
            • You'll receive a confirmation email with all your protection details.
            <br />• If you ever experience any shipping issues, simply file a claim through our easy online process — and we'll take care of
            the rest.
          </p>
        </div>

        {/* Need Help? section */}
        <div>
          <p className="leading-[27px]">Need Help?</p>
          <p className="leading-[27px]">
            Our support team is always ready to assist you.
            <br /> Reach out to us anytime at{" "}
            <a href="mailto:info@assurityfusion.com" className="text-[#5FD4FF] underline">
              info@assurityfusion.com
            </a>
            .
          </p>
        </div>

        {/* Closing message */}
        <p className="leading-[27px] text-center">
          Thank you once again for trusting Assurity —
          <br />
          Protecting your peace of mind, one shipment at a time.
        </p>
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center mt-6">
        <Button variant="primary-green">Back To Home</Button>
      </div>
    </div>
  );
};

export default ConfirmationSection;
