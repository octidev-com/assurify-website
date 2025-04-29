/**
 * EmailField component renders a labeled email input field.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text for the email input field.
 * @param {string} props.placeholder - The placeholder text for the email input field.
 * @param {string} props.id - The unique identifier for the email input field.
 * @param {boolean} props.required - Specifies whether the email input field is required.
 * @returns {JSX.Element} The rendered EmailField component.
 */

const EmailField = ({ label, placeholder, id, required }) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="text-base text-[#A6A6A6] font-light leading-6">
        {label}
      </label>
      <input
        type="email"
        id={id}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 h-[48px] rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none"
      />
    </div>
  );
};

export default EmailField;
