import Container from "../component/Common/Container";
import ForMerchantSection from "../component/Home/ForMerchantSection";
import NavbarSpacer from "../component/Common/NavbarSpacer";


const ForMerchant = () => {
    return (
        <>
            <div className="w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden">
                <Container>
                    <NavbarSpacer />
                    <ForMerchantSection />
                </Container>
            </div>
        </>

    );
};

export default ForMerchant;
