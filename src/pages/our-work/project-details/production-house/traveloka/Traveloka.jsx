import React from "react";
import ProjectDetails from "../../ProjectDetails";
import TravelokaVid from "./assets/Traveloka.mp4";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

const Traveloka = () => {
  const dataTraveloka = [
    {
      title: "Traveloka",
      byWho: "Production House",
      srcvideo: TravelokaVid,
      byWho2: "WASEDA BOYS WITH TRAVELOKA",
      desc: "Waseda Boys have traveled around Indonesia with Traveloka, some of the destinations are Yogyakarta, Bali, Papua, Labuan Bajo, Manado, and Medan.",
      date: "2022",
      category: "Reality Show",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataTraveloka?.map(
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

export default Traveloka;
