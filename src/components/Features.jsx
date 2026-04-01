export default function Features(){
    return(
        <section id="features" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Wide Range of Properties</h3>
                        <p className="text-gray-600">We offer a diverse selection of properties to suit every taste and budget, from cozy apartments to luxurious villas.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
                        <p className="text-gray-600">Our team of experienced real estate professionals is here to guide you through every step of the buying or selling process.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Competitive Pricing</h3>
                        <p className="text-gray-600">We strive to offer competitive pricing on all our properties, ensuring you get the best value for your investment.</p>
                    </div>
                </div>
            </div>
        </section>
    );      
}