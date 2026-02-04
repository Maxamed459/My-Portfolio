import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sync font-bold"
          >
            Let's Build Something <span className="text-gradient">Together</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl border-accent/10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-color/60 font-medium">Email Me</p>
                    <p className="text-lg font-bold">maxamedmahdi459@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-color/60 font-medium">Call Me</p>
                    <p className="text-lg font-bold">+252 613666459</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-color/60 font-medium">Location</p>
                    <p className="text-lg font-bold">Mogadishu, Somalia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl bg-accent/5 border-accent/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent/20 transition-all"></div>
              <h4 className="text-xl font-bold mb-2">Have a specific project?</h4>
              <p className="text-text-color/70 mb-4">I'm currently accepting new freelance projects and full-time opportunities.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-2xl border-accent/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-color/80 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-primary/5 dark:bg-white/5 border border-card-border rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-color/80 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-primary/5 dark:bg-white/5 border border-card-border rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-color/80 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 bg-primary/5 dark:bg-white/5 border border-card-border rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-color/80 ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-primary/5 dark:bg-white/5 border border-card-border rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-accent text-primary font-bold rounded-xl shadow-lg glow flex items-center justify-center gap-3 text-lg"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
