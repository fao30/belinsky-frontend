const InputForm = ({ label, type, name, onChange }) => {
  return (
    <>
      <div className="flex flex-col w-full h-full md:gap-y-2">
        <label htmlFor={name} className="ml-1 text-md lg:text-xl">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className="bg-[#E0E0E0] px-3 py-2 md:py-3 lg:py-[0.9rem] rounded-lg"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputForm;