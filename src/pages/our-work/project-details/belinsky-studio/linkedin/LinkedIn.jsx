import React from "react";
import ProjectDetails from "../../ProjectDetails";
import LinkedInImg from "../../../../../assets/belinsky-studio/LinkedIn_.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const LinkedIn = () => {
  const dataLinkedIn = [
    {
      title: "LinkedIn",
      byWho: "Belinsky Studio",
      src: LinkedInImg,
      byWho2: "LinkedIn Professional Profile Photoshoot",
      desc: "A much needed photoshoot for LinkedIn profile to enchance your professionalism and level up your LinkedIn profile. This session is available for either personal needs or company needs",
      date: "2022",
      category: "Model Photography",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataLinkedIn?.map(
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

export default LinkedIn;
