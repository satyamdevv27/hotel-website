import { Link } from "react-router-dom";

function BookingCTA() {
  return (
    <section className="relative py-24">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
          alt="hotel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Book Your Dream Stay Today
        </h2>

        <p className="mb-8 text-lg">
          Experience luxury, comfort, and unforgettable hospitality at
          RoyalStay Hotel.
        </p>

        <Link
          to="/booking"
          className="bg-yellow-500 text-black px-8 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Book Now
        </Link>
      </div>

    </section>
  );
}

export default BookingCTA;
