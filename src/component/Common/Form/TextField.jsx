const TextField = ({ label, id }) => {
  return (
    <div className="flex-1">
      <label htmlFor={label} className="text-base text-[#A6A6A6] font-light leading-6">
        {label}
      </label>
      <input type="text" id={id} className="w-full px-4 h-12 rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none" />
    </div>
  );
};

export default TextField;
