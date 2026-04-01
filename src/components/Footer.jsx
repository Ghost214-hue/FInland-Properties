export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>&copy; 2024 Finland Properties. All rights reserved.</p>
                <div className="mt-4">
                    <a href="#home" className="mx-2 hover:underline">Home</a>
                    <a href="#about" className="mx-2 hover:underline">About</a>
                    <a href="#contact" className="mx-2 hover:underline">Contact</a>
                    <a href="#features" className="mx-2 hover:underline">Features</a>
                    <a href="#location" className="mx-2 hover:underline">Location</a>
                    <a href="#choose" className="mx-2 hover:underline">Choose</a>
                    <a href="#step" className="mx-2 hover:underline">Step</a>
                    <a href="#testimonials" className="mx-2 hover:underline">Testimonials</a>
                </div>
            </div>
        </footer>
    );
}