import hero from "../assets/hero.png";
import { useState, useEffect } from "react";
import { X, Menu, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#location", label: "Location" },
  { href: "#choose", label: "Why Us" },
  { href: "#step", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? "bg-gray-950/95 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-emerald-500/20"
          : "bg-gray-950/70 backdrop-blur-md border-b border-emerald-500/10"
        }`}
    >
      {/* ── MAIN BAR ── */}
      <div className="max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-3 hrink-0 group"
          >
            {/* Icon badge */}
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-700 to-emerald-900
              border border-emerald-500/40 flex items-center justify-center
              shadow-[0_0_16px_rgba(52,211,153,0.2)] group-hover:shadow-[0_0_24px_rgba(52,211,153,0.35)]
              transition-shadow duration-300 shrink-0">
              <img
                src={hero}
                alt="Finland Properties logo"
                className="w-5 h-5 object-contain brightness-0 invert"
              />
            </div>

            {/* Word-mark */}
            <span className="text-xl sm:text-2xl md:text-[1.6rem] font-extrabold tracking-tight leading-none">
              <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200">
                Finland
              </span>
              <span className="text-emerald-100/40 font-semibold">
                {" "}Properties
              </span>
            </span>
          </a>

          {/* ── DESKTOP NAV LINKS ── */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-[0.78rem] font-semibold uppercase tracking-widest
                  text-emerald-100/50 hover:text-emerald-300 transition-colors duration-200
                  group"
              >
                {link.label}
                {/* animated underline */}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-linear-to-r
                  from-emerald-400 to-emerald-300 scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* ── RIGHT SECTION ── */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Contact info — hidden on small screens */}
            <div className="hidden sm:flex flex-col items-end leading-tight">
              <span className="text-[0.65rem] uppercase tracking-[0.12em] text-emerald-100/30 font-medium">
                Direct Line
              </span>
              <span className="text-sm font-bold text-emerald-400 tracking-wide">
                123-456-7890
              </span>
            </div>

            {/* CTA button — hidden on mobile */}
            <button
              className="hidden sm:inline-flex items-center gap-2 bg-linear-to-r from-emerald-500 to-emerald-700
                hover:from-emerald-400 hover:to-emerald-600 text-gray-950 font-bold text-[0.75rem]
                uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all duration-200
                shadow-[0_0_20px_rgba(52,211,153,0.25)] hover:shadow-[0_0_28px_rgba(52,211,153,0.45)]
                hover:-translate-y-px active:translate-y-0"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact Sales
            </button>

            {/* Hamburger — mobile/tablet only */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg
                bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
                hover:bg-emerald-500/20 hover:text-emerald-300 transition-all duration-200"
            >
              {isMobileMenuOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-950/98 border-t border-emerald-500/10
          animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-screen-7xl mx-auto px-4 sm:px-6 py-4 space-y-0.5">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-2 py-3 rounded-lg text-[0.82rem] font-semibold
                  uppercase tracking-widest text-emerald-100/50 hover:text-emerald-300
                  hover:bg-emerald-500/8 border-b border-emerald-500/8 last:border-b-0
                  transition-all duration-150 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40
                  group-hover:bg-emerald-400 group-hover:scale-150
                  transition-all duration-200 shrink-0" />
                {link.label}
              </a>
            ))}

            {/* Mobile bottom row: phone + CTA */}
            <div className="pt-4 pb-2 flex items-center justify-between gap-4 flex-wrap
              border-t border-emerald-500/10 mt-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <Phone className="w-4 h-4" />
                <span className="font-bold text-sm tracking-wide">123-456-7890</span>
              </div>
              <button
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2
                  bg-linear-to-r from-emerald-500 to-emerald-700
                  hover:from-emerald-400 hover:to-emerald-600
                  text-gray-950 font-bold text-[0.75rem] uppercase tracking-widest
                  px-5 py-2.5 rounded-lg transition-all duration-200
                  shadow-[0_0_20px_rgba(52,211,153,0.2)]"
              >
                <Phone className="w-3.5 h-3.5" />
                Contact Sales
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}