import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import chatApp from "../assets/chatApp.jpg";
import realState from "../assets/realState.jpg";
import nutritionApp from "../assets/nutritionApp.jpg";
import landingPage from "../assets/landingPage.jpg";
import moviesApp from "../assets/moviesApp.jpg";
import todoApp from "../assets/todoApp.jpg";
import next_movie_app from "../assets/next-movie-app.png";
import bixidhiig from "../assets/bixi-dhiig.png"
import taloplus from "../assets/talo-plus.png"
import tasky from "../assets/tasky.png"

const Projects = () => {
  const projects = [
    {
      img: chatApp,
      title: "SIU Connect",
      desc: "A real-time chat application with group messaging and private chat functionality.",
      tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
      demo: "https://fect-chat-app.vercel.app/",
      github: "https://github.com/Maxamed459",
    },
    {
      img: bixidhiig,
      title: "bixi-dhiig",
      desc: "🩸 Blood Bank Management System A full-stack web app that connects donors, patients, staff, and admins to manage blood donation and requests. ✨ Features User registration & login (JWT) Role-based access (User, Staff, Admin) Request & approve blood donations Automatic email notifications to matching donors Track available blood types",
      tech: ["React", "Next Js", "Node.js", "Express", "Postgresql", "Prisma", "Tailwind CSS", "shadcn/ui", "JWT", "Email Notifications", "Role-based access", "Nodemailer"],
      demo: "https://bixi-dhiig.vercel.app/",
      github: "https://github.com/Maxamed459/Blood-Bank-Management-system",
    },
    {
      img: taloplus,
      title: "talo-plus",
      desc: "Talo+ is a full-stack healthcare Q&A platform inspired by StackOverflow, specifically designed for medical questions and answers. It allows users to post medical questions about symptoms or health concerns, and receive answers from medical professionals like doctors, nurses, medical students, pharmacists, and coaches.",
      tech: ["React", "Next Js", "Node.js", "Express", "Postgresql", "Prisma", "Tailwind CSS", "shadcn/ui", "JWT", "Email Notifications", "Role-based access", "Nodemailer"],
      demo: "https://talo-plus.vercel.app",
      github: "https://github.com/Maxamed459/Talo-plus",
    },
    {
      img: tasky,
      title: "Tasky",
      desc: "Welcome to Tasky Here you can track your tasks and see whether task is done or pending or undone it`s built very robust backend using Django Rest Framework for building API`s",
      tech: ["React", "Next Js", "Django", "Django Rest Framework", "Simple JWT", "sqlite", "Tailwind CSS"],
      demo: "https://github.com/Maxamed459/Task_Management_frontend",
      github: "https://github.com/Maxamed459/Task_Management_backend",
    },
    {
      img: realState,
      title: "Moha Real State",
      desc: "A modern real estate platform for listing and browsing properties with advanced filtering.",
      tech: ["React", "Tailwind CSS"],
      demo: "https://moha-real-state.netlify.app/",
      github: "https://github.com/Maxamed459",
    },
    {
      img: nutritionApp,
      title: "Sola Delta",
      desc: "Food tracker and nutrition monitoring app to help users maintain a healthy lifestyle.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      demo: "https://sola-delta.vercel.app/",
      github: "https://github.com/Maxamed459",
    },
    {
      img: landingPage,
      title: "Landing Groupe",
      desc: "Corporate landing page focused on performance and modern design aesthetics.",
      tech: ["HTML", "Tailwind CSS"],
      demo: "https://landing-groupe.netlify.app/",
      github: "https://github.com/Maxamed459",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card-bg/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sync font-bold"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all border-accent/10 hover:border-accent/30 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.img}
                  alt={`${project.title} - ${project.desc.substring(0, 50)}...`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="p-3 bg-accent text-primary rounded-xl hover:scale-110 transition-transform"
                    title="Live Demo"
                  >
                    <Eye size={24} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:scale-110 transition-transform border border-white/30"
                    title="GitHub"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-color/70 mb-6 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-lg border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex-1 py-3 bg-accent text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                    >
                      Demo <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-3 glass rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors border-accent/10"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
