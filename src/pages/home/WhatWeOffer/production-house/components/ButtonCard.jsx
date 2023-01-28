import { Icon } from "@iconify/react";

const ButtonCard = ({ icon, name }) => {
  return (
    <div className="flex items-center justify-center p-2 w-[31%]   bg-white rounded-lg shadow-xl">
      <div className="flex items-center gap-3">
        <div className="sticky">
          <Icon icon={icon} width="25" />
        </div>
        <div className="text-sm   md:text-lg">{name}</div>
      </div>
    </div>
  );
};

export default ButtonCard;
