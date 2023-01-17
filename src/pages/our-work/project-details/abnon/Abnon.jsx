import React from "react";
import ProjectDetails from "../ProjectDetails";
import { dataAbnon } from "./constants/DataAbnon";

const Abnon = () => {
  return (
    <>
      {dataAbnon?.map(
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

export default Abnon;
