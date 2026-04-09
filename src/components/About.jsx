import { useEffect, useState } from "react";
import { client, urlFor } from '../sanityClient';

export default function About() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(`*[_type =="about"][0]{
               badgeText,
               headingPrefix ,
               headingHighlight,
               paragraph1,
               paragraph2,
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
    //_________LOADING____
    if (isLoading) {
        return (
            <div className="min-h-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600" />
            </div>
        );
    }
    if (!data) return null;

    return (
        <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden">
            <div className="absolute top-10 left-0 w-80 h-80 rounded-full
                bg-green-100/40 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full
                bg-teal-100/30 blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ── LEFT: Text content ── */}
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
                                <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500
                                    bg-clip-text text-transparent">
                                    {data.headingHighlight}
                                </span>
                                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                    bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                            </span>
                        </h2>

                        {/* Paragraph 1 */}
                        {data.paragraph1 && (
                            <p className="text-base sm:text-lg text-green-800/70
                                font-medium leading-relaxed">
                                {data.paragraph1}
                            </p>
                        )}

                        {/* Paragraph 2 */}
                        {data.paragraph2 && (
                            <p className="text-base sm:text-lg text-green-800/70
                                font-medium leading-relaxed">
                                {data.paragraph2}
                            </p>
                        )}
                    </div>

                    {/* ── RIGHT: Team Image ── */}
                    <div className="order-first lg:order-last w-full h-full">
                        <div className="relative rounded-3xl p-1
                            bg-linear-to-br from-green-300/60 via-emerald-200/40 to-teal-300/50
                            shadow-2xl shadow-green-900/15">
                            <div className="w-full aspect-4/3 rounded-2xl overflow-hidden">
                                {data.teamImage ? (
                                    <img
                                        src={urlFor(data.teamImage).url()}
                                        alt="Our Team"
                                        className="w-full h-full object-cover
                                            hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    // Fallback placeholder if no image uploaded yet
                                    <div className="w-full h-full bg-green-100
                                        flex items-center justify-center">
                                        <p className="text-green-400 text-sm">No image uploaded</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

      
      
        </section>
    )

}