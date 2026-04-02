import team from '../assets/team.jpg';

export default function About() {
    return (
        <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden">

            {/* Decorative orbs */}
            <div className="absolute top-10 left-0 w-80 h-80 rounded-full
                bg-green-100/40 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full
                bg-teal-100/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* grid-cols-1 on mobile → stacks. lg:grid-cols-2 → side by side on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ── LEFT: Text content ── */}
                    <div className="flex flex-col gap-6 items-center lg:items-start
                        text-center lg:text-left">

                        {/* Badge — was bg-blue-400, now matches green theme */}
                        <span className="inline-flex items-center gap-2.5 px-5 py-2.5
                            bg-white/80 backdrop-blur-md border border-green-200
                            rounded-full text-xs font-bold uppercase tracking-widest
                            text-green-700 shadow-md shadow-green-900/8">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Established in 2018
                        </span>

                        {/* Heading — was text-7xl which crushes on mobile, now responsive */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                            tracking-tight leading-tight text-green-900">
                            About{' '}
                            <span className="relative inline-block">
                                <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500
                                    bg-clip-text text-transparent">
                                    Finland Properties
                                </span>
                                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                    bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                            </span>
                        </h2>

                        {/* Original paragraphs — only text color changed */}
                        <p className="text-base sm:text-lg text-green-800/70 font-medium leading-relaxed">
                            Finland Properties is a leading real estate company dedicated to helping
                            clients find their dream homes and investment properties in Finland. With
                            years of experience in the industry, we pride ourselves on our commitment
                            to excellence and customer satisfaction.
                        </p>

                        <p className="text-base sm:text-lg text-green-800/70 font-medium leading-relaxed">
                            Our team of knowledgeable and friendly professionals is here to guide you
                            through every step of the buying or selling process, ensuring a smooth and
                            stress-free experience. Whether you're looking for a cozy apartment in
                            Helsinki or a luxurious villa in the countryside, Finland Properties has
                            something for everyone.
                        </p>
                    </div>

                   
                    <div className="order-first lg:order-last w-full h-full">
                        <div className="relative rounded-3xl p-1
                            bg-linear-to-br from-green-300/60 via-emerald-200/40 to-teal-300/50
                            shadow-2xl shadow-green-900/15">
                            <div className="w-full aspect-4/3 rounded-2xl overflow-hidden">
                                <img
                                    src={team}
                                    alt="Our Team"
                                    className="w-full h-full object-cover
                                        hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}