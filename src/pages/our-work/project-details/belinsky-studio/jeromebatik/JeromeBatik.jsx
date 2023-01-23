import React from "react";
import ProjectDetails from "../../ProjectDetails";
import JeromeBatikImg from "../../../../../assets/belinsky-studio/JeromeBatik_.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const JeromeBatik = () => {
  const dataJeromeBatik = [
    {
      title: "Jerome Polin",
      byWho: "Belinsky Studio",
      src: JeromeBatikImg,
      byWho2: "Jerome x Batik Air",
      desc: "Taken at our Studio, a collaboration photoshoot between Jerome Polin x Batik Air to celebrate and promote Batik Air's 10th Anniversary",
      date: "2022",
      category: "Project Photoshoot",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataJeromeBatik?.map(
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

export default JeromeBatik;
