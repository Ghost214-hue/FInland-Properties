import { MapPin, CreditCard, FileCheck } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: <MapPin className="w-6 h-6 text-white" />,
        heading: "Select Your Plot",
        description: "Browse our verified listings or visit our sites to pick the plot that fits your vision.",
    },
    {
        number: "02",
        icon: <CreditCard className="w-6 h-6 text-white" />,
        heading: "Secure Payment",
        description: "Choose a flexible payment plan or make a one-time secure transfer to our corporate account.",
    },
    {
        number: "03",
        icon: <FileCheck className="w-6 h-6 text-white" />,
        heading: "Ownership Transfer",
        description: "We handle the legal registration and deliver your title deed within 14 working days.",
    },
];

export default function Step() {
    return (
        <section id="step" className="relative py-20 sm:py-28
            bg-linear-to-b from-white to-green-50 overflow-hidden">

            {/* Decorative orbs */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full
                bg-green-100/40 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full
                bg-teal-100/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── HEADER ── */}
                <div className="flex flex-col items-center text-center gap-4 mb-16 sm:mb-24">

                    <span className="inline-flex items-center gap-2.5 px-5 py-2.5
                        bg-white/80 backdrop-blur-md border border-green-200
                        rounded-full text-xs font-bold uppercase tracking-widest
                        text-green-700 shadow-md shadow-green-900/8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Ownership Process
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                        tracking-tight leading-tight text-green-900">
                        Simple 3-Step{' '}
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500
                                bg-clip-text text-transparent">
                                Ownership
                            </span>
                            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-green-800/70 font-medium
                        max-w-2xl leading-relaxed">
                        Our streamlined process makes land ownership accessible
                        and stress-free for everyone.
                    </p>
                </div>

                {/* ── STEPS ROW ── */}
                {/*
                    On mobile  → grid-cols-1, steps stack vertically
                    On desktop → grid-cols-3, steps sit side by side
                    The connector line only shows on desktop (hidden sm:block)
                */}
                <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 mb-16 sm:mb-20">

                    {/* Connector line — desktop only, sits behind the circles */}
                    <div className="hidden sm:block absolute top-10 left-[calc(16.66%+28px)] right-[calc(16.66%+28px)]
                        h-px bg-linear-to-r from-green-300 via-emerald-400 to-green-300 z-0" />

                    {steps.map((step, index) => (
                        <div key={index}
                            className="relative z-10 flex flex-col items-center text-center gap-5 group">

                            {/* Mobile vertical connector — shows between steps on mobile only */}
                            {index < steps.length - 1 && (
                                <div className="sm:hidden absolute top-20 left-1/2 -translate-x-1/2
                                    w-px h-12 bg-linear-to-b from-green-300 to-transparent" />
                            )}

                            {/* Number circle */}
                            <div className="relative">
                                {/* Outer glow ring */}
                                <div className="absolute inset-0 rounded-full
                                    bg-linear-to-br from-green-300/50 to-emerald-400/30
                                    blur-md scale-125 group-hover:scale-150
                                    transition-transform duration-300" />

                                {/* Circle */}
                                <div className="relative w-20 h-20 rounded-full
                                    bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                                    border-4 border-white shadow-xl shadow-green-600/30
                                    flex items-center justify-center
                                    group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-2xl font-black text-white tracking-tight">
                                        {step.number}
                                    </span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-2.5 max-w-xs">
                                <h3 className="text-xl font-extrabold text-green-900">
                                    {step.heading}
                                </h3>
                                <p className="text-base text-green-800/65 font-medium leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── BOTTOM CTA BAR ── matches the image ── */}
                <div className="flex items-center justify-center">
                    <div className="inline-flex items-center gap-4 sm:gap-6 flex-wrap justify-center
                        bg-white/80 backdrop-blur-md border border-green-200
                        rounded-2xl px-7 py-4 shadow-lg shadow-green-900/8">
                        <p className="text-sm sm:text-base font-semibold text-green-900">
                            Still have questions about the process?
                        </p>
                        <a href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                                font-extrabold text-sm uppercase tracking-widest text-white
                                bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                                hover:from-green-400 hover:via-emerald-500 hover:to-teal-500
                                shadow-md shadow-green-600/30 hover:shadow-green-500/40
                                hover:-translate-y-0.5 active:translate-y-0
                                border border-green-400/40 transition-all duration-200
                                whitespace-nowrap">
                            Speak to an Agent
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}