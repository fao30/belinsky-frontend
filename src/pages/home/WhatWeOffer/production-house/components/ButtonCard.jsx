const ButtonCard = ({ icon, name }) => {
  return (
    <div className="w-[33%] py-[0.7rem] bg-white shadow-lg rounded-lg text-[#022581] flex gap-2 justify-center duration-300 ease-in-out cursor-default font-semibold text-md">
      {icon}
      {name}
    </div>
  );
};

export default ButtonCard;
