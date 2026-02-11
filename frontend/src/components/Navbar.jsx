import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-500">
          RoyalStay
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/rooms" className="hover:text-yellow-500">Rooms</Link>
          <Link to="/gallery" className="hover:text-yellow-500">Gallery</Link>
          <Link to="/contact" className="hover:text-yellow-500">Contact</Link>

          <Link
            to="/booking"
            className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
          >
            Book Now
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6 flex flex-col gap-4">
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/rooms">Rooms</Link>
          <Link onClick={() => setIsOpen(false)} to="/gallery">Gallery</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>

          <Link
            onClick={() => setIsOpen(false)}
            to="/booking"
            className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
