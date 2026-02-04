import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, ExternalLink, Download, Code, Palette, Briefcase, Globe } from "lucide-react";
import Me from "../assets/me.jpeg";

const About = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Maxamed459", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/maxamed-mahdi-126a702aa/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/wll__moh4", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/wll.moh4", label: "Facebook" },
  ];

  const services = [
    { icon: Code, title: "Fullstack Development", desc: "Building scalable web apps" },
    { icon: Palette, title: "Web Design", desc: "Crafting beautiful interfaces" },
    { icon: Globe, title: "Mobile App", desc: "Building mobile applications" },
    { icon: Briefcase, title: "Product Design", desc: "End-to-end product strategy" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full"
          >
            <div className="glass p-8 rounded-2xl relative group border-accent/20">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img src={Me} className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Maxamed Mahdi" />
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-2 bg-green-500/20 backdrop-blur-md text-green-400 text-xs font-bold px-3 py-1.5 rounded-full border border-green-500/30">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available for Work
                  </span>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-sync font-bold mb-1">MAXAMED MAHDI</h3>
                <p className="text-accent font-medium">Full-Stack Developer</p>
              </div>

              <div className="flex justify-center gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="p-3 glass rounded-xl hover:bg-accent hover:text-primary transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-sync font-bold leading-tight mb-8">
                I'm Maxamed Mahdi – a Mogadishu-based 
                <span className="text-accent underline decoration-accent/30 underline-offset-8 decoration-2 ml-3">Full-Stack Developer</span>
              </h2>
              
              <p className="text-xl text-text-color/70 mb-10 leading-relaxed">
                Passionate about building scalable digital solutions for Somalia's tech ecosystem. 
                I combine cutting-edge technologies with local context to drive meaningful change 
                and create high-impact web applications.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="/Maxamed Mahdi.pdf"
                  target="_blank"
                  className="px-8 py-4 bg-primary dark:bg-accent text-white dark:text-primary font-bold rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
                >
                  <Download size={20} /> Download CV
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 glass text-text-color font-bold rounded-2xl flex items-center gap-2 hover:bg-accent hover:text-primary transition-all"
                >
                  Work with me <ExternalLink size={20} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 glass rounded-3xl hover:border-accent/40 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon size={24} className="text-accent" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-text-color/60">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
