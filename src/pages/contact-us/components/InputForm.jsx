const InputForm = ({ label, type, name, onChange, value }) => {
  return (
    <>
      <div className="flex flex-col w-full h-full md:gap-y-2">
        <label htmlFor={name} className="ml-1   lg:text-xl">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          id={name}
          className="bg-[#E0E0E0] px-3 py-2 md:py-3 lg:py-3 rounded-lg focus:ring-0 text-sm lg:text-lg"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputForm;
