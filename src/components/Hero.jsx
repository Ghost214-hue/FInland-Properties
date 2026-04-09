import { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';

export default function Hero() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(`*[_type == "hero"][0]{
                badgeText,
                headingLine1,
                headingLine2,
                headingHighlight,
                description,
                ctaPrimaryLabel,
                ctaPrimaryHref,
                ctaSecondaryLabel,
                ctaSecondaryHref,
                backgroundImage,
                footnote,
                trustBadges[]{
                    icon,
                    label
                },
                stats[]{
                    value,
                    label
                }
            }`)
            .then((res) => {
                setData(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching hero data:", error);
                setIsLoading(false);
            });
    }, []);

    // Show loading state
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
        );
    }

    // Show nothing if no data
    if (!data) return null;

    return (
        <>
            <section
                id="home"
                className="relative min-h-screen flex items-center overflow-hidden"
            >
                {/* ── BACKGROUND IMAGE ── */}
                {data.backgroundImage && (
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${urlFor(data.backgroundImage).url()})`,
                                filter: 'blur(2px)',
                                transform: 'scale(1.04)',
                            }}
                        />
                    </div>
                )}

                {/* ── GRADIENT OVERLAY ── */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-green-100/60 to-emerald-900/70" />

                {/* ── TOP ACCENT STRIPE ── */}
                <div className="absolute top-0 left-0 right-0 h-0.5 z-20 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />

                {/* ── DECORATIVE ORBS ── */}
                <div className="absolute top-32 right-12 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-green-300/20 to-teal-400/15 blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 -left-12 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-emerald-200/20 to-green-400/10 blur-3xl pointer-events-none" />

                {/* ── CONTENT ── */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20">
                    <div className="max-w-3xl flex flex-col gap-4 sm:gap-6 items-start text-left">
                        {/* ── BADGE ── */}
                        {data.badgeText && (
                            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/75 backdrop-blur-md border border-green-200 rounded-full text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest text-green-800 shadow-md shadow-green-900/10">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                                {data.badgeText}
                            </span>
                        )}

                        {/* ── MAIN HEADING ── */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                            <span className="text-green-900">{data.headingLine1}</span>
                            <br />
                            <span className="text-green-900">{data.headingLine2} </span>
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                    {data.headingHighlight}
                                </span>
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 sm:h-1 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                            </span>
                        </h1>

                        {/* ── DESCRIPTION ── */}
                        {data.description && (
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-900/75 font-medium leading-relaxed max-w-xl">
                                {data.description}
                            </p>
                        )}

                        {/* ── CTA BUTTONS (FIXED) ── */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            {/* Primary CTA - Fixed <a> tag */}
                            <a
                                href={data.ctaPrimaryHref || '#'}
                                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-xl font-extrabold text-[0.7rem] sm:text-xs uppercase tracking-widest text-white bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 hover:from-green-400 hover:via-emerald-500 hover:to-teal-500 shadow-lg shadow-green-600/35 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-0.5 active:translate-y-0 border border-green-400/40 transition-all duration-200"
                            >
                                {data.ctaPrimaryLabel || 'Get Started'}
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            {/* Secondary CTA - Fixed <a> tag */}
                            <a
                                href={data.ctaSecondaryHref || '#'}
                                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-xl font-extrabold text-[0.7rem] sm:text-xs uppercase tracking-widest text-green-900 bg-white/80 hover:bg-white/95 backdrop-blur-md border border-green-200 hover:border-green-400 shadow-lg shadow-green-900/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                            >
                                {data.ctaSecondaryLabel || 'Learn More'}
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        {/* ── DIVIDER ── */}
                        <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />

                        {/* ── TRUST BADGES ── */}
                        {data.trustBadges && data.trustBadges.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {data.trustBadges.map((badge, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white/70 backdrop-blur-md border border-green-200 rounded-lg sm:rounded-xl text-[0.65rem] sm:text-xs font-bold text-green-800 shadow-sm uppercase tracking-wide hover:bg-white/90 hover:border-green-300 transition-all duration-150"
                                    >
                                        <span className="text-sm sm:text-base">{badge.icon}</span>
                                        {badge.label}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* ── FOOTNOTE ── */}
                        {data.footnote && (
                            <p className="text-[0.65rem] sm:text-xs text-green-800/55 italic font-medium">
                                {data.footnote}
                            </p>
                        )}
                    </div>
                </div>

                {/* ── BOTTOM FADE ── */}
                <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
            </section>

            {/* ── STATS SECTION ── */}
            {data.stats && data.stats.length > 0 && (
                <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 border-y border-green-200/50 py-12 md:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                            {data.stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group text-center transform hover:scale-105 transition-all duration-300"
                                >
                                    <div className="relative inline-block">
                                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:via-emerald-500 group-hover:to-teal-500 transition-all duration-300">
                                            {stat.value}
                                        </span>
                                        {index === 3 && (
                                            <span className="absolute -top-2 -right-6 text-xs font-bold text-emerald-500">★</span>
                                        )}
                                    </div>
                                    <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-green-700/80 mt-2 sm:mt-3 group-hover:text-green-800 transition-colors duration-300">
                                        {stat.label}
                                    </p>
                                    <div className="w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}