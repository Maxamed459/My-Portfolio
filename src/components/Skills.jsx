import { motion } from "framer-motion";
import { 
  Code2, Database, Globe, Layers, 
  Cpu, Layout, Smartphone, Terminal 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Django & DRF", "Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "bg-green-500/10 text-green-500"
    },
    {
      title: "Mobile App",
      icon: Smartphone,
      skills: ["Flutter", "Supabase", "Firebase", "App Store/Play Store"],
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      title: "Tools & Design",
      icon: Layers,
      skills: ["Figma", "Git", "Docker", "AWS", "Agile/Scrum"],
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sync font-bold"
          >
            Technical <span className="text-gradient">Proficiency</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl border-accent/10 hover:border-accent/30 transition-all group"
            >
              <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-3 text-text-color/70 font-medium">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
