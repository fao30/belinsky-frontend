const Button = ({ icon, name }) => {
  return (
    <button className="w-[33%] py-[0.5em] bg-white shadow-lg rounded-lg text-[#022581] flex gap-2 justify-center hover:bg-[#022581] hover:text-white duration-300 ease-in-out font-semibold">
      {icon}
      {name}
    </button>
  );
};

export default Button;
