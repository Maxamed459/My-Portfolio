import React from "react";
import Me from "../assets/me.jpg";

const Home = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-center py-20 gap-5 items-center container mx-auto"
    >
      <div className="max-w-[90%] lg:w-1/3 flex flex-col items-center rounded-[10px] p-9 border-[1px] border-slate-200">
        <img src={Me} className="w-full rounded-md" alt="my image" />
        <div className="mt-4 space-y-1 text-center">
          <h3 className="font-sync text-xl uppercase font-[500]">
            Mohamed Mahdi
          </h3>
          <p className="flex items-center justify-center mx-auto p-2 rounded-full border-1">
            Available for Work
            <span
              className="w-2 h-2 mt-[2px] bg-[#00FF00] rounded-full mx-2"
              id="available"
            ></span>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border-1 border-slate-200 rounded-md px-4 py-2 mt-4 group">
            <a href="https://www.facebook.com/wll.moh4">
              <i className="fa-brands fa-facebook text-xl opacity-70 group-hover:opacity-100 transition duration-300"></i>
            </a>
          </button>
          <button className="border-1 border-slate-200 rounded-md px-4 py-2 mt-4 group">
            <a href="https://github.com/Maxamed459">
              <i className="fa-brands fa-github text-xl opacity-70 group-hover:opacity-100 transition duration-300"></i>
            </a>
          </button>
          <button className="border-1 border-slate-200 rounded-md px-4 py-2 mt-4 group">
            <a href="https://x.com/wll__moh4">
              <i className="fa-brands fa-twitter text-xl opacity-70 group-hover:opacity-100 transition duration-300"></i>
            </a>
          </button>
          <button className="border-1 border-slate-200 rounded-md px-4 py-2 mt-4 group">
            <a href="https://www.linkedin.com/in/maxamed-mahdi-126a702aa/">
              <i className="fa-brands fa-linkedin text-xl opacity-70 group-hover:opacity-100 transition duration-300"></i>
            </a>
          </button>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto lg:w-2/3 flex flex-col mt-8 lg:mt-0">
        <h2 className="text-3xl leading-[50px] lg:leading-[72px] lg:text-[50px] font-medium font-sync lg:mt-0">
          Hello, I’m Mohamed Mahdi,{" "}
          <span className="border-1 border-slate-300 px-[20px] ">
            Full-Stack Developer
          </span>{" "}
          Building Solutions for Somalia's Digital Future Based in Mogadishu.
        </h2>
        <button className="w-[220px] px-6 py-3 text-center bg-[#000b58] text-white ring-1 ring-black hover:bg-transparent hover:text-black duration-500 mt-8">
          Download cv
        </button>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <p className="flex items-center gap-2 text-gray-500">
            <i className="fa-solid fa-laptop-code text-[#000b58]"></i>
            Fullstack web development
          </p>
          <p className="flex items-center gap-2 text-gray-500">
            <span>
              <i className="fa-solid fa-pen-nib text-[#000b58]"></i>
            </span>
            Logo Design
          </p>
          <p className="flex items-center gap-2 text-gray-500">
            <i className="fa-regular fa-id-badge text-[#000b58]"></i>
            Branding Identity
          </p>
          <p className="flex items-center gap-2 text-gray-500">
            <i className="fa-solid fa-window-restore text-[#000b58]"></i>
            Web Design
          </p>
          <p className="flex items-center gap-2 text-gray-500">
            <i className="fa-solid fa-photo-film text-[#000b58]"></i>
            Social Marketing
          </p>
          <p className="flex items-center gap-2 text-gray-500">
            <i className="fa-brands fa-product-hunt text-[#000b58]"></i>
            Product Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
