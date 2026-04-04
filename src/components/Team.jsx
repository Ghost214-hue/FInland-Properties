import ceo from "../assets/daudi.jpeg";
import lucas from "../assets/lucas.jpg";



const teamMembers = [
    {
        name: "David Thigu",
        role: "Founder & CEO",
        img: ceo,
        desc: "David is the visionary behind Finland Properties, with over a decade of experience in real estate and a passion for making land ownership accessible and secure for everyone.",
        dot: "bg-green-400",
        iconBg: "from-green-500 to-emerald-700",
    },
    {
        name: "Jane Wanjiku",
        role: "Chief Operations Officer",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        desc: "Jane is the backbone of our operations, overseeing land acquisition, customer service, and legal processes to guarantee a seamless experience for every client.",
        dot: "bg-emerald-500",
        iconBg: "from-emerald-500 to-teal-700",
    },
    {
        name: "Michael Otieno",
        role: "Head of Sales",
        img: lucas,
        desc: "Michael leads our sales team with a customer-centric approach, ensuring every client finds the perfect land investment that meets their needs and goals.",
        dot: "bg-teal-500",
        iconBg: "from-teal-500 to-green-700",
    },
    {
        name: "Sarah Njeri",
        role: "Tech Lead",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        desc: "Sarah drives our digital transformation with a strong background in software development and data analytics, keeping our technology cutting-edge and user-friendly.",
        dot: "bg-green-600",
        iconBg: "from-green-600 to-emerald-800",
    },
];

export default function Team() {
    return (
        <section id="team" className="relative py-20 sm:py-28 bg-linear-to-b from-green-50 to-white overflow-hidden">

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
                        The People Behind Us
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-green-900">
                        Meet Our{' '}
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                Team
                            </span>
                            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full
                                bg-linear-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70" />
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-green-800/70 font-medium max-w-2xl leading-relaxed">
                        Meet the passionate individuals behind our success —
                        dedicated to making land ownership simple and secure.
                    </p>
                </div>

                {/* ── TEAM CARDS ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
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
                            {/* Outer glow ring */}
                            <div className="relative mb-5">
                                <div className={`absolute inset-0 rounded-full bg-linear-to-br ${member.iconBg}
                                    opacity-30 blur-md scale-110
                                    group-hover:scale-125 transition-transform duration-300`} />

                                {/* Gradient border ring */}
                                <div className={`relative p-0.75 rounded-full bg-linear-to-br ${member.iconBg}
                                    shadow-lg shadow-green-500/25`}>
                                    <div className="w-28 h-28 rounded-full overflow-hidden bg-white">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top
                                                group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Online dot indicator */}
                                <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full
                                    border-2 border-white ${member.dot}
                                    shadow-sm`} />
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
                            <div className="w-full h-px bg-linear-to-r from-transparent via-green-200 to-transparent mb-4" />

                            {/* Description */}
                            <p className="text-sm text-green-800/65 font-medium leading-relaxed flex-1
                                line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                                {member.desc}
                            </p>

                            {/* CTA */}
                            <a
                                href="#contact"
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}