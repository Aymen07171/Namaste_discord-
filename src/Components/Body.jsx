import React from 'react'

const Body = () => {
    return (
        <div className="container mx-auto px-4">
            {/* Mobile Version */}
            <div className="laptop:hidden">
                <img
                    className='w-full pt-[4rem]'
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp"
                    alt="Discord Art"
                />
                <div className="max-w-2xl mx-auto">
                    <h1 className='text-white pt-[1rem] text-4xl font-bold uppercase text-center'>
                        Des groupes de discussion et du fun
                    </h1>
                    <p className='text-white text-center pt-[20px] pb-[2rem]'>
                        Discord, c'est l'idéal pour jouer, se détendre avec des amis, ou même bâtir une communauté mondiale. Personnalise ton propre espace où discuter, jouer et passer du temps avec les autres.
                    </p>
                    <div className="flex justify-center w-full px-4">
                <button className="w-full bg-white font-bold text-xl text-black px-[1rem] py-2 rounded-full mb-8 hover:bg-gray-100 transition-colors duration-300">
                    Télécharger sur l'App Store
                </button>
                </div>
                </div>
            </div>

            {/* Laptop Version */}
            <div className="hidden laptop:block pt-[8rem]">
                <div className="flex items-center justify-between gap-8 mb-16">
                    {/* Text Content */}
                    <div className="w-1/2">
                        <h1 className='text-white text-6xl font-bold uppercase leading-tight'>
                            Des groupes de discussion et du fun
                        </h1>
                        <p className='text-white text-lg pt-[20px] leading-relaxed'>
                            Discord, c'est l'idéal pour jouer, se détendre avec des amis, ou même bâtir une communauté mondiale. Personnalise ton propre espace où discuter, jouer et passer du temps avec les autres.
                        </p>
                    </div>
                    
                    {/* Image */}
                    <div className="w-3/5 transform scale-125">
    <img
        className='w-full h-auto object-cover'
        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp"
        alt="Discord Art"
    />
</div>
                </div>

                {/* Buttons Container */}
                <div className="flex justify-center gap-4 max-w-3xl mx-auto">
                    <button className='bg-white font-bold text-xl text-black px-8 py-4 rounded-full
                        hover:bg-gray-100 transition-all duration-300
                        transform hover:scale-105 active:scale-95
                        shadow-lg hover:shadow-xl'>
                        Télécharger sur l'App Store
                    </button>
                    <button className='bg-blue-700 font-bold text-xl text-white px-8 py-4 rounded-full
                        hover:bg-gray-600 transition-all duration-300
                        transform hover:scale-105 active:scale-95
                        shadow-lg hover:shadow-xl'>
                        Open Discord in your browser
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Body
