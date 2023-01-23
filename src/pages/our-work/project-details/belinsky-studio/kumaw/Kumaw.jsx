import React from "react";
import ProjectDetails from "../../ProjectDetails";
import KumawImg from "../../../../../assets/belinsky-studio/Kumaw_.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const Kumaw = () => {
  const dataKumaw = [
    {
      title: "Kumaw",
      byWho: "Belinsky Studio",
      src: KumawImg,
      byWho2: "Kumaw",
      desc: "Exhibiting various choices of the appetizing menu, we had a product photoshoot for Kumaw Ramen",
      date: "2022",
      category: "Product Photoshoot",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataKumaw?.map(
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

export default Kumaw;
