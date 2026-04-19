import { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';

export default function Team() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(`*[_type == "team"][0]{
                badgeText,
                headingPrefix,
                headingHighlight,
                subheading,
                teamMembers[]{
                    name,
                    role,
                    description,
                    image,
                    dotColor,
                    iconBg,
                    ctaHref
                }
            }`)
            .then((res) => {
                console.log('Team data:', res); // ← remove after testing
                setData(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching team data:', error);
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

    return (
        <section id="team" className="relative py-20 sm:py-28
            bg-linear-to-b from-green-50 to-white overflow-hidden">

            {/* Decorative orbs */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full
                bg-green-200/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full
                bg-teal-200/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── HEADER ── */}
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

                {/* ── TEAM CARDS ── */}
                {data.teamMembers && data.teamMembers.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center
                                    bg-white/80 backdrop-blur-md
                                    border border-green-100 hover:border-green-300
                                    rounded-3xl px-6 pt-10 pb-7
                                    shadow-lg shadow-green-900/6
                                    hover:shadow-xl hover:shadow-green-900/12
                                    hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* ── CIRCULAR PHOTO ── */}
                                <div className="relative mb-5">

                                    {/* Glow ring */}
                                    <div className={`absolute inset-0 rounded-full
                                        bg-linear-to-br ${member.iconBg || 'from-green-500 to-emerald-700'}
                                        opacity-30 blur-md scale-110
                                        group-hover:scale-125 transition-transform duration-300`} />

                                    {/* Gradient border */}
                                    <div className={`relative p-0.75 rounded-full
                                        bg-linear-to-br ${member.iconBg || 'from-green-500 to-emerald-700'}
                                        shadow-lg shadow-green-500/25`}>
                                        <div className="w-28 h-28 rounded-full overflow-hidden bg-white">
                                            {member.image ? (
                                                <img
                                                    src={urlFor(member.image)
                                                        .width(200).height(200).url()}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover object-top
                                                        group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-green-100
                                                    flex items-center justify-center">
                                                    <span className="text-green-400 text-xs">No photo</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Online dot */}
                                    <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full
                                        border-2 border-white shadow-sm
                                        ${member.dotColor || 'bg-green-400'}`} />
                                </div>

                                {/* Name */}
                                <h3 className="text-lg font-extrabold text-green-900 leading-tight">
                                    {member.name}
                                </h3>

                                {/* Role pill */}
                                <span className="mt-1.5 mb-4 inline-flex items-center px-3 py-1
                                    bg-green-50 border border-green-100 rounded-full
                                    text-[0.65rem] font-bold uppercase tracking-widest text-green-600">
                                    {member.role}
                                </span>

                                {/* Divider */}
                                <div className="w-full h-px bg-linear-to-r
                                    from-transparent via-green-200 to-transparent mb-4" />

                                {/* Description */}
                                <p className="text-sm text-green-800/65 font-medium
                                    leading-relaxed flex-1 line-clamp-4
                                    group-hover:line-clamp-none transition-all duration-300">
                                    {member.description}
                                </p>

                                {/* CTA */}

                                {/* CTA */}
                                <a
                                    href={member.ctaHref || '#contact'}
                                    className="mt-5 w-full inline-flex items-center justify-center gap-2
                                      px-4 py-2.5 rounded-xl font-extrabold text-xs uppercase
                                      tracking-widest text-white
                                      bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                                     hover:from-green-400 hover:via-emerald-500 hover:to-teal-500
                                      shadow-md shadow-green-600/25
                                        transition-all duration-200 border border-green-400/30"
                                >
                                    Get in Touch
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}