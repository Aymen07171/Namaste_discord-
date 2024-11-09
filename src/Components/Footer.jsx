import React from 'react';
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            {/* Mobile Version */}
            <footer className="laptop:hidden bg-gradient-to-r from-indigo-600 to-blue-500">
                <div className="container mx-auto px-4 py-8">
                    {/* Logo and Social Icons */}
                    <div className="space-y-6 mb-8">
                        <img
                            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
                            alt="Discord Logo"
                            className="h-8"
                        />
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-blue-200 transition-colors">
                                <FaDiscord className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-blue-200 transition-colors">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-blue-200 transition-colors">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-blue-200 transition-colors">
                                <FaYoutube className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* First Column */}
                        <ul className="space-y-3">
                            <li className="text-blue-200 font-semibold mb-2">Product</li>
                            <li><a href="#" className="text-white hover:text-blue-200 transition-colors text-sm">Download</a></li>
                            <li><a href="#" className="text-white hover:text-blue-200 transition-colors text-sm">Status</a></li>
                            <li><a href="#" className="text-white hover:text-blue-200 transition-colors text-sm">App Directory</a></li>
                            <li><a href="#" className="text-white hover:text-blue-200 transition-colors text-sm">New Mobile</a></li>
                        </ul>

                        {/* Second Column */}
                        <ul className="space-y-3">
                            <li className="text-blue-200 font-semibold mb-2">Company</li>
                            <li><a href="#" className="text-white hover:text-blue-200 transition-colors text-sm">About</a></li>
                            <li><a href="#" className="text-white hover:text-blue-200 transition-colors text-sm">Jobs</a></li>
                            <li><a href="#" className="text-white hover:text-blue-200 transition-colors text-sm">Brand</a></li>
                            <li><a href="#" className="text-white hover:text-blue-200 transition-colors text-sm">Newsroom</a></li>
                        </ul>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-8 pt-6 border-t border-blue-400/30">
                        <select className="bg-transparent text-white border border-blue-400/30 rounded-md px-2 py-1 mb-4 w-full text-sm">
                            <option value="en" className="text-black">English, USA</option>
                            <option value="es" className="text-black">Español</option>
                            <option value="fr" className="text-black">Français</option>
                        </select>
                        <div className="text-sm text-white/80 text-center">
                            © 2024 Discord, Inc. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Laptop Version */}
            <footer className="hidden laptop:block bg-gradient-to-r from-indigo-600 to-blue-500">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-5 gap-8">
                        {/* Logo and Social Column */}
                        <div className="col-span-2">
                            <img
                                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
                                alt="Discord Logo"
                                className="h-12 mb-8"
                            />
                            <div className="flex space-x-6">
                                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                                    <FaDiscord className="w-7 h-7" />
                                </a>
                                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                                    <FaTwitter className="w-7 h-7" />
                                </a>
                                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                                    <FaInstagram className="w-7 h-7" />
                                </a>
                                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                                    <FaYoutube className="w-7 h-7" />
                                </a>
                            </div>
                        </div>

                        {/* Navigation Columns */}
                        <div className="col-span-3 grid grid-cols-3 gap-8">
                            {/* Product Column */}
                            <ul className="space-y-4">
                                <li className="text-blue-200 font-semibold mb-4">Product</li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Download</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Status</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">App Directory</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">New Mobile</a></li>
                            </ul>

                            {/* Company Column */}
                            <ul className="space-y-4">
                                <li className="text-blue-200 font-semibold mb-4">Company</li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">About</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Jobs</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Brand</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Newsroom</a></li>
                            </ul>

                            {/* Resources Column */}
                            <ul className="space-y-4">
                                <li className="text-blue-200 font-semibold mb-4">Resources</li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Support</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Safety</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Blog</a></li>
                                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Feedback</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-16 pt-8 border-t border-blue-400/30 flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <select className="bg-transparent text-white border border-blue-400/30 rounded-md px-4 py-2">
                                <option value="en" className="text-black">English, USA</option>
                                <option value="es" className="text-black">Español</option>
                                <option value="fr" className="text-black">Français</option>
                            </select>
                            <button className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                Sign up
                            </button>
                        </div>
                        <div className="text-sm text-white/80">
                            © 2024 Discord, Inc. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
