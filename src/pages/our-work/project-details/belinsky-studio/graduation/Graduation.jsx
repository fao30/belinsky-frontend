import React from "react";
import ProjectDetails from "../../ProjectDetails";
import GraduationImg from "../../../../../assets/belinsky-studio/Graduation_.png";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const Graduation = () => {
  const dataGraduation = [
    {
      title: "Graduation",
      byWho: "Belinsky Studio",
      src: GraduationImg,
      byWho2: "Graduation Photoshoot",
      desc: "A once in a lifetime moment that needs to be cherished. Our studio is a perfect set for anyone to have their Graduation Photoshoot with their loved ones",
      date: "2022",
      category: "Occasional Photoshoot",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataGraduation?.map(
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

export default Graduation;
