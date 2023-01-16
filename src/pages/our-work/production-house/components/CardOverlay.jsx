import { useNavigate } from "react-router-dom";

const CardOverlay = ({ src, h3, p }) => {
  const navigate = useNavigate();
  return (
    <div className="h-[20rem] w-full sm:w-[28rem] lg:w-[30%] bg-slate-400 relative group rounded-[1rem]">
      <video
        loop
        muted
        autoPlay
        src={src}
        alt="studio2-vid"
        className="absolute object-cover w-full h-full rounded-[1rem]"
      />
      <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white rounded-[1rem]">
        <div
          onClick={() =>
            navigate(`${h3 === "Menantea" ? "/ourwork/menantea" : ""}`)
          }
          className={`flex flex-col items-center pt-48 pl-7 justify-start w-full h-full text-left text-white ${
            h3 === "Menantea" ? "cursor-pointer" : ""
          }`}
        >
          <h3 className="text-[20px] font-semibold text-white w-full">{h3}</h3>
          <p className="w-full pr-6 drop-shadow-md text-[14px]">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOverlay;
