import React from "react";
import boost1 from "../assets/feature1-min-1.jpg";
import boost2 from "../assets/feature2-min-1.jpg";

const Boost = () => {
  return (
    <div className="px-3">
      <div className="flex items-center gap-1 md:gap-3 lg:gap-5">
        <img src={boost1} alt="" className="object-cover w-1/2" />
        <img src={boost2} alt="" className="object-cover w-1/2" />
      </div>
    </div>
  );
};

export default Boost;
