import React, { useState, useEffect } from 'react'
import closeicon from '../assets/close.svg'

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isLaptopScreen = window.innerWidth >= 1024;

            if (isLaptopScreen) {
                if (currentScrollY > 5) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
                }
            } else {
                if (currentScrollY > 5) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            {/* Phone Header */}
            <header className={`laptop:hidden w-full fixed top-0 left-0 z-50 transition-all duration-300
                ${isScrolled ? 'bg-blue-900' : 'bg-transparent'}`}>
                <div className='container mx-auto px-4'>
                    <div className='flex items-center justify-between py-4'>
                        <img
                            className='w-32'
                            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
                            alt="Discord Logo"
                        />
                        <button
                            onClick={toggleActiveClass}
                            className="block"
                            aria-label="Toggle Menu"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/625846fc39fbe53385840143_1%20(3).svg"
                                alt="Menu Icon"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isActive && (
                    <nav className='fixed right-0 top-0 w-[300px] h-screen bg-white shadow-2xl'>
                        <ul className="flex flex-col p-6 space-y-6">
                            <div className='flex flex-row justify-between items-center'>
                                <img
                                    className="w-[7rem] brightness-75 hue-rotate-25 contrast-100"
                                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
                                    alt="Discord Logo"
                                />
                                <button onClick={toggleActiveClass}>
                                    <img
                                        className='w-[20px]'
                                        src={closeicon}
                                        alt="Close Menu"
                                    />
                                </button>
                            </div>
                            <li className='hover:text-blue-600 cursor-pointer'>Support</li>
                            <li className='hover:text-blue-600 cursor-pointer'>Nitro</li>
                            <li className='hover:text-blue-600 cursor-pointer'>Quests</li>
                            <li className='hover:text-blue-600 cursor-pointer'>Safety</li>
                            <li className='hover:text-blue-600 cursor-pointer'>Support</li>
                            <li className='hover:text-blue-600 cursor-pointer'>Blog</li>
                            <div className="mt-auto">
                                <button className='bg-blue-600 text-white py-3 px-6 rounded-full w-full'>
                                    Download for Windows
                                </button>
                            </div>
                        </ul>
                    </nav>
                )}
            </header>

            {/* Laptop Header */}
            <header className={`hidden laptop:block w-full fixed top-0 left-0 z-50 transition-all duration-300
                ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className='container mx-auto px-4'>
                    <div className='flex items-center justify-between py-4'>
                        <img
                            className='w-40'
                            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
                            alt="Discord Logo"
                        />
                        <nav className='flex items-center'>
                            <ul className="flex items-center space-x-8">
                                <li className='text-white hover:text-blue-600 cursor-pointer'>Support</li>
                                <li className='text-white hover:text-blue-600 cursor-pointer'>Nitro</li>
                                <li className='text-white hover:text-blue-600 cursor-pointer'>Quests</li>
                                <li className='text-white hover:text-blue-600 cursor-pointer'>Safety</li>
                                <li className='text-white hover:text-blue-600 cursor-pointer'>Support</li>
                                <li className='text-white hover:text-blue-600 cursor-pointer'>Blog</li>
                                <button className='bg-white text-blue-600 py-3 px-6 rounded-full 
                                    hover:bg-gray-100 transition-colors duration-300'>
                                    Login Discord
                                </button>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
