import React from "react";
import ProjectDetails from "../../ProjectDetails";
import OwenImg from "../../../../../assets/belinsky-studio/Owen_.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpeg";

const Owen = () => {
  const dataOwen = [
    {
      title: "Jerhemy Owen",
      byWho: "Belinsky Studio",
      src: OwenImg,
      byWho2: "Colored Low Light Photoshoot",
      desc: "A photoshoot with a Colored Low Light concept to embrace the charismatic side of our muse",
      date: "2022",
      category: "Model Photography",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataOwen?.map(
        ({
          title,
          byWho,
          src,
          byWho2,
          desc,
          date,
          category,
          img1,
          img2,
          img3,
        }) => (
          <ProjectDetails
            title={title}
            byWho={byWho}
            src={src}
            byWho2={byWho2}
            desc={desc}
            date={date}
            category={category}
            img1={img1}
            img2={img2}
            img3={img3}
          />
        )
      )}
    </>
  );
};

export default Owen;
