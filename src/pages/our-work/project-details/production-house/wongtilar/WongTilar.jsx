import React from "react";
import ProjectDetails from "../../ProjectDetails";
import WongTilarVid from "./assets/WongTilar.mp4";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

const WongTilar = () => {
  const dataWongTilar = [
    {
      title: "Turah Parthayana",
      byWho: "Production House",
      srcvideo: WongTilarVid,
      byWho2: `Short Film “Wong Tilar”`,
      desc: "As a result of being drunk in the middle of the forest, his friends saw Putu in love with a woman whose identity was unknown.",
      date: "2021",
      category: "Short Film",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataWongTilar?.map(
        ({
          title,
          byWho,
          srcvideo,
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
            srcvideo={srcvideo}
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

export default WongTilar;
