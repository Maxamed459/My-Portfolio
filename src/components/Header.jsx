import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/myLogo-02.png";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navHandler = () => {
        setIsNavOpen((prev) => !prev);
    };

    const menuItemHandler = () => {
        setIsNavOpen(false);
    };

    return (
        <header className="sticky top-0 z-50">
            <nav className="py-3 px-3 md:px-0 flex justify-between bg-white items-center w-[90%] lg:max-w-6xl mx-auto">
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logo} className="h-10 md:h-12 w-auto" alt="logo" />
                </Link>
                <div className="gap-6 hidden lg:flex">
                    <Link className="hover:text-[#3955E5] font-poppins font-medium" to="/about">
                        About me
                    </Link>
                    <Link className="hover:text-[#3955E5] font-poppins font-medium" to="/portfolio">
                        Portfolio
                    </Link>
                    <Link className="hover:text-[#3955E5] font-poppins font-medium" to="/services">
                        Services
                    </Link>
                    <Link className="hover:text-[#3955E5] font-poppins font-medium" to="/Contacts">
                        Contact Us
                    </Link>
                </div>
                <button className="hidden lg:flex items-center gap-2 border border-gray-300 hover:border-gray-500 px-6 py-2 rounded-lg">
                    <i className="fa-solid fa-right-to-bracket text-[#3955E5]"></i>
                    <span>Get Started</span>
                </button>

                {/* Mobile Menu Button */}
                <button onClick={navHandler} className="lg:hidden">
                    <i className="fa-solid fa-bars text-gray-600 text-3xl"></i>
                </button>

                {/* Mobile Navigation */}
                {isNavOpen && (
                    <div className="fixed z-10 lg:hidden inset-0 p-3 bg-white">
                        <div className="flex justify-between items-center">
                            <Link to="/" className="flex items-center gap-2">
                                <img src={Logo} className="h-10 w-auto" alt="logo" />
                            </Link>
                            <button onClick={navHandler} className="lg:hidden">
                                <i className="fa-solid fa-xmark text-gray-600 text-3xl"></i>
                            </button>
                        </div>

                        <div className="mt-6">
                            <Link onClick={menuItemHandler} className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg" to="/">
                                Home
                            </Link>
                            <Link onClick={menuItemHandler} className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg" to="/PropertyListing">
                                Property Listing
                            </Link>
                            <Link onClick={menuItemHandler} className="block font-medium p-3 mt-3 hover:bg-gray-50 rounded-lg" to="/ContactUs">
                                Contact Us
                            </Link>
                        </div>

                        <div className="h-[1px] bg-gray-300"></div>
                        <button className="w-full flex mt-6 items-center gap-2 hover:bg-gray-50 px-6 py-2 rounded-lg">
                            <i className="fa-solid fa-right-to-bracket text-[#3955E5]"></i>
                            <span>Login</span>
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
