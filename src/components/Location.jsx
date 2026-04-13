import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { client, urlFor } from '../sanityClient';

export default function Location() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(`*[_type == "locations"][0]{
                badgeText,
                headingPrefix,
                headingHighlight,
                subheading,
                ctaLabel,
                ctaHref,
                locations[]{
                    location,
                    count,
                    image,
                    enquireHref
                }
            }`)
            .then((res) => {
                console.log('Location data:', res);
                setData(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching location data:', error);
                setIsLoading(false);
            });
    }, []);

    // ── LOADING ──
    if (isLoading) {
        return (
            <div className="min-h-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600" />
            </div>
        );
    }

    // ── NO DATA ──
    if (!data) return ;

    return (
        <section id="location" className="relative py-20 sm:py-28
            bg-linear-to-b from-white to-green-50 overflow-hidden">

            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                bg-green-200/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full
                bg-teal-200/20 blur-3xl pointer-events-none" />

            {/* ── HEADER ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-20">

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
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500
                                bg-clip-text text-transparent">
                                {data.headingHighlight}
                            </span>
                            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                        </span>
                    </h2>

                    {/* Subheading */}
                    {data.subheading && (
                        <p className="text-lg sm:text-xl text-green-800/70 font-medium
                            max-w-2xl leading-relaxed">
                            {data.subheading}
                        </p>
                    )}
                </div>
            </div>

            {/* ── LOCATIONS GRID ── */}
            {data.locations && data.locations.length > 0 && (
                <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                        lg:grid-cols-4 xl:grid-cols-7 gap-4">
                        {data.locations.map((item, index) => (
                            <div
                                key={index}
                                className="group flex flex-col bg-white/80 backdrop-blur-md
                                    border border-green-100 hover:border-green-300
                                    rounded-2xl overflow-hidden shadow-lg shadow-green-900/6
                                    hover:shadow-xl hover:shadow-green-900/12
                                    hover:-translate-y-1.5 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={urlFor(item.image).width(300).height(200).url()}
                                            alt={item.location}
                                            className="w-full h-full object-cover
                                                group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-green-100
                                            flex items-center justify-center">
                                            <p className="text-green-400 text-xs">No image</p>
                                        </div>
                                    )}

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t
                                        from-black/40 via-transparent to-transparent" />

                                    {/* Count badge */}
                                    {item.count && (
                                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5
                                            px-2 py-1 bg-white/85 backdrop-blur-sm border border-green-200
                                            rounded-lg text-[0.6rem] font-bold uppercase tracking-widest text-green-800">
                                            🏡 {item.count}
                                        </span>
                                    )}
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col gap-3 p-4">
                                    <div className="flex items-start gap-1.5">
                                        <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                        <h3 className="text-sm font-extrabold text-green-900 leading-snug">
                                            {item.location}
                                        </h3>
                                    </div>

                                    {/* FIXED: Added the missing closing </a> tag */}
                                    <a
                                        href={item.enquireHref || '#contact'}
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
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ── BOTTOM CTA ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mt-12">
                    <a
                        href={data.ctaHref || '#contact'}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                            font-extrabold text-sm uppercase tracking-widest text-green-900
                            bg-white/80 hover:bg-white backdrop-blur-md
                            border border-green-200 hover:border-green-400
                            shadow-lg shadow-green-900/8 hover:shadow-green-900/14
                            hover:-translate-y-0.5 transition-all duration-200"
                    >
                        {data.ctaLabel || 'View All Locations'}
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