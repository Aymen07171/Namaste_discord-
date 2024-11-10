import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import closeicon from '../assets/close.svg';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isLaptopScreen = window.innerWidth >= 1024;

      if (isLaptopScreen) {
        if (currentScrollY > lastScrollY && currentScrollY > 5) {
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

  const handleAuthAction = async () => {
    if (user) {
      try {
        await logout();
        navigate('/');
      } catch (error) {
        console.error('Failed to log out:', error);
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      {/* Phone Header */}
      <header 
        className={`laptop:hidden w-full fixed top-0 left-0 z-50 transition-all duration-300
          ${isScrolled ? 'bg-blue-900/95 backdrop-blur-sm' : 'bg-transparent'}`}
      >
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

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleActiveClass}
        />

        {/* Mobile Navigation Sidebar */}
        <div 
          className={`fixed right-0 top-0 w-[300px] h-screen bg-white transform transition-transform duration-300 ease-in-out ${
            isActive ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="p-6">
              <div className='flex justify-between items-center mb-8'>
                <img
                  className="w-[7rem]"
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
                  alt="Discord Logo"
                />
                <button 
                  onClick={toggleActiveClass}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <img
                    className='w-[20px]'
                    src={closeicon}
                    alt="Close Menu"
                  />
                </button>
              </div>

              <nav className="space-y-6">
                <a href="#" className="block text-gray-800 hover:text-blue-600 transition-colors">Support</a>
                <a href="#" className="block text-gray-800 hover:text-blue-600 transition-colors">Nitro</a>
                <a href="#" className="block text-gray-800 hover:text-blue-600 transition-colors">Quests</a>
                <a href="#" className="block text-gray-800 hover:text-blue-600 transition-colors">Safety</a>
                <a href="#" className="block text-gray-800 hover:text-blue-600 transition-colors">Blog</a>
                {user && (
                  <button 
                    onClick={() => {
                      navigate('/dashboard');
                      toggleActiveClass();
                    }}
                    className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    Dashboard
                  </button>
                )}
              </nav>
            </div>

            <div className="mt-auto p-6 border-t">
              <button
                onClick={() => {
                  handleAuthAction();
                  toggleActiveClass();
                }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
              >
                {user ? 'Logout' : 'Login Discord'}
              </button>
              <button className="w-full mt-4 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
                Download for Windows
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Laptop Header */}
      <header 
        className={`hidden laptop:block w-full fixed top-0 left-0 z-50 transition-all duration-300
          ${isHidden ? '-translate-y-full' : 'translate-y-0'}
          ${isScrolled ? 'bg-blue-900/95 backdrop-blur-sm' : 'bg-transparent'}`}
      >
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between py-4'>
            <img
              className='w-40'
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
              alt="Discord Logo"
            />
            <nav className='flex items-center'>
              <ul className="flex items-center space-x-8">
                <li className='text-white hover:text-blue-600 cursor-pointer transition-colors'>Support</li>
                <li className='text-white hover:text-blue-600 cursor-pointer transition-colors'>Nitro</li>
                <li className='text-white hover:text-blue-600 cursor-pointer transition-colors'>Quests</li>
                <li className='text-white hover:text-blue-600 cursor-pointer transition-colors'>Safety</li>
                <li className='text-white hover:text-blue-600 cursor-pointer transition-colors'>Blog</li>
                {user && (
                  <li className='text-white hover:text-blue-600 cursor-pointer transition-colors'>
                    <button onClick={() => navigate('/dashboard')}>Dashboard</button>
                  </li>
                )}
                <button
                  onClick={handleAuthAction}
                  className='bg-white text-blue-600 py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300'
                >
                  {user ? 'Logout' : 'Login Discord'}
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
