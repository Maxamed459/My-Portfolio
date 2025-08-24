import { useState, useEffect } from "react";
import Logo from "../assets/myLogo-02.png";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navHandler = () => {
    setIsNavOpen((prev) => !prev);
  };

  const menuItemHandler = () => {
    setIsNavOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-md mx-auto ${
        hasScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="py-3 px-3 md:px-0 flex container justify-between items-center mx-auto">
        <a href="#" className="flex items-center gap-2">
          <img src={Logo} className="h-10 md:h-12 w-auto" alt="logo" />
        </a>
        <div className="gap-6 hidden lg:flex">
          <a
            className="hover:text-[#000b58] font-poppins font-medium"
            href="#about"
          >
            About me
          </a>
          <a
            className="hover:text-[#000b58] font-poppins font-medium"
            href="#projects"
          >
            projects
          </a>
          <a
            className="hover:text-[#000b58] font-poppins font-medium"
            href="#services"
          >
            Services
          </a>
          <a
            className="hover:text-[#000b58] font-poppins font-medium"
            href="#Contacts"
          >
            Contacts
          </a>
        </div>
        <button className="hidden lg:flex items-center gap-2 border border-gray-300 hover:border-gray-500 px-6 py-2 rounded-lg">
          <i className="fa-solid fa-right-to-bracket text-[#000b58]"></i>
          <a
            href="/Maxamed_Mahdi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </button>

        {/* Mobile Menu Button */}
        <button onClick={navHandler} className="lg:hidden">
          <i className="fa-solid fa-bars text-gray-600 text-3xl"></i>
        </button>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <div className="fixed z-10 lg:hidden inset-0 container mx-auto py-3 px-7 bg-white">
            <div className="flex justify-between items-center">
              <a
                onClick={menuItemHandler}
                href="#hero"
                className="flex items-center gap-2"
              >
                <img src={Logo} className="h-10 w-auto" alt="logo" />
              </a>
              <button onClick={navHandler} className="lg:hidden">
                <i className="fa-solid fa-xmark text-gray-600 text-3xl"></i>
              </button>
            </div>

            <div className="mt-6">
              <a
                onClick={menuItemHandler}
                className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg"
                href="#about"
              >
                about
              </a>
              <a
                onClick={menuItemHandler}
                className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg"
                href="#projects"
              >
                projects
              </a>
              <a
                onClick={menuItemHandler}
                className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg"
                href="#services"
              >
                services
              </a>
              <a
                onClick={menuItemHandler}
                className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg"
                href="#Contacts"
              >
                Contacts
              </a>
            </div>

            <div className="h-[1px] bg-gray-300"></div>
            <button className="w-full flex mt-6 items-center gap-2 hover:bg-gray-50 px-6 py-2 rounded-lg">
              <i className="fa-solid fa-right-to-bracket text-[#000b58]"></i>
              <a
                href="/Maxamed_Mahdi_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </a>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
