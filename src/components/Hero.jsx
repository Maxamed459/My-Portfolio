import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100 max-w-[90%] container mx-auto py-10 m-10 rounded-[10px] flex flex-col justify-center items-center">
      <h1 className="font-sync uppercase font-[500] text-[40px] md:text-[50px] lg:text-[80px] text-center">
        I'am <span className="text-stroke">Mohamed</span> Mahdi
      </h1>

      <div className="bg-white flex justify-center items-center gap-2 px-5 py-3 md:px-10 md:py-7 mt-5">
        <p className="font-sync text-[10px] md:text-[16px] font-[500] text-gray-500">
          UI Designer
        </p>
        <span className="w-[10px] h-[10px] rounded-full bg-gray-200"></span>
        <p className="font-sync text-[10px] md:text-[16px] font-[500] text-gray-500">
          Fullstack Developer
        </p>
        <span className="w-[10px] h-[10px] rounded-full bg-gray-200"></span>
        <p className="font-sync text-[10px] md:text-[16px] font-[500] text-gray-500">
          Designer
        </p>
      </div>
    </div>
  );
};

export default Hero;
