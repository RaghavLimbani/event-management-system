export default function Testimonial() {
    return(
        <>
            <section className="bg-gray-100 py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white border rounded-lg shadow-md">
                            <p className="italic">"Avent made organizing my event effortless! Highly recommended."</p>
                            <h4 className="mt-4 font-semibold">- Jane Doe</h4>
                        </div>
                        <div className="p-6 bg-white border rounded-lg shadow-md">
                            <p className="italic">"Finding events has never been easier. Love the simplicity!"</p>
                            <h4 className="mt-4 font-semibold">- John Smith</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
