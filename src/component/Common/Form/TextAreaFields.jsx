/**
 * A component that renders a text input field with a label.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The text to display as the label for the input field.
 * @param {string} props.placeholder - The placeholder text to display inside the input field.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {boolean} props.required - Indicates whether the input field is required.
 * @returns {JSX.Element} A JSX element representing the labeled text input field.
 */

const TextAreaField = ({ label, placeholder, id, required }) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="text-base text-[#A6A6A6] font-light leading-6">
        {label}
      </label>
      <textarea
        rows={5}
        id={id}
        required={required}
        placeholder={placeholder}
        className="w-full p-4 rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none"
      />
    </div>
  );
};

export default TextAreaField;
