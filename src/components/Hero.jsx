import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-5 px-3 md:px-3 lg:px-0">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <img
            src="https://i.pinimg.com/1200x/0d/02/08/0d0208281604fa269380bf9573904a19.jpg"
            alt="Main Hero Image"
            className="w-full h-full object-cover rounded-xl hover:scale-98 transition duration-200 ease-in transform"
          />
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <img
            src="https://i.pinimg.com/736x/21/2e/9d/212e9dd6ff2465ef7b4481cc1d5799d1.jpg"
            alt="Secondary Image 1"
            className="w-full object-cover flex-1 rounded-xl hover:scale-98 transition duration-200 ease-in transform"
          />

          <img
            src="https://i.pinimg.com/1200x/4b/87/76/4b877636186d012b81f95c165d483db0.jpg"
            alt="Secondary Image 2"
            className="w-full  object-cover flex-1 rounded-xl hover:scale-98 transition duration-200 ease-in transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
