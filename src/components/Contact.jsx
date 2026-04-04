import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactDetails = [
    {
        icon: <Phone className="w-5 h-5 text-white" />,
        iconBg: "from-green-500 to-emerald-700",
        label: "Phone",
        value: "123-456-7890",
        sub: "Mon – Sat, 8am – 6pm",
        href: "tel:1234567890",
    },
    {
        icon: <Mail className="w-5 h-5 text-white" />,
        iconBg: "from-emerald-500 to-teal-700",
        label: "Email",
        value: "info@finlandproperties.com",
        sub: "We reply within 24 hours",
        href: "mailto:info@finlandproperties.com",
    },
    {
        icon: <MapPin className="w-5 h-5 text-white" />,
        iconBg: "from-teal-500 to-green-700",
        label: "Office",
        value: "Nairobi, Kenya",
        sub: "Visit us by appointment",
        href: "#",
    },
    {
        icon: <Clock className="w-5 h-5 text-white" />,
        iconBg: "from-green-600 to-emerald-800",
        label: "Working Hours",
        value: "Mon – Sat: 8am – 6pm",
        sub: "Sunday: Closed",
        href: null,
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate submission — replace with your real API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section id="contact" className="relative py-20 sm:py-28 bg-linear-to-b from-green-50 to-white overflow-hidden">

            {/* Decorative orbs */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-green-200/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── HEADER ── */}
                <div className="flex flex-col items-center text-center gap-4 mb-14 sm:mb-20">
                    <span className="inline-flex items-center gap-2.5 px-5 py-2.5
                        bg-white/80 backdrop-blur-md border border-green-200
                        rounded-full text-xs font-bold uppercase tracking-widest
                        text-green-700 shadow-md shadow-green-900/8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Get In Touch
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-green-900">
                        Contact{' '}
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                Us
                            </span>
                            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-green-800/70 font-medium max-w-2xl leading-relaxed">
                        Have questions or want to learn more about our properties?
                        We're here to help — reach out any time.
                    </p>
                </div>

                {/* ── TWO COLUMN LAYOUT ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* ── LEFT: Contact Info ── */}
                    <div className="flex flex-col gap-5">

                        <div className="flex flex-col gap-4">
                            {contactDetails.map(({ icon, iconBg, label, value, sub, href }) => (
                                <div key={label}
                                    className="flex items-center gap-4 p-4 rounded-2xl
                                        bg-white/80 backdrop-blur-md border border-green-100
                                        hover:border-green-300 shadow-sm shadow-green-900/5
                                        hover:-translate-y-0.5 transition-all duration-200 group">

                                    {/* Icon badge */}
                                    <div className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center
                                        bg-linear-to-br ${iconBg}
                                        shadow-md shadow-green-500/20
                                        group-hover:scale-110 transition-transform duration-200`}>
                                        {icon}
                                    </div>

                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-green-500">
                                            {label}
                                        </span>
                                        {href ? (
                                            <a href={href}
                                                className="text-sm font-extrabold text-green-900 hover:text-green-700
                                                    transition-colors duration-150 truncate">
                                                {value}
                                            </a>
                                        ) : (
                                            <span className="text-sm font-extrabold text-green-900">{value}</span>
                                        )}
                                        <span className="text-xs text-green-700/50 font-medium">{sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gradient divider */}
                        <div className="h-px bg-linear-to-r from-transparent via-green-300 to-transparent" />

                        {/* Quick note */}
                        <div className="p-5 rounded-2xl
                            bg-linear-to-br from-green-500 via-emerald-600 to-teal-600
                            border border-green-400/40 shadow-lg shadow-green-600/20">
                            <p className="text-sm font-bold text-white/90 leading-relaxed">
                                🏡 <span className="text-white">Site visits</span> are arranged within
                                48 hours of inquiry. Our agents will call you to confirm a convenient time.
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT: Contact Form ── */}
                    <div className="bg-white/80 backdrop-blur-md border border-green-100
                        rounded-3xl p-7 sm:p-9 shadow-xl shadow-green-900/8">

                        {submitted ? (
                            /* ── SUCCESS STATE ── */
                            <div className="flex flex-col items-center justify-center text-center gap-5 py-10">
                                <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200
                                    flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-green-900">Message Sent!</h3>
                                <p className="text-green-800/65 font-medium max-w-xs leading-relaxed">
                                    Thank you for reaching out. One of our agents will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                                    className="px-6 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-widest
                                        text-green-900 bg-green-50 border border-green-200
                                        hover:bg-green-100 hover:border-green-300 transition-all duration-200"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            /* ── FORM ── */
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                <div>
                                    <h3 className="text-xl font-extrabold text-green-900">Send Us a Message</h3>
                                    <p className="text-sm text-green-800/55 font-medium mt-1">
                                        Fill in the form and we'll get back to you shortly.
                                    </p>
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
                                            Send Message
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