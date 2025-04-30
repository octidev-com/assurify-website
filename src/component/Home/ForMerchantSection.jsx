import roundBg from "../../assets/banner/round-bg.png";
import writingIcon from "../../assets/support/writing.svg";
import clockIcon from "../../assets/support/clock.svg";
import supportIcon from "../../assets/support/support.svg";
import supportImage from "../../assets/support/supportImage.svg"
import bannerBg from "../../assets/banner/banner-bg.png";
import rightSideHr from '../../assets/howItWorks/right-side-hr.png'
import leftSideHr from '../../assets/howItWorks/left-side-hr.png'
import benefit1 from '../../assets/benefits/benefit-1.png'
import benefit2 from '../../assets/benefits/benefit-2.png'
import benefit3 from '../../assets/benefits/benefit-3.png'
import Container from "../Common/Container";
// import Container from "../component/Common/Container";


const ForMerchantSection = () => {
    const benefitsData = [
        {
            id: 1,
            title: 'No Direct Cost to Sellers',
            description:
                'Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.',
            image: benefit1
        },
        {
            id: 2,
            title: 'Flexible Integrations',
            description:
                'Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.',
            image: benefit2
        },
        {
            id: 3,
            title: 'Superior Customer Service',
            description:
                'Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.',
            image: benefit3
        }
    ]
    return (
        <>
            {/* <div className="w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden font-outfit flex flex-col items-center"> */}
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
            {/* Spacer for navbar */}
            <div className="w-full h-[97px]"></div>

            {/* **************************For merchants content is start here ***********************/}
            {/* Banner Content section */}
            <Container>
                <div className="w-full flex justify-center bg-cover bg-no-repeat bg-center z-10 relative pt-[56px] pb-[150px]">
                    <div className="flex flex-wrap justify-center">
                        <div className="text-center">
                            <h1 className="max-w-[738px] text-[56px] font-semibold leading-[84px] ">
                                <div className='flex justify-center items-center gap-3 md:hidden'>
                                    <img src={rightSideHr} alt='' className='max-w-[100px]' />
                                    <p className='text-sm font-normal leading-[30px]'>
                                        For Merchant
                                    </p>
                                    <img src={leftSideHr} alt='' className='max-w-[100px]' />
                                </div>
                                <span className="bg-gradient-to-r from-[#50C04A] to-white bg-clip-text text-transparent">
                                    Enhance your revenue and manage shipping protection from one app
                                </span>
                            </h1>
                            <p className="max-w-[686px] text-[18px] font-light leading-[27px] text-[#F7F7F7] mt-3 mb-8 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus. Praesent non ante vitae turpis.
                            </p>
                            <div className="flex justify-center gap-7">
                                <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
                                    How it works
                                </button>
                                <button className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition">
                                    View Demo
                                </button>
                            </div>
                        </div>
                        <div className="bg-[#EDEDED] w-full h-[812px] rounded-lg shadow-md mx-auto mt-12">
                            <p className="text-[#888] pt-40 text-lg">Image Goes Here</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Brands content section */}
            <div className='w-full py-[150px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
                <Container>
                    <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
                        <img src={roundBg} alt='Background decoration' />
                    </div>
                    <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
                        <img src={roundBg} alt='Background decoration' />
                    </div>
                    <div className='container relative mx-auto'>
                        <div className='max-w-full mx-auto flex flex-col gap-4 px-4'>
                            <div className='flex justify-center items-center gap-3'>
                                <img src={rightSideHr} alt='' className='max-w-[100px]' />
                                <p className='text-xl font-normal leading-[30px]'>
                                    Brands
                                </p>
                                <img src={leftSideHr} alt='' className='max-w-[100px]' />
                            </div>
                            <div className="max-w-[536px] mx-auto">
                                <h1 className='text-5xl font-semibold text-gradient text-center leading-[72px]'>
                                    Exclusively built for Shopify
                                </h1>
                            </div>
                            <div className="max-w-[722px] mx-auto">
                                <p className='text-[#A6A6A6] text-lg font-light text-center leading-[27px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus. Praesent non ante vitae turpis.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#EDEDED] w-full h-[800px] rounded-lg shadow-md mx-auto mt-12">
                            <p className="text-[#888] pt-40 text-lg">Image Goes Here</p>
                        </div>
                    </div>
                </Container>
            </div>
            {/* Benefit content section */}
            <div className='py-[150px] relative'>
                <div className='absolute -top-[10%] -left-[100%] pointer-events-none z-0'>
                    <img src={bannerBg} alt='Background decoration' />
                </div>
                <Container>
                    <div className='grid grid-cols-2 gap-[130px] shrink-[0]'>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='flex justify-start items-center gap-3'>
                                <img src={rightSideHr} alt='' className='max-w-[100px]' />
                                <p className='text-xl font-normal leading-[30px]'>Benefits</p>
                                <img src={leftSideHr} alt='' className='max-w-[100px]' />
                            </div>
                            <h1 className='text-5xl font-semibold text-gradient leading-[72px]'>
                                Exclusive customer Experience
                            </h1>
                            <p className='text-[#A6A6A6] text-lg font-light leading-[27px]'>
                                A perfect balance—customers get great value, and merchants boost
                                their sales effortlessly!
                            </p>
                        </div>
                        <div className='flex flex-col gap-[30px]'>
                            {benefitsData.map((benefit) => (
                                <div
                                    key={benefit.id}
                                    className='p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-[20px] flex flex-col gap-3 items-start'>
                                    <div className='p-3 rounded-sm bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px]'>
                                        <img src={benefit.image} alt='benefit-1' />
                                    </div>
                                    <h3 className='text-[32px] font-normal text-[#f7f7f7] leading-[48px]'>
                                        {benefit.title}
                                    </h3>
                                    <p className='text-base font-normal leading-[30px] text-[#A6A6A6]'>
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
            {/* Protection Coverage content Section */}
            <div className='w-full py-[150px] relative bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-[37px] overflow-hidden'>
                <div className='absolute top-1/2 left-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
                    <img src={roundBg} alt='Background decoration' />
                </div>
                <div className='absolute top-1/2 right-[-50%] transform -translate-y-1/2 pointer-events-none z-0'>
                    <img src={roundBg} alt='Background decoration' />
                </div>

                <div className='container relative mx-auto'>
                    <div className='max-w-full mx-auto flex flex-col gap-2'>
                        <div className='flex justify-center items-center gap-3'>
                            <img src={rightSideHr} alt='' className='max-w-[100px]' />
                            <p className='text-xl font-normal leading-[30px]'>
                                Protection Coverage
                            </p>
                            <img src={leftSideHr} alt='' className='max-w-[100px]' />
                        </div>
                        <div className="max-w-[620px] mx-auto">
                            <h1 className='text-5xl font-semibold text-gradient text-center leading-[72px]'>
                                Sync with you existing checkout module.                                </h1>
                        </div>
                        <div className="max-w-[722px] mx-auto">
                            <p className='text-[#A6A6A6] text-lg font-light text-center leading-[27px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus. Praesent non ante vitae turpis.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[874px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[48px]">
                        <div className='flex flex-col gap-3 items-start max-w-[422px]'>
                            <div className='bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] p-4 rounded-xl'>
                                <img src={benefit1} alt='Easy to setup icon' className='w-10 h-10' />
                            </div>
                            <h3 className='text-2xl font-semibold text-white'>Easy to setup</h3>
                            <p className='text-[#A6A6A6] text-base leading-[27px]'>
                                Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.
                            </p>
                        </div>
                        <div className='flex flex-col gap-3 items-start max-w-[422px]'>
                            <div className='bg-[linear-gradient(195deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_100%)] backdrop-blur-[20px] p-4 rounded-xl'>
                                <img src={benefit2} alt='No backhand branding icon' className='w-10 h-10' />
                            </div>
                            <h3 className='text-2xl font-semibold text-white'>No Backhand Branding</h3>
                            <p className='text-[#A6A6A6] text-base leading-[27px]'>
                                Check out our custom research services designed to tackle your business challenges! We offer market analysis and consumer insights to help you make better decisions and boost your growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Support content Section */}
            <div className='pt-[150px] relative'>
                <div className="grid grid-cols-2 gap-[30px] shrink-[0]">
                    <div className="flex flex-col gap-2 max-w-[570px]">
                        <div className='flex justify-start items-center gap-3'>
                            <img src={rightSideHr} alt='' className='max-w-[100px]' />
                            <p className='text-xl font-normal leading-[30px]'>Support</p>
                            <img src={leftSideHr} alt='' className='max-w-[100px]' />
                        </div>
                        <h2 className='text-5xl font-semibold text-gradient leading-[72px]'>
                            Instant support and service
                        </h2>
                        <p className='text-[#A6A6A6] text-base leading-relaxed max-w-[470px]'>
                            A perfect balance—customers get great value, and merchants boost their sales effortlessly!
                        </p>
                        <div className='mt-10 flex flex-col gap-6 max-w-full'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px]'>
                                    <img src={writingIcon} alt='Seamless claim icon' className='w-full' />
                                </div>
                                <p className='text-white text-base'>Seamless claim submission experience</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px]'>
                                    <img src={clockIcon} alt='Fast claim processing icon' />
                                </div>
                                <p className='text-white text-base'>Fast and transparent claim processing</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='bg-[#1A1A1A] p-3 rounded-md w-[55px] h-[56px]'>
                                    <img src={supportIcon} alt='Expert support icon' />
                                </div>
                                <p className='text-white text-base'>Dedicated expert support from start to finish</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-end max-w-[570px]'>
                        <img src={supportImage} alt='Support team' className='rounded-xl max-w-full' />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>

    );
};

export default ForMerchantSection;
