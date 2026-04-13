import logo from "../assets/logo.jpg";
import { useState, useEffect } from "react";
import { X, Menu, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Properties" },
  { href: "#location", label: "Location" },
  { href: "#choose", label: "Why Us" },
  { href: "#step", label: "Process" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500
          ${scrolled
            ? "bg-white/90 backdrop-blur-2xl border-b border-green-200 shadow-xl shadow-green-900/10"
            : "bg-white/80 backdrop-blur-xl border-b border-green-100 shadow-md shadow-green-900/5"
          }`}
      >
        {/* Top accent stripe */}
        <div className="h-0.75 w-full bg-linear-to-r from-green-400 via-emerald-500 to-teal-500" />

        {/* ── MAIN BAR ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">

            {/* ── LOGO ── */}
            <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
              {/* Badge — no color filters, correct size, rounded to clip jpg edges */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                <div className="absolute inset-0 rounded-xl bg-green-400/25 blur-md
                  scale-110 group-hover:scale-125 transition-transform duration-300" />
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden
                  border border-green-200 shadow-md shadow-green-500/20">
                  <img
                    src={logo}
                    alt="Finland Properties logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Word-mark */}
              <div className="leading-none">
                <span className="block text-base sm:text-xl md:text-2xl font-extrabold tracking-tight">
                  <span className="text-green-900 group-hover:text-green-700 transition-colors duration-200">
                    Fineland
                  </span>
                  <span className="text-emerald-500 font-bold">
                    {" "}Properties
                  </span>
                </span>
                <span className="hidden sm:block text-[0.5rem] sm:text-[0.6rem] uppercase tracking-[0.18em] text-green-600 font-semibold">
                  Land &amp; Real Estate
                </span>
              </div>
            </a>

            {/* ── DESKTOP NAV LINKS ── */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-2 xl:px-3 py-2 rounded-lg
                    text-[0.7rem] xl:text-[0.76rem] font-bold uppercase tracking-widest
                    text-green-900 hover:text-green-700
                    hover:bg-green-50 transition-all duration-200 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-3 right-3 h-px rounded-full
                    bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* ── RIGHT SECTION ── */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-gradient-to-b
                from-transparent via-green-300 to-transparent" />

              {/* Contact info */}
              <div className="hidden sm:flex flex-col items-end leading-tight">
                <span className="text-[0.6rem] uppercase tracking-[0.14em] text-green-500 font-bold">
                  Direct Line
                </span>
                <span className="text-sm font-extrabold text-green-900 tracking-wide">
                  123-456-7890
                </span>
              </div>

              {/* CTA */}
              <button
                className="hidden sm:inline-flex items-center gap-2
                  bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600
                  hover:from-green-400 hover:via-emerald-500 hover:to-teal-500
                  text-white font-extrabold text-[0.72rem] uppercase tracking-widest
                  px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200
                  shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-500/40
                  hover:-translate-y-0.5 active:translate-y-0 border border-green-400/40
                  whitespace-nowrap"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Contact Sales</span>
                <span className="sm:hidden">Call</span>
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl
                  bg-green-100 border border-green-200 text-green-800
                  hover:bg-green-200 hover:text-green-900
                  transition-all duration-200 shadow-sm"
              >
                {isMobileMenuOpen
                  ? <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                }
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl
            border-t border-green-200 shadow-2xl shadow-green-900/10
            animate-in slide-in-from-top-3 duration-300 max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">

              <div className="grid grid-cols-2 gap-2 mb-4">
                {navLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-2.5 px-3 py-3 rounded-xl
                      text-[0.75rem] sm:text-[0.78rem] font-bold uppercase tracking-wider
                      text-green-900 hover:text-green-700
                      hover:bg-green-50 border border-transparent hover:border-green-200
                      transition-all duration-150 group"
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 transition-transform
                      duration-200 group-hover:scale-125
                      ${i % 4 === 0 ? "bg-green-400"
                        : i % 4 === 1 ? "bg-emerald-500"
                          : i % 4 === 2 ? "bg-teal-500"
                            : "bg-green-600"}`}
                    />
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent mb-4" />

              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 border border-green-200
                    flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.14em] text-green-500 font-bold leading-none mb-1">
                      Direct Line
                    </p>
                    <p className="text-base font-extrabold text-green-900 tracking-wide leading-none">
                      123-456-7890
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2
                    bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600
                    hover:from-green-400 hover:via-emerald-500 hover:to-teal-500
                    text-white font-extrabold text-[0.75rem] uppercase tracking-widest
                    px-5 py-3 rounded-xl border border-green-400/40
                    shadow-lg shadow-green-600/25 transition-all duration-200"
                  onClick={handleLinkClick}
                >
                  <Phone className="w-4 h-4" />
                  Contact Sales
                </a>
              </div>

            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}