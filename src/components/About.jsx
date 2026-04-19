import { useEffect, useRef, useState } from 'react';
import { client, urlFor } from '../sanityClient';

export default function About() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "about"][0]{
                badgeText,
                headingPrefix,
                headingHighlight,
                paragraph1,
                paragraph2,
                brandVideo { asset->{ url } },
                brandVideoAriaLabel,
                videoPillLabel,
                videoBottomLabel,
                teamImage
            }`)
            .then((res) => {
                setData(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching about data', error);
                setIsLoading(false);
            });
    }, []);

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    // ── LOADING ────────────────────────────────────────
    if (isLoading) {
        return (
            <div className="min-h-[40rem] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600" />
            </div>
        );
    }

    if (!data) return null;

    // Derive which right-hand panel to show
    const videoUrl = data.brandVideo?.asset?.url;
    const hasVideo = !!videoUrl;
    const hasImage = !!data.teamImage;

    return (
        <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden">

            {/* ── DECORATIVE ORBS ── */}
            <div className="absolute top-10 left-0 w-80 h-80 rounded-full
                bg-green-100/40 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full
                bg-teal-100/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ════════════════════════════════
                        LEFT — Text content
                    ════════════════════════════════ */}
                    <div className="flex flex-col gap-6 items-center lg:items-start
                        text-center lg:text-left">

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
                                <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500
                                    bg-clip-text text-transparent">
                                    {data.headingHighlight}
                                </span>
                                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                    bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                            </span>
                        </h2>

                        {/* Paragraphs */}
                        {data.paragraph1 && (
                            <p className="text-base sm:text-lg text-green-800/70
                                font-medium leading-relaxed">
                                {data.paragraph1}
                            </p>
                        )}
                        {data.paragraph2 && (
                            <p className="text-base sm:text-lg text-green-800/70
                                font-medium leading-relaxed">
                                {data.paragraph2}
                            </p>
                        )}
                    </div>

                    {/* ════════════════════════════════
                        RIGHT — Video (preferred) or Team Image (fallback)
                        To update: upload a new Brand Video in Sanity Studio.
                        If no video is set, the Team Image is shown instead.
                    ════════════════════════════════ */}
                    <div className="order-first lg:order-last w-full">

                        {hasVideo ? (
                            /* ── VIDEO PANEL ── */
                            <div className="relative">

                                {/* Ambient glow */}
                                <div className="absolute -inset-4 rounded-3xl
                                    bg-gradient-to-br from-emerald-300/20 via-green-200/15 to-teal-300/20
                                    blur-2xl pointer-events-none" />

                                {/* Video mount */}
                                <div className="relative p-2.5 sm:p-3
                                    bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl
                                    shadow-2xl shadow-green-900/20 ring-1 ring-green-100
                                    hover:shadow-green-900/30 transition-shadow duration-500">

                                    {/* Video + mute button wrapper */}
                                    <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden
                                        bg-green-950 aspect-video group">

                                        <video
                                            ref={videoRef}
                                            src={videoUrl}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            aria-label={data.brandVideoAriaLabel || 'About us — brand video'}
                                        />

                                        {/* ── MUTE / UNMUTE BUTTON ── */}
                                        <button
                                            onClick={toggleMute}
                                            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                                            className="absolute bottom-3 right-3 z-20
                                                flex items-center gap-2 px-3 py-2
                                                bg-black/50 hover:bg-black/70
                                                backdrop-blur-md rounded-full
                                                border border-white/20 text-white
                                                transition-all duration-200
                                                hover:scale-105 active:scale-95"
                                        >
                                            {isMuted ? (
                                                <>
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                                    </svg>
                                                    <span className="text-[0.6rem] font-black uppercase tracking-widest">
                                                        Tap for Sound
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-6.414-3H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M19.07 4.929a10 10 0 010 14.142" />
                                                    </svg>
                                                    <span className="text-[0.6rem] font-black uppercase tracking-widest">
                                                        Mute
                                                    </span>
                                                </>
                                            )}
                                        </button>

                                        {/* Pulse ring on mute button when muted */}
                                        {isMuted && (
                                            <span className="absolute bottom-3 right-3 z-10
                                                flex justify-end items-end
                                                w-full h-8 pr-3 pointer-events-none">
                                                <span className="w-8 h-8 rounded-full
                                                    border-2 border-white/40 animate-ping
                                                    absolute bottom-0 right-0" />
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Inner vignette */}
                                <div className="absolute inset-2.5 sm:inset-3 rounded-xl sm:rounded-2xl
                                    shadow-[inset_0_0_20px_rgba(0,0,0,0.10)] pointer-events-none" />

                                {/* "Watch Our Story" pill — top-left */}
                                <div className="absolute -top-3.5 -left-2 z-10
                                    flex items-center gap-2 px-3.5 py-1.5
                                    bg-white rounded-full border border-green-100
                                    shadow-md shadow-green-900/10">
                                    <span className="flex items-center justify-center
                                        w-4 h-4 rounded-full bg-emerald-500">
                                        <svg className="w-2 h-2 text-white fill-current ml-0.5"
                                            viewBox="0 0 8 10">
                                            <path d="M0 0l8 5-8 5V0z" />
                                        </svg>
                                    </span>
                                    <span className="text-[0.6rem] font-black uppercase tracking-widest text-green-800">
                                        {data.videoPillLabel || 'Watch Our Story'}
                                    </span>
                                </div>

                                {/* Bottom label */}
                                <div className="absolute -bottom-4 left-0 right-0 flex justify-center z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2
                                        bg-gradient-to-r from-green-500 to-emerald-600
                                        rounded-full shadow-lg shadow-green-700/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                                        <span className="text-[0.6rem] font-black uppercase tracking-widest text-white">
                                            {data.videoBottomLabel || 'Fine Land Properties Ltd'}
                                        </span>
                                    </div>
                                </div>

                            </div>

                        ) : hasImage ? (
                            /* ── IMAGE FALLBACK ── */
                            <div className="relative rounded-3xl p-1
                                bg-gradient-to-br from-green-300/60 via-emerald-200/40 to-teal-300/50
                                shadow-2xl shadow-green-900/15">
                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src={urlFor(data.teamImage).url()}
                                        alt="Our Team"
                                        className="w-full h-full object-cover
                                            hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                        ) : (
                            /* ── EMPTY PLACEHOLDER ── */
                            <div className="relative rounded-3xl p-1
                                bg-gradient-to-br from-green-300/60 via-emerald-200/40 to-teal-300/50
                                shadow-2xl shadow-green-900/15">
                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden
                                    bg-green-100 flex items-center justify-center">
                                    <p className="text-green-400 text-sm">No media uploaded</p>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </section>
    );
}