import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Highlight from "./Highlight";
import Testimonial from "./Testimonial";

export function HeroSection() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            Host & Discover Amazing Events
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Join thousands of organizers and attendees on Avent. Create,
            explore, and attend events with ease.
          </p>
          <Link to="/register">
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg hover:bg-gray-200">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <Highlight />
      <Testimonial />
      <Footer />
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold">Avent</h3>
          <p className="mt-2 text-gray-400">
            Your go-to platform for managing and discovering events worldwide.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-blue-400">
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Avent. All rights reserved.
      </div>
    </footer>
  );
}
