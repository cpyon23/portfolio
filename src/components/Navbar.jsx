import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Function to apply theme based on user preference
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    };

    // Check system's color scheme preference on load
    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        applyTheme(systemTheme.matches ? 'dark' : 'light');

        // Listen for changes in the system's color scheme preference
        const handleThemeChange = (e) => {
            applyTheme(e.matches ? 'dark' : 'light');
        };

        systemTheme.addEventListener('change', handleThemeChange);

        // Cleanup event listener on unmount
        return () => systemTheme.removeEventListener('change', handleThemeChange);
    }, []);

    // Toggle dark mode and store it in localStorage
    const toggleDarkMode = () => {
        const newTheme = darkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-800 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between p-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">My Portfolio</Link>
                </div>

                <nav className="flex space-x-4 mt-4 md:mt-0">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        activeClass="shadow-custom-glow"
                        className="cursor-pointer text-gray-900 dark:text-gray-100 hover:shadow-custom-glow"
                    >
                        Home
                    </Link>

                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        activeClass="shadow-custom-glow"
                        className="cursor-pointer text-gray-900 dark:text-gray-100 hover:shadow-custom-glow"
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
                    >
                        Contact Me
                    </Link>
                </nav>

                {/* Dark Mode Toggle */}
                <label className="flex items-center cursor-pointer mt-4 md:mt-0">
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
            </div>
        </header>
    );
};

export default Navbar;