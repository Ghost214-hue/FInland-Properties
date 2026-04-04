import { FileText, Shield, DollarSign, Users } from "lucide-react";

const chooseData = [
    {
        logo: <Shield className="w-7 h-7 text-white" />,
        iconBg: "bg-linear-to-br from-green-500 to-emerald-700",
        cardBg: "bg-white/80",
        border: "border-green-100 hover:border-green-300",
        heading: "Verified Land Ownership",
        description: "We provide direct ownership of verified land, ensuring your investment is safe, secure, and legal.",
    },
    {
        logo: <FileText className="w-7 h-7 text-white" />,
        iconBg: "bg-linear-to-br from-emerald-500 to-teal-700",
        cardBg: "bg-linear-to-br from-green-500 via-emerald-600 to-teal-600",
        border: "border-green-400/40",
        heading: "Ready Title Deeds",
        description: "Our properties come with ready title deeds, allowing for a smooth and hassle-free ownership transfer process.",
        dark: true,
    },
    {
        logo: <DollarSign className="w-7 h-7 text-white" />,
        iconBg: "bg-linear-to-br from-teal-500 to-green-700",
        cardBg: "bg-linear-to-br from-green-500 via-emerald-600 to-teal-600",
        border: "border-green-400/40",
        heading: "No Hidden Charges",
        description: "We are transparent about our pricing, with no hidden charges or fees, ensuring a trustworthy investment experience.",
        dark: true,
    },
    {
        logo: <Users className="w-7 h-7 text-white" />,
        iconBg: "bg-linear-to-br from-green-600 to-emerald-800",
        cardBg: "bg-white/80",
        border: "border-green-100 hover:border-green-300",
        heading: "Customer Support",
        description: "Our dedicated support team is available throughout your investment journey, providing guidance every step of the way.",
    },
];

export default function Choose() {
    return (
        <section id="choose" className="relative py-20 sm:py-28
            bg-linear-to-b from-green-50 to-white overflow-hidden">

            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                bg-emerald-200/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full
                bg-teal-200/20 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-160 h-160 rounded-full bg-green-100/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── HEADER ── */}
                <div className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-20">

                    <span className="inline-flex items-center gap-2.5 px-5 py-2.5
                        bg-white/80 backdrop-blur-md border border-green-200
                        rounded-full text-xs font-bold uppercase tracking-widest
                        text-green-700 shadow-md shadow-green-900/8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                        tracking-tight leading-tight text-green-900">
                        Why Choose{' '}
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500
                                bg-clip-text text-transparent">
                                Finland Properties
                            </span>
                            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-green-800/70 font-medium
                        max-w-2xl leading-relaxed">
                        We specialise in providing direct ownership of verified land —
                        ensuring your investment is safe, legal, and profitable.
                    </p>
                </div>

                {/* ── CARDS GRID ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {chooseData.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative flex flex-col gap-5 p-7 rounded-3xl
                                border backdrop-blur-md overflow-hidden
                                shadow-lg hover:shadow-2xl
                                hover:-translate-y-2 transition-all duration-300
                                ${item.cardBg} ${item.border}
                                ${item.dark
                                    ? "shadow-green-700/20 hover:shadow-green-600/35"
                                    : "shadow-green-900/6 hover:shadow-green-900/14"
                                }`}
                        >
                            {/* Subtle inner glow on dark cards */}
                            {item.dark && (
                                <div className="absolute inset-0 bg-linear-to-br
                                    from-white/10 via-transparent to-black/10
                                    pointer-events-none rounded-3xl" />
                            )}

                            {/* Top corner accent dot */}
                            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full
                                ${item.dark ? "bg-white/30" : "bg-emerald-400/50"}`} />

                            {/* Icon badge */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                                shrink-0 shadow-lg ${item.iconBg}
                                ${item.dark ? "shadow-black/20" : "shadow-green-500/25"}
                                group-hover:scale-110 transition-transform duration-300`}>
                                {item.logo}
                            </div>

                            {/* Index number — subtle background watermark */}
                            <span className={`absolute bottom-5 right-6 text-7xl font-black
                                leading-none select-none pointer-events-none
                                ${item.dark ? "text-white/8" : "text-green-900/5"}`}>
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Text */}
                            <div className="flex flex-col gap-2.5 relative z-10">
                                <h3 className={`text-lg font-extrabold leading-snug
                                    ${item.dark ? "text-white" : "text-green-900"}`}>
                                    {item.heading}
                                </h3>
                                <p className={`text-sm font-medium leading-relaxed
                                    ${item.dark ? "text-green-100/80" : "text-green-800/65"}`}>
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <div className={`absolute bottom-0 left-6 right-6 h-px
                                ${item.dark
                                    ? "bg-white/20"
                                    : "bg-linear-to-r from-transparent via-green-300 to-transparent"
                                }`} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}