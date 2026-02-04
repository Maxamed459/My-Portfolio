import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Rocket } from "lucide-react";
import { useTheme } from "./ThemeContext";
import logo from "../assets/myLogo-02.png";
import darkLogo from "../assets/darkLogo.png";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        hasScrolled 
          ? "py-3 glass shadow-lg backdrop-blur-md rounded-full" 
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src={ theme === "dark" ? darkLogo : logo } className="w-54" alt="logo" />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="font-medium hover:text-accent transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-card-border pl-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-card-bg transition-colors overflow-hidden relative"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                  >
                    <Sun className="w-5 h-5 text-accent" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                  >
                    <Moon className="w-5 h-5 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-accent text-primary font-bold rounded-lg hover:scale-105 transition-transform shadow-lg glow"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-card-bg"
          >
            {theme === "dark" ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="p-2 text-text-color"
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-card-border overflow-hidden rounded-xl mt-2"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsNavOpen(false)}
                    className="text-lg font-medium block hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-card-border">
                <a
                  href="#contact"
                  onClick={() => setIsNavOpen(false)}
                  className="w-full py-3 bg-accent text-primary font-bold rounded-xl flex items-center justify-center shadow-lg"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
