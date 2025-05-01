import { useState } from "react";
import Container from "./Container";
import CustomIcon from "../../assets/icon/CustomIcon";

const Topbar = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  return (
    <Container>
      <div className={`justify-between items-center py-4 ${isAnnouncementVisible ? "flex" : "hidden"}`}>
        <p className="text-[#f7f7f7] text-base font-normal leading-[24px]">
          Enjoy 20% OFF your next purchase with code SAVE20 - limited time only! <span className="underline">Click Here</span>
        </p>

        <button className="cursor-pointer" onClick={() => setIsAnnouncementVisible(false)}>
          <CustomIcon iconName={"announcement-close-btn"} />
        </button>
      </div>
    </Container>
  );
};

export default Topbar;
