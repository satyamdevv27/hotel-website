import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "hotel_images/overview1.avif",
  "hotel_images/overview2.avif",
  "hotel_images/pool.jpg",
  "hotel_images/hotels.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="hotel"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to RoyalStay Hotel
        </h1>

        <p className="max-w-2xl mb-6 text-lg">
          Experience unmatched luxury, comfort, and elegance in the heart
          of the city.
        </p>

        <Link
          to="/booking"
          className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Book Your Stay
        </Link>
      </div>
    </div>
  );
}

export default Hero;
