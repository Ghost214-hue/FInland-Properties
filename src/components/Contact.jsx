export default function Contact() {
    return (
        <section id="contact" className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <p className="text-gray-600 text-center mb-4">Have questions or want to learn more about our properties? We're here to help! Reach out to us through any of the following methods:</p>
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold">Phone:</span>
                        <span>123-456-7890</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold">Email:</span>
                        <span>info@finlandproperties.com</span>
                    </div>
                </div>
            </div>
        </section>
    );
}