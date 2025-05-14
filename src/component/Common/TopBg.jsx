import roundBg from "../../assets/banner/round-bg.png";

const TopBg = ({ children }) => {
  return (
    <div className="w-full relative text-white overflow-hidden">
      {/* Right side bg image */}
      <div className="absolute  -top-[800px] -left-[1000px] sm:-left-[800px] md:-left-[500px] pointer-events-none z-0">
        <img src={roundBg} alt="Background decoration" />
      </div>

      {children}

      {/* Left side bg image */}
      <div className="absolute -top-[800px] -right-[1000px] sm:-right-[800px] md:-right-[500px] pointer-events-none z-0">
        <img src={roundBg} alt="Background decoration" />
      </div>
    </div>
  );
};

export default TopBg;
