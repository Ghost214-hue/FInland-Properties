import land from '../assets/land.jpg';
import land1 from '../assets/land1.jpg';
import land2 from '../assets/land2.jpeg';
import land3 from '../assets/land3.jpeg';

const properties = [
    {
        img: land,
        alt: 'Ocean View Plot',
        tag: 'Ocean Front',
        title: 'Ocean View Plot',
        desc: 'A stunning plot with breathtaking ocean views, perfect for your dream home.',
        size: '0.5 Acres',
        status: 'Available',
    },
    {
        img: land1,
        alt: 'Mountain Retreat Plot',
        tag: 'Highland',
        title: 'Mountain Retreat Plot',
        desc: 'A serene plot nestled in the mountains, ideal for a peaceful getaway.',
        size: '1.2 Acres',
        status: 'Available',
    },
    {
        img: land2,
        alt: 'City Center Plot',
        tag: 'Commercial',
        title: 'City Center Plot',
        desc: 'A prime plot in the heart of the city, perfect for commercial development.',
        size: '0.3 Acres',
        status: 'Hot Deal',
    },
    {
        img: land3,
        alt: 'Countryside Plot',
        tag: 'Rural',
        title: 'Countryside Plot',
        desc: 'A spacious plot in the countryside, ideal for farming or a private residence.',
        size: '3.0 Acres',
        status: 'Available',
    },
];

export default function Features() {
    return (

        <section id="features" className="relative py-20 sm:py-28 bg-linear-to-b from-green-50 to-white overflow-hidden">

            {/* CHANGE 2: Decorative background orbs for depth — same technique as Hero */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                bg-green-200/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full
                bg-teal-200/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-20">

                    {/* Badge */}
                    <span className="inline-flex items-center gap-2.5 px-5 py-2.5
                        bg-white/80 backdrop-blur-md border border-green-200
                        rounded-full text-xs font-bold uppercase tracking-widest
                        text-green-700 shadow-md shadow-green-900/8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Hand-Picked Selection
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-green-900">
                        Featured{' '}
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500
                                bg-clip-text text-transparent">
                                Properties
                            </span>
                            {/* CHANGE 4: Gradient underline — same as Hero heading accent */}
                            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-green-800/70 font-medium max-w-2xl leading-relaxed">
                        Explore our hand-picked selection of premium land plots —
                        all verified and ready for immediate transfer.
                    </p>
                </div>


                <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {properties.map(({ img, alt, tag, title, desc, size, status }, i) => (


                        <div
                            key={title}
                            className="group flex flex-col bg-white/80 backdrop-blur-md
                                border border-green-100 hover:border-green-300
                                rounded-2xl overflow-hidden
                                shadow-lg shadow-green-900/6 hover:shadow-xl hover:shadow-green-900/12
                                hover:-translate-y-1.5 transition-all duration-300"
                        >

                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={img}
                                    alt={alt}
                                    className="w-full h-full object-cover
                                        group-hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute inset-0 bg-linear-to-t
                                    from-black/30 via-transparent to-transparent" />

                                {/* Category tag — top left */}
                                <span className="absolute top-3 left-3 px-2.5 py-1
                                    bg-white/85 backdrop-blur-sm border border-green-200
                                    rounded-lg text-[0.65rem] font-bold uppercase tracking-widest
                                    text-green-800">
                                    {tag}
                                </span>

                                {/* Status badge — top right */}
                                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg
                                    text-[0.65rem] font-bold uppercase tracking-widest
                                    ${status === 'Hot Deal'
                                        ? 'bg-emerald-500 text-white'
                                        : 'bg-white/85 backdrop-blur-sm border border-green-200 text-green-700'
                                    }`}>
                                    {status}
                                </span>
                            </div>

                            {/* Card body */}
                            <div className="flex flex-col gap-3 p-5 flex-1">

                                {/* Size pill */}
                                <span className="inline-flex items-center gap-1.5 self-start
                                    px-2.5 py-1 rounded-lg bg-green-50 border border-green-100
                                    text-[0.65rem] font-bold uppercase tracking-wider text-green-700">
                                    📐 {size}
                                </span>

                                <h3 className="text-lg font-extrabold text-green-900 leading-snug">
                                    {title}
                                </h3>

                                <p className="text-sm text-green-800/65 font-medium leading-relaxed flex-1">
                                    {desc}
                                </p>


                                <a
                                    href="#contact"
                                    className="mt-1 inline-flex items-center justify-center gap-2
                                        px-4 py-2.5 rounded-xl font-extrabold text-xs uppercase
                                        tracking-widest text-white
                                        bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                                        hover:from-green-400 hover:via-emerald-500 hover:to-teal-500
                                        shadow-md shadow-green-600/25 hover:shadow-green-500/40
                                        transition-all duration-200 border border-green-400/30"
                                >
                                    Enquire Now
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex justify-center mt-14">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                            font-extrabold text-sm uppercase tracking-widest text-green-900
                            bg-white/80 hover:bg-white backdrop-blur-md
                            border border-green-200 hover:border-green-400
                            shadow-lg shadow-green-900/8 hover:shadow-green-900/14
                            hover:-translate-y-0.5 transition-all duration-200"
                    >
                        View All Properties
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}