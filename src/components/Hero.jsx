import finland from '../assets/hero.jpg';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative bg-cover bg-center min-h-screen flex items-center"
            style={{ backgroundImage: `url(${finland})` }}
        >
            {/* Blurred background layer */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${finland})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(3px)',
                    transform: 'scale(1.05)', /* prevents blur edges showing */
                }}
            />

            {/* Gradient overlay — blue-to-green matching your target screenshot */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(29, 78, 216, 0.82) 0%, rgba(5, 150, 105, 0.70) 100%)',
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
                            ISO 9001 Certified Developer
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Buy Verified Land with Ready Title Deeds
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                        Verified plots with clear title deeds — transparent buying, quick ownership transfer, and secure future investment.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a
                            href="#properties"
                            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition duration-300 text-center shadow-lg shadow-green-500/30"
                        >
                            View Available Plots
                        </a>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition duration-300 text-center shadow-lg"
                        >
                            Book a Site Visit
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-6 border-t border-white/20 pt-8 mb-6">
                        {[
                            { icon: '🛡', label: 'VERIFIED TITLES' },
                            { icon: '✅', label: 'REGISTERED COMPANY' },
                            { icon: '💳', label: 'SECURE PAYMENTS' },
                            { icon: '🔄', label: 'MONEY-BACK GUARANTEE' },
                        ].map(({ icon, label }) => (
                            <div key={label} className="flex items-center gap-2">
                                <span className="text-base">{icon}</span>
                                <span className="text-white font-semibold text-sm tracking-wide">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <p className="text-white/60 text-sm italic">
                        *Site visits arranged within 48 hours. Terms and conditions apply.
                    </p>
                </div>
            </div>
        </section>
    );
}