import roundBg from "../../assets/banner/round-bg.png";

const TopBg = () => {
  return (
    <div>
      {/* Right side bg image */}
      <div className="absolute -top-[800px] -left-[500px] pointer-events-none z-0">
        <img src={roundBg} alt="Background decoration left" className="w-[75vw] max-w-none opacity-80" />
      </div>

      {/* Left side bg image */}
      <div className="absolute -top-[800px] -right-[500px] pointer-events-none z-0">
        <img src={roundBg} alt="Background decoration right" className="w-[75vw] max-w-none opacity-80" />
      </div>
    </div>
  );
};

export default TopBg;
