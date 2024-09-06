import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">My Portfolio</Link>
            </div>
            <nav className={`space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="shadow-custom-glow"
                    className="cursor-pointer text-gray-900 dark:text-gray-100 hover:shadow-custom-glow"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </Link>

                <Link
                    to="work"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="shadow-custom-glow"
                    className="cursor-pointer text-gray-900 dark:text-gray-100 hover:shadow-custom-glow"
                    onClick={() => setMenuOpen(false)}
                >
                    Work
                </Link>

                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="shadow-custom-glow"
                    className="cursor-pointer text-gray-900 dark:text-gray-100 hover:shadow-custom-glow"
                    onClick={() => setMenuOpen(false)}
                >
                    Projects
                </Link>

                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="shadow-custom-glow"
                    className="cursor-pointer text-gray-900 dark:text-gray-100 hover:shadow-custom-glow"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact Me
                </Link>
            </nav>

            {/* Dark Mode Toggle */}
            <label className="flex items-center cursor-pointer ml-4">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        className="sr-only"
                    />
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div
                        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                            darkMode ? 'transform translate-x-6' : ''
                        }`}
                    ></div>
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">
                    {darkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
            </label>

            <button
                className="md:hidden text-gray-900 dark:text-gray-100 focus:outline-none"
                onClick={toggleMenu}
            >
                {menuOpen ? (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                )}
            </button>
        </header>
    );
};

export default Navbar;