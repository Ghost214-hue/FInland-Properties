import {
    FaWhatsapp,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.jpg";

const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Documentation", "Help Center", "Community", "API Reference", "Status"],
    Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

const contactIcons = [
    { icon: <FaWhatsapp className="w-4 h-4" />, href: "#", label: "WhatsApp" },
    { icon: <FaPhone className="w-4 h-4" />,    href: "#", label: "Phone" },
    { icon: <MdEmail className="w-4 h-4" />,    href: "#", label: "Email" },
    { icon: <FaMapMarkerAlt className="w-4 h-4" />, href: "#", label: "Location" },
];

export default function Footer() {
    return (
        <footer className="relative bg-linear-to-b from-white to-green-50
            border-t border-green-100 overflow-hidden">

            {/* Decorative orbs — consistent with Hero & Features */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                bg-green-200/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full
                bg-teal-200/15 blur-3xl pointer-events-none" />

            {/* Top accent stripe — matches Navbar */}
            <div className="h-0.75 w-full bg-linear-to-r from-green-400 via-emerald-500 to-teal-500" />

            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8
                py-14 sm:py-16 lg:py-20">

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-12">

                    {/* ── BRAND COLUMN ── */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-5">

                        {/* Logo + wordmark */}
                        <a href="#home" className="flex items-center gap-3 group w-fit">
                            <div className="relative w-10 h-10 shrink-0">
                                <div className="absolute inset-0 rounded-xl bg-green-400/25 blur-md
                                    scale-110 group-hover:scale-125 transition-transform duration-300" />
                                <div className="relative w-10 h-10 rounded-xl overflow-hidden
                                    border border-green-200 shadow-md shadow-green-500/20">
                                    <img
                                        src={logo}
                                        alt="Finland Properties logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="leading-none">
                                <span className="block text-xl font-extrabold tracking-tight">
                                    <span className="text-green-900 group-hover:text-green-700 transition-colors duration-200">
                                        Finland
                                    </span>
                                    <span className="text-emerald-500 font-bold"> Properties</span>
                                </span>
                                <span className="text-[0.6rem] uppercase tracking-[0.18em] text-green-600 font-semibold">
                                    Land &amp; Real Estate
                                </span>
                            </div>
                        </a>

                        {/* Tagline */}
                        <p className="text-sm sm:text-base text-green-800/65 font-medium leading-relaxed max-w-xs">
                            Secure prime land investments with verified title deeds
                            and trusted, transparent processes.
                        </p>

                        {/* Social / Contact icons */}
                        <div className="flex items-center gap-2.5">
                            {contactIcons.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl
                                        bg-white/80 backdrop-blur-md border border-green-200
                                        text-green-700 hover:text-green-900
                                        hover:bg-green-50 hover:border-green-300
                                        shadow-sm shadow-green-900/6
                                        transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>

                        {/* Quick contact line */}
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[0.6rem] uppercase tracking-[0.14em] text-green-500 font-bold">
                                Direct Line
                            </span>
                            <span className="text-base font-extrabold text-green-900 tracking-wide">
                                123-456-7890
                            </span>
                        </div>
                    </div>

                    {/* ── LINKS COLUMNS ── */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-4
                        grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([category, links], i) => (
                            <div key={category}>
                                {/* Category heading with coloured dot */}
                                <h3 className="flex items-center gap-2 font-extrabold text-green-900
                                    text-sm uppercase tracking-widest mb-4">
                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0
                                        ${i % 4 === 0 ? "bg-green-400"
                                        : i % 4 === 1 ? "bg-emerald-500"
                                        : i % 4 === 2 ? "bg-teal-500"
                                        : "bg-green-600"}`}
                                    />
                                    {category}
                                </h3>
                                <ul className="flex flex-col gap-2.5">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-sm font-medium text-green-800/60
                                                    hover:text-green-700 hover:translate-x-0.5
                                                    inline-flex items-center gap-1.5
                                                    transition-all duration-150 group/link"
                                            >
                                                <span className="w-0 h-px bg-emerald-500
                                                    group-hover/link:w-3
                                                    transition-all duration-200 rounded-full" />
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── GRADIENT DIVIDER ── */}
                <div className="h-px bg-linear-to-r from-transparent via-green-300 to-transparent mb-8" />

                {/* ── BOTTOM BAR ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-sm font-medium text-green-800/55 text-center sm:text-left">
                        © 2026{" "}
                        <span className="font-bold text-green-800">Finland Properties</span>
                        . All rights reserved.
                    </p>

                    <div className="flex items-center gap-1 flex-wrap justify-center">
                        {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item, i, arr) => (
                            <span key={item} className="flex items-center gap-1">
                                <a
                                    href="#"
                                    className="text-xs font-bold uppercase tracking-wider
                                        text-green-700/60 hover:text-green-800
                                        px-2 py-1 rounded-lg hover:bg-green-50
                                        transition-all duration-150"
                                >
                                    {item}
                                </a>
                                {i < arr.length - 1 && (
                                    <span className="w-1 h-1 rounded-full bg-green-300" />
                                )}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}