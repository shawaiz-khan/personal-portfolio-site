/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../components/ThemeContext';
import { ul, li, span, button } from 'framer-motion/client';

const NavBar: FC = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuToggle = () => setIsOpen(!isOpen);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 50);
    };

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 2000);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky ${isSticky ? 'top-4' : ''} z-20`}>
            <nav className={`bg-lightGray text-secondary dark:bg-darkBackground h-20 flex justify-between items-center px-6 ${isSticky ? 'rounded-full mx-4' : ''} transition-all duration-300 shadow-lg`}>
                <div className="cursor-pointer flex items-center gap-1 font-semibold text-3xl text-secondary dark:text-darkText">
                    <span className='text-highlight font-fira'>&lt;</span>
                    <h1 className="font-fira">SK</h1>
                    <span className='text-highlight font-fira'>/&gt;</span>
                </div>

                <ul className='font-poppins hidden text-xl gap-7 text-secondary dark:text-darkText md:flex'>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group'>
                        HOME
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                    <li className="relative group">
                        <button
                            className='font-semibold relative group z-10 text-secondary dark:text-darkText hover:text-highlight transition-all duration-200 ease-in'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            ABOUT
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        </button>
                        <ul className={`absolute top-full left-0 transform -translate-x-1/2 mt-2 bg-lightGray dark:bg-darkBackground text-secondary dark:text-darkText w-48 ${isMenuOpen ? 'opacity-100' : 'hidden'} border border-highlight rounded-md shadow-md transition-opacity duration-200 ease-in`}>
                            <li className='font-semibold p-2 hover:bg-highlight hover:text-secondary cursor-pointer transition-all duration-200 ease-in'>
                                Experience
                            </li>
                            <li className='font-semibold p-2 hover:bg-highlight hover:text-secondary cursor-pointer transition-all duration-200 ease-in'>
                                Education
                            </li>
                        </ul>
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group'>
                        SKILLS
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group'>
                        PROJECTS
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group'>
                        TESTIMONIALS
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group'>
                        CONTACT
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                </ul>

                <div className='flex gap-3'>
                    <ThemeToggle />
                    <button className='bg-highlight hover:text-highlight w-48 h-9 rounded-md text-lightGray font-poppins font-semibold hover:bg-secondary transition-colors duration-200 ease-in text-lg hidden md:flex md:justify-center md:items-center'>
                        BOOK A MEETING
                    </button>
                </div>

                <button className="md:hidden" onClick={menuToggle}>
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>

                <div className={`fixed bottom-0 top-0 right-0 bg-secondary dark:bg-darkBackground p-6 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`} style={{ width: '55%' }}>
                    <ul className='flex flex-col font-poppins font-semibold text-xl gap-7 text-secondary dark:text-darkText'>
                        <li className='py-2 cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={menuToggle}>HOME</li>
                        <li className='py-2 cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={menuToggle}>ABOUT</li>
                        <li className='py-2 cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={menuToggle}>SKILLS</li>
                        <li className='py-2 cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={menuToggle}>PROJECTS</li>
                        <li className='py-2 cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={menuToggle}>TESTIMONIALS</li>
                        <li className='py-2 cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={menuToggle}>CONTACT</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;