import React from 'react'

/**
 * A reusable and responsive button component with different variants.
 *
 * @param {Object} props - The props for the Button component.
 * @param {string} props.buttonText - The text to display inside the button.
 * @param {string} [props.variant='primary-white'] - The variant of the button. Options: 'primary-white', 'primary-green', 'secondary-outline'.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply to the button for customization.
 * @param {...Object} props - Additional HTML button attributes (e.g., onClick, disabled, type).
 * @returns {JSX.Element} A styled button element.
 *
 * @example
 * // Primary white button
 * <Button buttonText="Get Started" variant="primary-white" onClick={() => alert('Clicked!')} />
 *
 * @example
 * // Primary green button with full width
 * <Button buttonText="Sign Up" variant="primary-green" className="w-full" />
 *
 * @example
 * // Secondary outline button
 * <Button buttonText="Learn More" variant="secondary-outline" />
 */
const Button = ({
  buttonText,
  variant = 'primary-white',
  className = '',
  ...props
}) => {
  const variantStyles = {
    'primary-white':
      'cursor-pointer px-4 py-2 bg-[#f7f7f7] rounded-lg text-black font-medium text-sm md:px-6 md:py-[11px] md:rounded-[1rem] md:text-base',
    'primary-green':
      'cursor-pointer px-4 py-2 bg-[#48bd42] rounded-lg text-black font-medium text-sm md:px-6 md:py-[11px] md:rounded-[1rem] md:text-base',
    'secondary-outline':
      'cursor-pointer px-4 py-2 border border-white rounded-lg text-white font-medium text-sm md:px-6 md:py-[11px] md:rounded-[1rem] md:text-base'
  }

  const buttonStyle = variantStyles[variant] || variantStyles['primary-white']

  return (
    <button className={`${buttonStyle} ${className}`} {...props}>
      {buttonText}
    </button>
  )
}

export default Button
