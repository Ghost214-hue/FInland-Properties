import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe, Users } from 'lucide-react';
import { client } from '../sanityClient';

// ── Map icon string from Sanity → actual component ──
const iconMap = {
    phone:  <Phone  className="w-5 h-5 text-white" />,
    mail:   <Mail   className="w-5 h-5 text-white" />,
    mapPin: <MapPin className="w-5 h-5 text-white" />,
    clock:  <Clock  className="w-5 h-5 text-white" />,
    globe:  <Globe  className="w-5 h-5 text-white" />,
    users:  <Users  className="w-5 h-5 text-white" />,
};

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
    const [data, setData]         = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [form, setForm]         = useState(EMPTY_FORM);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading]   = useState(false);

    useEffect(() => {
        client
            .fetch(`*[_type == "contact"][0]{
                badgeText,
                headingPrefix,
                headingHighlight,
                subheading,
                contactDetails[]{
                    label,
                    value,
                    sub,
                    href,
                    icon,
                    iconBg
                },
                quickNote,
                formTitle,
                formSubtitle,
                formSubmitLabel,
                successTitle,
                successMessage
            }`)
            .then((res) => {
                setData(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching contact data:', error);
                setIsLoading(false);
            });
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Replace with your real API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    // ── LOADING ──
    if (isLoading) {
        return (
            <div className="min-h-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600" />
            </div>
        );
    }

    // ── NO DATA ──
    if (!data) return null;

    const details = (data.contactDetails ?? []).filter(Boolean);

    return (
        <section id="contact" className="relative py-20 sm:py-28
            bg-linear-to-b from-green-50 to-white overflow-hidden">

            {/* Decorative orbs */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full
                bg-green-200/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full
                bg-teal-200/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── HEADER ── */}
                <div className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-20">

                    {data.badgeText && (
                        <span className="inline-flex items-center gap-2.5 px-5 py-2.5
                            bg-white/80 backdrop-blur-md border border-green-200
                            rounded-full text-xs font-bold uppercase tracking-widest
                            text-green-700 shadow-md shadow-green-900/8">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            {data.badgeText}
                        </span>
                    )}

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

                    {data.subheading && (
                        <p className="text-lg sm:text-xl text-green-800/70 font-medium
                            max-w-2xl leading-relaxed">
                            {data.subheading}
                        </p>
                    )}
                </div>

                {/* ── TWO COLUMN LAYOUT ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* ── LEFT: Contact Info ── */}
                    <div className="flex flex-col gap-5">

                        {details.length > 0 && (
                            <div className="flex flex-col gap-4">
                                {details.map(({ icon, iconBg, label, value, sub, href }) => (
                                    <div key={label}
                                        className="flex items-center gap-4 p-4 rounded-2xl
                                            bg-white/80 backdrop-blur-md border border-green-100
                                            hover:border-green-300 shadow-sm shadow-green-900/5
                                            hover:-translate-y-0.5 transition-all duration-200 group">

                                        {/* Icon badge */}
                                        <div className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center
                                            bg-linear-to-br ${iconBg || 'from-green-500 to-emerald-700'}
                                            shadow-md shadow-green-500/20
                                            group-hover:scale-110 transition-transform duration-200`}>
                                            {iconMap[icon] ?? iconMap['phone']}
                                        </div>

                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[0.6rem] font-bold uppercase
                                                tracking-widest text-green-500">
                                                {label}
                                            </span>
                                            {href ? (
                                                <a href={href}
                                                    className="text-sm font-extrabold text-green-900
                                                        hover:text-green-700 transition-colors duration-150 truncate">
                                                    {value}
                                                </a>
                                            ) : (
                                                <span className="text-sm font-extrabold text-green-900">
                                                    {value}
                                                </span>
                                            )}
                                            {sub && (
                                                <span className="text-xs text-green-700/50 font-medium">
                                                    {sub}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Gradient divider */}
                        <div className="h-px bg-linear-to-r from-transparent via-green-300 to-transparent" />

                        {/* Quick note banner */}
                        {data.quickNote && (
                            <div className="p-5 rounded-2xl
                                bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                                border border-green-400/40 shadow-lg shadow-green-600/20">
                                <p className="text-sm font-bold text-white/90 leading-relaxed">
                                    🏡 {data.quickNote}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* ── RIGHT: Contact Form ── */}
                    <div className="bg-white/80 backdrop-blur-md border border-green-100
                        rounded-3xl p-7 sm:p-9 shadow-xl shadow-green-900/8">

                        {submitted ? (
                            /* ── SUCCESS STATE ── */
                            <div className="flex flex-col items-center justify-center
                                text-center gap-5 py-10">
                                <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200
                                    flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-green-900">
                                    {data.successTitle || 'Message Sent!'}
                                </h3>
                                <p className="text-green-800/65 font-medium max-w-xs leading-relaxed">
                                    {data.successMessage || 'Thank you for reaching out. One of our agents will get back to you within 24 hours.'}
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
                                    className="px-6 py-2.5 rounded-xl font-extrabold text-xs uppercase
                                        tracking-widest text-green-900 bg-green-50 border border-green-200
                                        hover:bg-green-100 hover:border-green-300 transition-all duration-200"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            /* ── FORM ── */
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                <div>
                                    <h3 className="text-xl font-extrabold text-green-900">
                                        {data.formTitle || 'Send Us a Message'}
                                    </h3>
                                    {data.formSubtitle && (
                                        <p className="text-sm text-green-800/55 font-medium mt-1">
                                            {data.formSubtitle}
                                        </p>
                                    )}
                                </div>

                                {/* Name + Phone row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold uppercase tracking-widest text-green-700">
                                            Full Name <span className="text-emerald-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Kamau"
                                            className="w-full px-4 py-3 rounded-xl text-sm font-medium
                                                bg-green-50/80 border border-green-200
                                                text-green-900 placeholder-green-400/60
                                                focus:outline-none focus:border-emerald-400 focus:bg-white
                                                transition-all duration-200"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold uppercase tracking-widest text-green-700">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+254 700 000 000"
                                            className="w-full px-4 py-3 rounded-xl text-sm font-medium
                                                bg-green-50/80 border border-green-200
                                                text-green-900 placeholder-green-400/60
                                                focus:outline-none focus:border-emerald-400 focus:bg-white
                                                transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold uppercase tracking-widest text-green-700">
                                        Email Address <span className="text-emerald-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl text-sm font-medium
                                            bg-green-50/80 border border-green-200
                                            text-green-900 placeholder-green-400/60
                                            focus:outline-none focus:border-emerald-400 focus:bg-white
                                            transition-all duration-200"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold uppercase tracking-widest text-green-700">
                                        Message <span className="text-emerald-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us what you're looking for — location, plot size, budget..."
                                        className="w-full px-4 py-3 rounded-xl text-sm font-medium
                                            bg-green-50/80 border border-green-200
                                            text-green-900 placeholder-green-400/60
                                            focus:outline-none focus:border-emerald-400 focus:bg-white
                                            transition-all duration-200 resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex items-center justify-center gap-2
                                        px-6 py-3.5 rounded-xl font-extrabold text-sm uppercase
                                        tracking-widest text-white
                                        bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                                        hover:from-green-400 hover:via-emerald-500 hover:to-teal-500
                                        shadow-lg shadow-green-600/30 hover:shadow-green-500/40
                                        hover:-translate-y-0.5 active:translate-y-0
                                        disabled:opacity-60 disabled:cursor-not-allowed
                                        border border-green-400/40 transition-all duration-200"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10"
                                                    stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v8H4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            {data.formSubmitLabel || 'Send Message'}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}