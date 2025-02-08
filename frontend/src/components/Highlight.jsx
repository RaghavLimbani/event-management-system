export default function Highlight() {
    return (
        <>
            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Avent?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Easy Event Creation</h3>
                            <p>Create and publish your event in just a few clicks.</p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Seamless Ticketing</h3>
                            <p>Manage ticket sales and registrations with ease.</p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                            <p>Connect with attendees and grow your audience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}