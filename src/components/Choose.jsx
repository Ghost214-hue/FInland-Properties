export default function Choose(){
    return(
        <section id="choose" className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Finland Properties?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                        <p className="text-gray-600">Our team has extensive knowledge of the Finnish real estate market, ensuring you get the best advice and guidance.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Wide Selection</h3>
                        <p className="text-gray-600">We offer a wide range of properties to suit every need and budget, from urban apartments to countryside estates.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
                        <p className="text-gray-600">We are committed to providing exceptional customer service and ensuring our clients are satisfied with their real estate experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );  
    
}