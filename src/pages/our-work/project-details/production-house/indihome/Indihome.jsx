import React from "react";
import ProjectDetails from "../../ProjectDetails";
import IndihomeVid from "./assets/Indihome.mp4";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img from "./assets/rifki.png";

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
      director: true,
      nameDirector: "RIfki Rifaldi",
      imgDirector: img,
      descDirector:
        "Rifki Rifaldi is a director who has produced various forms of audio visual works. Not few of his works are involved in various short film festivals and have been winning many province, national to international levels. Then his works get the opportunity to be used as discussion/screening materials in various communities, schools, campus in Jabodetabek and Banten. His love for audio visual world has also encouraged him to transmit his experience and science to many people including students. In 2021, Rifki Rifaldi begin working on a film series that is the first film series to bring esport themes in Southest Asia, show at one ott household and get the highest rating on ott vision+.",
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
          nameDirector,
          imgDirector,
          descDirector,
          director,
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
            nameDirector={nameDirector}
            imgDirector={imgDirector}
            descDirector={descDirector}
            director={director}
          />
        )
      )}
    </>
  );
};

export default Indihome;
