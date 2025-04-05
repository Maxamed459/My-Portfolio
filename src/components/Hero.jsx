import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100 max-w-6xl mx-auto p-10 m-20 rounded-[10px] flex flex-col justify-center items-center">
      <h1 className="font-sync uppercase font-[500] text-[80px] text-center">
        I'am <span className="text-stroke">Mohamed</span> Mahdi
      </h1>

      <div className="w-1/2 bg-white flex justify-center items-center gap-2 p-5  mt-5">
        <p className="font-sync text-[16px] font-[500] text-gray-500">UI Designer</p>
        <span className="w-[10px] h-[10px] rounded-full bg-gray-200"></span>
        <p className="font-sync text-[16px] font-[500] text-gray-500">Fullstack Developer</p>
        <span className="w-[10px] h-[10px] rounded-full bg-gray-200"></span>
        <p className="font-sync text-[16px] font-[500] text-gray-500">Designer</p>
      </div>
    </div>
  );
};

export default Hero;
