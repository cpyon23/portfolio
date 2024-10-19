import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { userinfo } from '../constants/userinfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    };

    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
        applyTheme(systemTheme.matches ? 'dark' : 'light');

        const handleThemeChange = (e) => {
            applyTheme(e.matches ? 'dark' : 'light');
        };

        systemTheme.addEventListener('change', handleThemeChange);
        return () => systemTheme.removeEventListener('change', handleThemeChange);
    }, []);

    const toggleDarkMode = () => {
        const newTheme = darkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    useEffect(() => {
        const fadeThreshold = 100;
        let lastScrollY = window.scrollY;
    
        const handleScroll = () => {
            if (window.scrollY > fadeThreshold && lastScrollY <= window.scrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => window.scrollY > 100 && setIsVisible(false);

    return (
        <header 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`fixed top-1 inset-x-0 z-50 mx-auto max-w-xl rounded-full bg-gray-100 dark:bg-gray-700 shadow-md transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="flex items-center justify-between p-4">
                 {/* Social Icons at the Bottom */}
                <div className="flex justify-center space-x-3">
                    {userinfo.socials.map((social, index) => (
                        <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-gray-100 hover:text-blue-500"
                        >
                        <FontAwesomeIcon icon={social.icon} size="x" />
                        </a>
                    ))}
                </div>
                {/* Center the menu links */}
                <nav className="flex-grow flex justify-center space-x-4">
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

                {/* Dark Mode Toggle aligned to the right */}
                <div className="ml-auto flex items-center">
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                className="sr-only"
                            />
                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div
                                className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${darkMode ? 'transform translate-x-6' : ''}`}
                            ></div>
                        </div>
                        <span className="ml-3 text-gray-700 dark:text-gray-300">
                            {darkMode ? '☀️' : '🌙'}
                        </span>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
