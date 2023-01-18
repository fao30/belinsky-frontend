import React from "react";
import ProjectDetails from "../../ProjectDetails";
import AbnonImg from "../../../assets/belinsky-studio/Abnon_.png";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

const Abnon = () => {
  const dataAbnon = [
    {
      title: "Abnon Timur",
      byWho: "Belinsky Studio",
      src: AbnonImg,
      byWho2: "Photoshoot By Our Photographer",
      desc: "Top 30 Semi-finalist Abang None Jakarta Timur 2022",
      date: "10 April 2022",
      category: "Group Studio Photo Session",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataAbnon?.map(
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

export default Abnon;
