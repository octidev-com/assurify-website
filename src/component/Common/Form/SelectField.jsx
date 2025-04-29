/**
 * A custom select field component.
 *
 * @param {Object} props - The props for the SelectField component.
 * @param {string} props.label - The label for the select field.
 * @param {string} props.placeholder - The placeholder text for the select field.
 * @param {string} props.id - The unique identifier for the select field.
 * @param {Array<{ value: string, label: string }>} [props.options=[]] - The options for the select dropdown. Each option should have a `value` and `label`.
 * @param {boolean} [props.required] - Whether the select field is required.
 * @returns {JSX.Element} The rendered select field component.
 */

const SelectField = ({ label, placeholder, id, options = [], required }) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="text-[14px] lg:text-base text-[#A6A6A6] font-light leading-6">
        {label}
      </label>
      <select
        id={id}
        required={required}
        className="w-full px-4 h-[48px] rounded-2xl mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDEyIiBmaWxsPSJub25lIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTA5N18zOTA3KSI+PHBhdGggZD0iTTE3LjQxOTggMi40NTE5OUwxOC40Nzk4IDMuNTEyOTlMMTIuNzAyOCA5LjI5MTk5QzEyLjYxMDIgOS4zODUxNCAxMi41MDAxIDkuNDU5MDcgMTIuMzc4OSA5LjUwOTUyQzEyLjI1NzYgOS41NTk5NyAxMi4xMjc2IDkuNTg1OTQgMTEuOTk2MyA5LjU4NTk0QzExLjg2NDkgOS41ODU5NCAxMS43MzQ5IDkuNTU5OTcgMTEuNjEzNyA5LjUwOTUyQzExLjQ5MjQgOS40NTkwNyAxMS4zODIzIDkuMzg1MTQgMTEuMjg5OCA5LjI5MTk5TDUuNTA5NzcgMy41MTI5OUw2LjU2OTc3IDIuNDUyOTlMMTEuOTk0OCA3Ljg3Njk5TDE3LjQxOTggMi40NTE5OVoiIGZpbGw9IiNGN0Y3RjciLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMF8xMDk3XzM5MDciPjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0KSByb3RhdGUoOTApIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
