import React from "react";
import ProjectDetails from "../../ProjectDetails";
import RoyceImg from "../../../../../assets/belinsky-studio/Royce_.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const Royce = () => {
  const dataRoyce = [
    {
      title: "Royce",
      byWho: "Belinsky Studio",
      src: RoyceImg,
      byWho2: "Fine Art Photography: Hidden Garden",
      desc: "Surreal and dreamy, adapting the beauty of eden concept towards our photoshoot to create a dreamlike pictures of our muse",
      date: "2023",
      category: "Fine-Art Photography",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataRoyce?.map(
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

export default Royce;
