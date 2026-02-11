import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Hotel Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            RoyalStay Hotel
          </h2>
          <p>
            Experience luxury and comfort with world-class hospitality,
            premium rooms, and unforgettable services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-yellow-500">Rooms</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-500">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Contact Us
          </h3>

          <p>📍 Mumbai, India</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ info@royalstay.com</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <span className="cursor-pointer hover:text-yellow-500">🌐</span>
            <span className="cursor-pointer hover:text-yellow-500">📸</span>
            <span className="cursor-pointer hover:text-yellow-500">🐦</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} RoyalStay Hotel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
