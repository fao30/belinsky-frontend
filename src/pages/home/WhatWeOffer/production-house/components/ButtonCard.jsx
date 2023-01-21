const ButtonCard = ({ icon, name }) => {
  return (
    <div className="px-[1.2vw] py-[1vh] sm:w-[32%] sm:py-[1.3vh] bg-white shadow-lg rounded-lg text-[#022581] flex gap-2 justify-center duration-300 ease-in-out font-semibold text-md">
      {icon}
      {name}
    </div>
  );
};

export default ButtonCard;
