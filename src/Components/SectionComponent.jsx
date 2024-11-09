import React from 'react'

const SectionComponent = () => {
    return (
        <>
            {/* Mobile Version */}
            <div className="laptop:hidden">
                <div className="w-full flex justify-center items-center min-h-[50vh]">
                    <div className='mt-[5px] flex flex-col items-center text-center'>
                        <h1 className='text-white text-3xl font-bold uppercase leading-relaxed'>
                            YOU CAN'T SCROLL
                            <span className="block my-2"></span>
                            ANYMORE.
                            <br />
                            BETTER GO CHAT.
                        </h1>
                        <button className='bg-blue-600 mt-[3rem] mb-[5rem] text-white py-3 px-6 rounded-full
                            hover:bg-blue-700 transition-colors duration-300
                            transform hover:scale-105 active:scale-95'>
                            Download for Windows
                        </button>
                    </div>
                </div>
                {/* Mobile Footer Image */}
                <div className="relative w-full">
                    <img
                        className="w-full h-auto"
                        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut-p-800.webp"
                        alt="Footer Art"
                    />
                    <div className="absolute bottom-0 left-0 w-full">
                        <div className="h-[5px] bg-gradient-to-r from-blue-500 to-purple-500" />
                    </div>
                </div>
            </div>

            {/* Laptop Version */}
            <div className="hidden laptop:block">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <h1 className='text-white text-7xl font-bold uppercase leading-tight text-center max-w-5xl mx-auto'>
                            YOU CAN'T SCROLL
                            <span className="block my-4"></span>
                            ANYMORE.
                            <br />
                            BETTER GO CHAT.
                        </h1>
                        
                        <div className="flex gap-6 mt-12">
                            <button className='bg-blue-600 text-white text-xl py-4 px-8 rounded-full
                                hover:bg-blue-700 transition-all duration-300
                                transform hover:scale-105 active:scale-95
                                shadow-lg hover:shadow-xl'>
                                Download for Windows
                            </button>
                            <button className='bg-gray-700 text-white text-xl py-4 px-8 rounded-full
                                hover:bg-gray-600 transition-all duration-300
                                transform hover:scale-105 active:scale-95
                                shadow-lg hover:shadow-xl'>
                                Open in Browser
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Laptop Footer Image - Full Width */}
                <div className="relative w-full mt-[-100px]"> {/* Negative margin to bring it closer to content */}
                    <img
                        className="w-full h-auto object-cover"
                        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut-p-800.webp"
                        alt="Footer Art"
                    />
                    <div className="absolute bottom-0 left-0 w-full">
                        <div className="h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient-x" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionComponent
