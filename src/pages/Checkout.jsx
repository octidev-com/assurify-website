import TextField from "../component/Common/Form/TextField";
import SectionTitle from "../component/Common/SectionTitle";

const Checkout = () => {
  return (
    <div className="w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden">
      {/* SPACER TO PREVENT CONTENT OVERLAP WITH NAVBAR */}
      <div className="w-full h-[80px]"></div>

      <div className="container mt-14 mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN SECTION */}
        <SectionTitle middleText={"Checkout"} />

        {/* MAIN CONTENT */}
        <div className="flex gap-[30px]">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] lg:w-[670px]">
              <div className="flex gap-[30px] w-full">
                <TextField label={"First Name"} id={"checkout-first-name"} />
                <TextField label={"Last Name"} id={"checkout-last-name"} />
              </div>
              <TextField label={"Email"} id={"checkout-email"} />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="w-full lg:w-[470px]">2</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
