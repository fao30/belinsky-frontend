const InputForm = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  formikErrors,
}) => {
  return (
    <>
      <div className="flex flex-col w-full h-full md:gap-y-2">
        <label htmlFor={name} className="ml-1 lg:text-xl">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          id={name}
          className="bg-[#E0E0E0] px-3 py-2 md:py-3 lg:py-3 rounded-lg focus:ring-0 text-sm lg:text-lg"
          onChange={onChange}
          onBlur={onBlur}
        />
        <p className="ml-1 text-sm text-red-600 md:text-base">{formikErrors}</p>
      </div>
    </>
  );
};

export default InputForm;
