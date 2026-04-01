export default function Step() {
    return (
        <section id="step" className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Step 1: Browse Listings</h3>
                        <p>Explore our extensive collection of properties across Finland. Use filters to find your perfect home.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Step 2: Schedule a Visit</h3>    
                        <p>Contact us to schedule a visit to any property you're interested in. Our team will be happy to assist you.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Step 3: Make an Offer</h3>
                        <p>Once you've found your dream property, work with our team to make an offer and navigate the buying process.</p>
                    </div>
                </div>
            </div>
        </section>
    );      
}