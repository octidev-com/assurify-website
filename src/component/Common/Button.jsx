import React from "react";

/**
 * A reusable and responsive button component with different variants.
 *
 * @param {Object} props - The props for the Button component.
 * @param {React.ReactNode} props.children - The content to display inside the button (text, JSX, or components).
 * @param {string} [props.variant='primary-white'] - The variant of the button. Options: 'primary-white', 'primary-green', 'secondary-outline'.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply to the button for customization.
 * @param {...Object} props - Additional HTML button attributes (e.g., onClick, disabled, type).
 * @returns {JSX.Element} A styled button element.
 */
const Button = ({ children, variant = "primary-white", className = "", ...props }) => {
  const variantStyles = {
    "primary-white":
      "cursor-pointer px-4 py-2 bg-white hover:bg-[linear-gradient(103.28deg,#48BD42_5.59%,#FFFFFF_100%)] hover:shadow-[0px_7px_25px_0px_#80EF805C] border-[1px] border-white rounded-[16px] text-black font-medium text-normal-paragraph-mobile lg:text-normal-paragraph-desktop leading-paragraph md:px-6 py-[10px] md:py-[11px]",
    "primary-green":
      "cursor-pointer px-4 py-2 bg-primary text-black font-medium text-normal-paragraph-mobile lg:text-normal-paragraph-desktop leading-paragraph md:px-6 py-[10px] md:py-[11px] rounded-[16px]",
    "secondary-outline":
      "cursor-pointer px-4 py-2 border-[1px] border-white rounded-[16px] text-normal-paragraph-mobile lg:text-normal-paragraph-desktop leading-paragraph text-white font-medium hover:bg-primary hover:border-primary hover:text-black md:px-6 py-[10px] md:py-[11px]",
  };

  const buttonStyle = variantStyles[variant] || variantStyles["primary-white"];

  return (
    <button className={`${buttonStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
