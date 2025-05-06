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
      "cursor-pointer px-4 py-2 bg-[#f7f7f7] rounded-[16px] text-black font-medium text-[14px] lg:text-[16px] leading-[21px] lg:leading-[26px] md:px-6 py-[10px] md:py-[11px]",
    "primary-green":
      "cursor-pointer px-4 py-2 bg-[#48bd42] text-black font-medium text-[14px] lg:text-[16px] leading-[21px] lg:leading-[26px] md:px-6 py-[10px] md:py-[11px] rounded-[16px]",
    "secondary-outline":
      "cursor-pointer px-4 py-2 border border-white rounded-[16px] text-white font-medium text-[14px] lg:text-[16px] leading-[21px] lg:leading-[26px] md:px-6 py-[10px] md:py-[11px]",
  };

  const buttonStyle = variantStyles[variant] || variantStyles["primary-white"];

  return (
    <button className={`${buttonStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
