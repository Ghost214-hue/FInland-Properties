import { useEffect, useState } from 'react';
import { MapPin, CreditCard, FileCheck, Home, Key, Star } from 'lucide-react';
import { client } from '../sanityClient';

// ── Map icon string from Sanity → actual component ──
const iconMap = {
    mapPin:     <MapPin     className="w-6 h-6 text-white" />,
    creditCard: <CreditCard className="w-6 h-6 text-white" />,
    fileCheck:  <FileCheck  className="w-6 h-6 text-white" />,
    home:       <Home       className="w-6 h-6 text-white" />,
    key:        <Key        className="w-6 h-6 text-white" />,
    star:       <Star       className="w-6 h-6 text-white" />,
};

export default function Step() {
    const [data, setData]         = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(`*[_type == "step"][0]{
                badgeText,
                headingPrefix,
                headingHighlight,
                subheading,
                steps[]{
                    heading,
                    description,
                    icon
                },
                ctaQuestion,
                ctaButtonText,
                ctaButtonHref
            }`)
            .then((res) => {
                setData(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching step data:', error);
                setIsLoading(false);
            });
    }, []);

    // ── LOADING ──
    if (isLoading) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600" />
            </div>
        );
    }

    // ── NO DATA ──
    if (!data) return null;

    const steps        = (data.steps ?? []).filter(Boolean);
    const lastIndex    = steps.length - 1;

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

                    {/* Badge */}
                    {data.badgeText && (
                        <span className="inline-flex items-center gap-2.5 px-5 py-2.5
                            bg-white/80 backdrop-blur-md border border-green-200
                            rounded-full text-xs font-bold uppercase tracking-widest
                            text-green-700 shadow-md shadow-green-900/8">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            {data.badgeText}
                        </span>
                    )}

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                        tracking-tight leading-tight text-green-900">
                        {data.headingPrefix}{' '}
                        {data.headingHighlight && (
                            <span className="relative inline-block">
                                <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500
                                    bg-clip-text text-transparent">
                                    {data.headingHighlight}
                                </span>
                                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                    bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                            </span>
                        )}
                    </h2>

                    {/* Subheading */}
                    {data.subheading && (
                        <p className="text-lg sm:text-xl text-green-800/70 font-medium
                            max-w-2xl leading-relaxed">
                            {data.subheading}
                        </p>
                    )}
                </div>

                {/* ── STEPS ROW ── */}
                {steps.length > 0 && (
                    <div className={`relative grid grid-cols-1 gap-12 mb-16 sm:mb-20
                        ${steps.length === 3 ? 'sm:grid-cols-3 sm:gap-6'
                        : steps.length === 2 ? 'sm:grid-cols-2 sm:gap-6'
                        : steps.length === 4 ? 'sm:grid-cols-4 sm:gap-4'
                        : 'sm:grid-cols-3 sm:gap-6'}`}>

                        {/* Connector line — desktop only */}
                        <div className="hidden sm:block absolute top-10
                            left-[calc(16.66%+28px)] right-[calc(16.66%+28px)]
                            h-px bg-linear-to-r from-green-300 via-emerald-400 to-green-300 z-0" />

                        {steps.map((step, index) => (
                            <div key={index}
                                className="relative z-10 flex flex-col items-center text-center gap-5 group">

                                {/* Mobile vertical connector */}
                                {index < lastIndex && (
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
                                            {String(index + 1).padStart(2, '0')}
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
                )}

                {/* ── BOTTOM CTA BAR ── */}
                {(data.ctaQuestion || data.ctaButtonText) && (
                    <div className="flex items-center justify-center">
                        <div className="inline-flex items-center gap-4 sm:gap-6 flex-wrap justify-center
                            bg-white/80 backdrop-blur-md border border-green-200
                            rounded-2xl px-7 py-4 shadow-lg shadow-green-900/8">

                            {data.ctaQuestion && (
                                <p className="text-sm sm:text-base font-semibold text-green-900">
                                    {data.ctaQuestion}
                                </p>
                            )}

                            {data.ctaButtonText && (
                                <a href={data.ctaButtonHref || '#contact'}
                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                                        font-extrabold text-sm uppercase tracking-widest text-white
                                        bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                                        hover:from-green-400 hover:via-emerald-500 hover:to-teal-500
                                        shadow-md shadow-green-600/30 hover:shadow-green-500/40
                                        hover:-translate-y-0.5 active:translate-y-0
                                        border border-green-400/40 transition-all duration-200
                                        whitespace-nowrap">
                                    {data.ctaButtonText}
                                </a>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}