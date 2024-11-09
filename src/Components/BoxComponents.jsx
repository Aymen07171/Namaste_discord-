import React from 'react';

const BoxComponents = ({
    title,
    description,
    videoSrc,
    gradientFrom = "cyan-500",
    gradientTo = "blue-500",
    iconImage
}) => {
    return (
        <>
            {/* Mobile Version */}
            <div className="laptop:hidden p-4 mt-8 relative">
                <div className="relative">
                    {/* Floating Icon */}
                    {iconImage && (
                        <div className="absolute -top-8 left-8 z-10">
                            <div className={`
                                w-16 h-16
                                rounded-xl
                                shadow-lg
                                p-3
                                bg-gradient-to-r from-purple-500 to-blue-500
                                animate-[float_3s_ease-in-out_infinite]
                                transition-all
                                duration-300
                                hover:shadow-xl
                                relative
                                overflow-hidden
                            `}>
                                <img
                                    src={iconImage}
                                    alt="Feature Icon"
                                    className="w-full h-full object-contain relative z-10"
                                />
                            </div>
                        </div>
                    )}

                    {/* Content Container */}
                    <div className="backdrop-blur-md bg-white/30 rounded-xl border border-white/20 shadow-lg p-6">
                        {/* Text Content */}
                        <h1 className="text-3xl font-bold text-white mb-4">
                            {title}
                        </h1>
                        <p className="text-white text-base mb-6">
                            {description}
                        </p>

                        {/* Video Container */}
                        <div className={`
                            relative
                            rounded-xl
                            overflow-hidden
                            bg-gradient-to-r from-${gradientFrom} to-${gradientTo}
                            p-[2px]
                        `}>
                            <div className='relative w-full aspect-video bg-white rounded-xl overflow-hidden'>
                                <video
                                    className='w-full h-full object-cover'
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Laptop Version */}
            <div className="hidden laptop:block w-full max-w-[1400px] mx-auto px-8 my-16">
                <div className="relative">
                    {/* Floating Icon */}
                    {iconImage && (
                        <div className="absolute -top-8 left-8 z-10">
                            <div className={`
                                w-20 h-20
                                rounded-xl
                                shadow-lg
                                p-4
                                bg-gradient-to-r from-purple-500 to-blue-500
                                animate-[float_3s_ease-in-out_infinite]
                                hover:animate-[pulse_1s_ease-in-out_infinite]
                                transition-all
                                duration-300
                                hover:shadow-xl
                                before:content-['']
                                before:absolute
                                before:inset-0
                                before:bg-gradient-to-r
                                before:from-purple-500/50
                                before:to-blue-500/50
                                before:rounded-xl
                                before:animate-[glow_2s_ease-in-out_infinite]
                                relative
                                overflow-hidden
                            `}>
                                <img
                                    src={iconImage}
                                    alt="Feature Icon"
                                    className="w-full h-full object-contain relative z-10 transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    )}

                    {/* Main Content Container */}
                    <div className="backdrop-blur-md bg-white/30 rounded-xl border border-white/20 shadow-lg">
                        <div className="flex items-center">
                            {/* Text Content */}
                            <div className="w-1/2 p-12">
                                <h1 className="text-5xl font-bold text-white mb-6">
                                    {title}
                                </h1>
                                <p className="text-white text-lg leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            {/* Video Content */}
                            <div className="w-1/2 p-12">
                                <div className={`
                                    relative
                                    rounded-2xl
                                    overflow-hidden
                                    bg-gradient-to-r from-${gradientFrom} to-${gradientTo}
                                    p-[2px]
                                `}>
                                    <div className='relative w-full aspect-video bg-white rounded-2xl overflow-hidden'>
                                        <video
                                            className='w-full h-full object-cover'
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src={videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoxComponents;
