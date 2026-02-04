import { Rocket, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import logo from "../assets/myLogo-02.png";
import darkLogo from "../assets/darkLogo.png";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="py-12 border-t border-card-border glass mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={ theme === "dark" ? darkLogo : logo } className="w-54" alt="logo" />
            <p className="text-text-color/60 max-w-xs font-medium uppercase text-xs tracking-widest">
              Full-Stack Developer building the future of Somalia's tech.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/Maxamed459" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Mail, href: "mailto:contact@example.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-3 glass rounded-xl hover:bg-accent hover:text-primary transition-all hover:scale-110"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-sm font-medium text-text-color/80 flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by Mohamed Mahdi
            </p>
            <p className="text-xs text-text-color/40 mt-1 uppercase tracking-widest">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
