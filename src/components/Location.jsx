import land from '../assets/land.jpg';
import { MapPin } from 'lucide-react';

const properties = [
    { img: land, location: 'Ruiru, Kiambu County',   count: '10 Properties' },
    { img: land, location: 'Thika, Kiambu County',   count: '6 Properties'  },
    { img: land, location: 'Kitengela, Kajiado',     count: '8 Properties'  },
    { img: land, location: 'Athi River, Machakos',   count: '5 Properties'  },
    { img: land, location: 'Juja, Kiambu County',    count: '12 Properties' },
    { img: land, location: 'Limuru, Kiambu County',  count: '4 Properties'  },
    { img: land, location: 'Ngong, Kajiado County',  count: '9 Properties'  },
];

export default function Location() {
    return (
        <section id="location" className="relative py-20 sm:py-28 bg-linear-to-b from-white to-green-50 overflow-hidden">

            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-200/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />

            {/* Header is still centred and max-width constrained for readability */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-20">

                    <span className="inline-flex items-center gap-2.5 px-5 py-2.5
                        bg-white/80 backdrop-blur-md border border-green-200
                        rounded-full text-xs font-bold uppercase tracking-widest
                        text-green-700 shadow-md shadow-green-900/8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Hand-Picked Locations
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-green-900">
                        Featured{' '}
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                Locations
                            </span>
                            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-green-800/70 font-medium max-w-2xl leading-relaxed">
                        Explore our prime land locations across Kenya — all verified and ready for immediate transfer.
                    </p>
                </div>
            </div>

            {/* Cards grid — full width, only horizontal padding */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                    {properties.map(({ img, location, count }, i) => (
                        <div
                            key={i}
                            className="group flex flex-col bg-white/80 backdrop-blur-md
                                border border-green-100 hover:border-green-300
                                rounded-2xl overflow-hidden shadow-lg shadow-green-900/6
                                hover:shadow-xl hover:shadow-green-900/12
                                hover:-translate-y-1.5 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={img}
                                    alt={location}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                                {/* Count badge */}
                                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5
                                    px-2 py-1 bg-white/85 backdrop-blur-sm border border-green-200
                                    rounded-lg text-[0.6rem] font-bold uppercase tracking-widest text-green-800">
                                    🏡 {count}
                                </span>
                            </div>

                            {/* Card body */}
                            <div className="flex flex-col gap-3 p-4">
                                <div className="flex items-start gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                    <h3 className="text-sm font-extrabold text-green-900 leading-snug">
                                        {location}
                                    </h3>
                                </div>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-1.5
                                        px-3 py-2 rounded-xl font-extrabold text-[0.65rem] uppercase
                                        tracking-widest text-white
                                        bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                                        hover:from-green-400 hover:via-emerald-500 hover:to-teal-500
                                        shadow-md shadow-green-600/25 hover:shadow-green-500/40
                                        transition-all duration-200 border border-green-400/30"
                                >
                                    Enquire Now
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA — back inside max-width container */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                            font-extrabold text-sm uppercase tracking-widest text-green-900
                            bg-white/80 hover:bg-white backdrop-blur-md
                            border border-green-200 hover:border-green-400
                            shadow-lg shadow-green-900/8 hover:shadow-green-900/14
                            hover:-translate-y-0.5 transition-all duration-200"
                    >
                        View All Locations
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

        </section>
    );
}