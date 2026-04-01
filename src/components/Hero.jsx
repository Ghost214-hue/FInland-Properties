export default function Hero() {
    return (
        <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Dream Home in Finland</h1>
                    <p className="text-lg md:text-2xl mb-8">Explore our exclusive properties and find your perfect home in the heart of Finland.</p>
                    <a href="#features" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">Explore Properties</a>
                </div>
            </div>
        </section>
    );
}