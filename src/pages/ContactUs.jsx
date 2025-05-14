import CustomIcon from "../assets/icon/CustomIcon";
import Container from "../component/Common/Container";
import SectionTitle from "../component/Common/SectionTitle";
import TopBg from "../component/Common/TopBg";
import ContactForm from "../component/Forms/ContactForm";

const ContactUs = () => {
  return (
    <>
    <TopBg>
      {/* Main content */}
      <Container>
        <div className="pt-[32px] md:pt-[56px]">
          {/* Header Section */}
          <SectionTitle
            topText={"Contact us"}
            middleText={"Questions? Feel Free to Reach Out Via Message."}
            bottomText={"Let’s turn your journey into something extraordinary."}
          />

          {/* Main Contact */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-[30px] mt-8 sm:mt-10 lg:mt-12 w-full">
            {/* Contact Info */}
            <div className="flex flex-col gap-6 sm:gap-5 lg:gap-[30px] w-full lg:w-[370px]">
              {[
                {
                  id: 1,
                  icon: "envelope-icon",
                  text1: "We're always happy to help",
                  text2: "info@daisydiffusion.com",
                },
                {
                  id: 2,
                  icon: "phone-icon",
                  text1: "Our hotline number",
                  text2: "+1(551) 333-7997",
                },
                {
                  id: 1,
                  icon: "location-icon",
                  text1: "Found us here",
                  text2: "ENG, NN8 1HT, GB",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 items-center p-4 sm:p-5 lg:p-6 rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]"
                >
                  <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full border-[1.4px] border-[#FFFFFF1A] flex items-center justify-center">
                    <CustomIcon iconName={item.icon} className={"w-[24px] md:w-[32px] h-[24px] md:h-[32px]"} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]">{item.text1}</p>
                    <p className="text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-[30px] text-[#F7F7F7]">{item.text2}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Us Form */}
            <div className="p-4 sm:p-5 lg:p-6 rounded-[16px] sm:rounded-[20px] lg:rounded-[26px] bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px] w-full lg:w-[770px]">
              {/* CONTACT US FORM */}
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </TopBg>
    </>
  );
};

export default ContactUs;
