// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router";
const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
