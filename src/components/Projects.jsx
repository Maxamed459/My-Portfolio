import React from "react";
import me from "../assets/me.jpg";
import chatApp from "../assets/chatApp.jpg";
import realState from "../assets/realState.jpg";
import nutritionApp from "../assets/nutritionApp.jpg";
import landingPage from "../assets/landingPage.jpg";
import moviesApp from "../assets/moviesApp.jpg";

const Projects = () => {
  const info = [
    {
      img: chatApp,
      type: "Chat App",
      name: "SIU Connect",
      role: "Full Stack Developer",
      Demo: "https://fect-chat-app.vercel.app/",
    },
    {
      img: realState,
      type: "Website",
      name: "moha-real-state",
      role: "Full Stack Developer",
      Demo: "https://moha-real-state.netlify.app/",
    },
    {
      img: nutritionApp,
      type: "Food tracker App",
      name: "sola-delta",
      role: "Frontend Development participation",
      Demo: "https://sola-delta.vercel.app/",
    },
    {
      img: landingPage,
      type: "Landing Page",
      name: "landing-groupe",
      role: "Frontend Developer",
      Demo: "https://landing-groupe.netlify.app/",
    },
    {
      img: moviesApp,
      type: "Movies Website",
      name: "moha-movies",
      role: "Full Stack Developer",
      Demo: "https://moha-movies.netlify.app/",
    },
    {
      img: me,
      type: "Website",
      name: "moha-real-state",
      role: "Full Stack Developer",
      Demo: "https://moha-real-state.netlify.app/",
    },
  ];

  return (
    <div className="container py-10 mx-auto">
      <div className="text-center mb-10 space-y-5">
        <h4 className="text-xl font-sync">Works</h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sync mb-4">
          Creative Portfolio
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {info.map((project, index) => (
          <div key={index} className="bg-white overflow-hidden m-2 group ">
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt="project image"
                className="w-full object-cover group-hover:scale-103 transition-transform duration-300"
              />
              <a
                href={project.Demo}
                className="text-white font-sync text-xl absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <i className="fas fa-eye mr-2 text-white"></i>
                View Demo
              </a>
            </div>

            <div className="p-4 border-1 border-gray-300 rounded-xl rounded-t-none border-t-0">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.type}</p>
              <p className="mb-4 border-l-3 border-[#000b58] p-2 text-[#000b58] font-sync">
                {project.role}
              </p>
              <button className="demoButton mb-4 block lg:hidden">
                <a
                  href={project.Demo}
                  className="bg-[#000b58] text-white px-4 py-2 rounded hover:bg-[#000b58]/80 transition-colors duration-300"
                >
                  View Demo
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
