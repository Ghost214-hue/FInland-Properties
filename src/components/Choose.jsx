import { useEffect, useState } from 'react';
import { FileText, Shield, DollarSign, Users } from 'lucide-react';
import { client } from '../sanityClient';

// ── Map icon string from Sanity to actual component ──
const iconMap = {
    shield:      <Shield      className="w-7 h-7 text-white" />,
    fileText:    <FileText    className="w-7 h-7 text-white" />,
    dollarSign:  <DollarSign  className="w-7 h-7 text-white" />,
    users:       <Users       className="w-7 h-7 text-white" />,
};

export default function Choose() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(`*[_type == "choose"][0]{
                badgeText,
                headingPrefix,
                headingHighlight,
                subheading,
                cards[]{
                    heading,
                    description,
                    isDark,
                    icon,
                    iconBg
                }
            }`)
            .then((res) => {
                console.log('Choose data:', res); // ← remove after testing
                setData(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching choose data:', error);
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

                {/* ── CARDS GRID ── */}
                {data.cards && data.cards.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                          {data.cards.filter(card => card !== null).map((item, index) => (  //
                            <div
                                key={index}
                                className={`group relative flex flex-col gap-5 p-7 rounded-3xl
                                    border backdrop-blur-md overflow-hidden
                                    shadow-lg hover:shadow-2xl
                                    hover:-translate-y-2 transition-all duration-300
                                    ${item.isDark
                                        ? 'bg-linear-to-br from-green-500 via-emerald-600 to-teal-600 border-green-400/40 shadow-green-700/20 hover:shadow-green-600/35'
                                        : 'bg-white/80 border-green-100 hover:border-green-300 shadow-green-900/6 hover:shadow-green-900/14'
                                    }`}
                            >
                                {/* Inner glow on dark cards */}
                                {item.isDark && (
                                    <div className="absolute inset-0 bg-linear-to-br
                                        from-white/10 via-transparent to-black/10
                                        pointer-events-none rounded-3xl" />
                                )}

                                {/* Top corner accent dot */}
                                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full
                                    ${item.isDark ? 'bg-white/30' : 'bg-emerald-400/50'}`} />

                                {/* Icon badge */}
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                                    shrink-0 shadow-lg bg-linear-to-br
                                    ${item.iconBg || 'from-green-500 to-emerald-700'}
                                    ${item.isDark ? 'shadow-black/20' : 'shadow-green-500/25'}
                                    group-hover:scale-110 transition-transform duration-300`}>
                                    {iconMap[item.icon] || iconMap['shield']}
                                </div>

                                {/* Watermark number */}
                                <span className={`absolute bottom-5 right-6 text-7xl font-black
                                    leading-none select-none pointer-events-none
                                    ${item.isDark ? 'text-white/8' : 'text-green-900/5'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Text */}
                                <div className="flex flex-col gap-2.5 relative z-10">
                                    <h3 className={`text-lg font-extrabold leading-snug
                                        ${item.isDark ? 'text-white' : 'text-green-900'}`}>
                                        {item.heading}
                                    </h3>
                                    <p className={`text-sm font-medium leading-relaxed
                                        ${item.isDark ? 'text-green-100/80' : 'text-green-800/65'}`}>
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-6 right-6 h-px
                                    ${item.isDark
                                        ? 'bg-white/20'
                                        : 'bg-linear-to-r from-transparent via-green-300 to-transparent'
                                    }`} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}