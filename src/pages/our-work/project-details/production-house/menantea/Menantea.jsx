import React from "react";
import ProjectDetails from "../../ProjectDetails";
import MenanteaVid from "./assets/Menantea.mp4";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

const Menantea = () => {
  const dataMenantea = [
    {
      title: "Menantea",
      byWho: "Production House",
      srcvideo: MenanteaVid,
      byWho2: "Product’s Video Advertisement",
      desc: "Menantea is a beverage business with a franchise system founded by Jerome Polin & Jehian. Menantea provides various flavors of tea as well as Indonesian people’s favorite snacks.",
      date: "12 February 2022",
      category: "TVC",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataMenantea?.map(
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

export default Menantea;
