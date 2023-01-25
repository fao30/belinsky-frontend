import React from "react";
import ProjectDetails from "../../ProjectDetails";
import IndihomeVid from "./assets/Indihome.mp4";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const Indihome = () => {
  const dataIndihome = [
    {
      title: "Indihome",
      byWho: "Production House",
      srcvideo: IndihomeVid,
      byWho2: `Webseries “Indihome”`,
      desc: "This time, Tretan Muslim and Dustin Tiffany had to try their luck to become an Indihome technician who is always patient when dealing with customers, meanwhile Dustin is a new innocent technician.",
      date: "2021",
      category: "Series",
      img1: img1,
      img2: img2,
      img3: img3,
    },
  ];
  return (
    <>
      {dataIndihome?.map(
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

export default Indihome;
