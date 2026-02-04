import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-bold tracking-[0.2em] uppercase mb-6"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl font-sync font-bold leading-tight mb-8"
          >
            MAXAMED 
            <span className="text-gradient"> MAHDI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-text-color/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Web Developer. Building modern, high-performance web applications with a focus on user experience and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <a
              href="#projects"
              className="px-10 py-5 bg-accent text-primary font-bold rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-xl glow text-lg"
            >
              View Projects <ArrowRight size={22} />
            </a>
            <a
              href="#contact"
              className="px-10 py-5 border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent hover:text-primary transition-all shadow-md text-lg"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex justify-center gap-8"
          >
            {[
              { icon: Github, href: "https://github.com/Maxamed459" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/maxamed-mahdi-126a702aa/" },
              { icon: Mail, href: "mailto:[maxamedmahdi459@gmail.com]" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-4 glass rounded-xl hover:bg-accent hover:text-primary transition-all hover:-translate-y-1"
              >
                <social.icon size={28} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
