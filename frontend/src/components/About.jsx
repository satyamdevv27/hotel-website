import { Link } from "react-router-dom";

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            alt="hotel"
            className="rounded-lg shadow-lg w-full h-100 object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Experience Luxury at RoyalStay Hotel
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            RoyalStay Hotel offers world-class luxury, elegant rooms,
            exceptional dining, and premium hospitality services designed
            to give guests an unforgettable experience. Whether you're here
            for business or relaxation, our hotel ensures comfort and
            elegance at every step.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Located in the heart of the city, RoyalStay blends modern
            luxury with timeless sophistication, making it the perfect
            destination for travelers seeking premium accommodation.
          </p>

          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3 rounded hover:bg-yellow-500 hover:text-black transition"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}

export default About;
