import React from "react";

import movie from "../assets/short_movie.svg";
// import tvc from "../assets/tvc.svg";
import webseries from "../assets/web_series.svg";
import { BiMovie } from "react-icons/bi";
// import Vector from "../assets/Vector.png";

export const dataButton = [
  {
    // icon: Vector,
    name: "TVC",
  },
  {
    // icon: webseries,
    name: "Web Series",
  },
  {
    icon: <BiMovie size={20} />,
    name: "Short Movie",
  },
];
