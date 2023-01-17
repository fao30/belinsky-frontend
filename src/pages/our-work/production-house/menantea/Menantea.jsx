import React from "react";
import ProjectDetails from "../../components/ProjectDetails";
import { dataMenantea } from "./constants/DataMenantea";

const Menantea = () => {
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
