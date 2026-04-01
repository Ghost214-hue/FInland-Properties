export default function Location() {
    return (
        <section id="location" className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Prime Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src="../../assets/location" alt="Location" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div>
                        <p className="text-lg mb-4">Our properties are located in the heart of Finland's most desirable areas, offering stunning views and easy access to local amenities.</p>
                        <ul className="list-disc list-inside text-lg">
                            <li>Close to public transportation</li>
                            <li>Nearby schools and parks</li>
                            <li>Vibrant local community</li>
                            <li>Proximity to shopping and dining</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}