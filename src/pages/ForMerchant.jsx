import roundBg from "../assets/banner/round-bg.png";
import NavbarSpacer from "../component/Common/NavbarSpacer";
import ForMerchantSection from "../component/Home/ForMerchantSection";

const ForMerchant = () => {
    return (
        <>
            <div className="w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden">
                    <NavbarSpacer />
                    {/* Background Decorations */}
                    <div className="absolute -top-[800px] -left-[500px] pointer-events-none z-0">
                        <img
                            src={roundBg}
                            alt="Background decoration left"
                            className="w-[75vw] max-w-none opacity-80"
                        />
                    </div>
                    <div className="absolute -top-[800px] -right-[500px] pointer-events-none z-0">
                        <img
                            src={roundBg}
                            alt="Background decoration right"
                            className="w-[75vw] max-w-none opacity-80"
                        />
                    </div>
                    <ForMerchantSection />
            </div>
        </>

    );
};

export default ForMerchant;
