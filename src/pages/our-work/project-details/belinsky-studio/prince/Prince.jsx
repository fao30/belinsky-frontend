import React from "react";
import ProjectDetails from "../../ProjectDetails";
import PrinceImg from "../../../../../assets/belinsky-studio/Prince_.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const Prince = () => {
  const dataPrince = [
    {
      title: "Prince",
      byWho: "Belinsky Studio",
      src: PrinceImg,
      byWho2: "Gabriel Prince x YSL",
      desc: "Photographed at our second studio, a collaboration between Gabriel Prince and YSL, showcasing YSL's New Year Collection",
      date: "2023",
      category: "Endorsement Photoshoot",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataPrince?.map(
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

export default Prince;
