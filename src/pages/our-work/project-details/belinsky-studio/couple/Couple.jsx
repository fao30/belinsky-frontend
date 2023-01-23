import React from "react";
import ProjectDetails from "../../ProjectDetails";
import CoupleImg from "../../../../../assets/belinsky-studio/Couple_.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpeg";

const Couple = () => {
  const dataCouple = [
    {
      title: "Couple",
      byWho: "Belinsky Studio",
      src: CoupleImg,
      byWho2: "Couple Photoshoot",
      desc: "Other than solo and group photoshoot, couple photoshoot is another category that we offered at our Studio, giving a personal and memorable session between you and your beloved one",
      date: "2022",
      category: "Couple Photoshoot",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataCouple?.map(
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

export default Couple;
