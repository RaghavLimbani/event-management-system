import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../input.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold"><Link to="/">Avent</Link></div>

        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/events" className="hover:text-blue-500">Events</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <Link to="/register" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Register</Link>
          <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4 space-y-4">
          <Link to="/" className="block text-center hover:text-blue-500">Home</Link>
          <Link to="/events" className="block text-center hover:text-blue-500">Events</Link>
          <Link to="/about" className="block text-center hover:text-blue-500">About</Link>
          <Link to="/contact" className="block text-center hover:text-blue-500">Contact</Link>
          <div className="flex flex-col items-center space-y-2">
            <Link to="/register" className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Register</Link>
            <Link to="/login" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

