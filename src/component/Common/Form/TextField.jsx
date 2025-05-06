/**
 * A component that renders a text input field with a label.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The text to display as the label for the input field.
 * @param {string} props.placeholder - The placeholder text to display inside the input field.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {boolean} props.required - Indicates whether the input field is required.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - Callback function to handle input value changes.
 * @param {function} props.onBlur - Callback function to handle input blur events.
 * @returns {JSX.Element} A JSX element representing the labeled text input field.
 */


const TextField = ({ label, placeholder, id, required, value, onChange, onBlur, error }) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full px-4 h-[48px] rounded-2xl mt-2 border  ${error ? "border-red-500": "border-[#A6A6A6]"}  opacity-[0.6] focus:outline-none`}
      />
    </div>
  );
};

export default TextField;
