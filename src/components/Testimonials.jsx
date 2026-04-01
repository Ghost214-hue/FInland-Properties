export default function Testimonials(){
    return(
        <section id="testimonials" className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">"Finland Properties made buying my dream home a breeze. Their team was professional and attentive throughout the entire process."</p>
                        <div className="flex items-center">
                            <img src="../../assets/client1.jpg" alt="Client 1" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="text-sm font-semibold">John Doe</p>
                                <p className="text-sm text-gray-500">Homeowner</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">"I highly recommend Finland Properties for anyone looking to invest in real estate. Their expertise and dedication are unmatched."</p>
                        <div className="flex items-center">
                            <img src="../../assets/client2.jpg" alt="Client 2" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="text-sm font-semibold">Jane Smith</p>
                                <p className="text-sm text-gray-500">Investor</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">"Finland Properties exceeded my expectations in every way. They truly understand the market and are committed to their clients."</p>
                        <div className="flex items-center">
                            <img src="../../assets/client3.jpg" alt="Client 3" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="text-sm font-semibold">Bob Johnson</p>
                                <p className="text-sm text-gray-500">Homeowner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
