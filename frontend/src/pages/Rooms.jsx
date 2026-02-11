import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "$120 / night",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    desc: "Comfortable room with modern amenities and city view.",
  },
  {
    id: 2,
    name: "Executive Suite",
    price: "$220 / night",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    desc: "Spacious suite with premium interiors and lounge area.",
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: "$450 / night",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    desc: "Ultimate luxury experience with private services.",
  },
  {
    id: 4,
    name: "Family Suite",
    price: "$300 / night",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    desc: "Perfect stay for families with spacious layout.",
  },
  {
    id: 5,
    name: "Ocean View Room",
    price: "$280 / night",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    desc: "Relax with stunning ocean views and luxury comfort.",
  },
  {
    id: 6,
    name: "Premium King Room",
    price: "$200 / night",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    desc: "Elegant king-size room with premium amenities.",
  },
];

function Rooms() {
  return (
    
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          Our Luxury Rooms
        </h1>

        {/* Rooms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={room.img}
                alt={room.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {room.name}
                </h3>

                <p className="text-gray-600 mb-3">
                  {room.desc}
                </p>

                <p className="font-bold text-yellow-600 mb-4">
                  {room.price}
                </p>

                <Link
                  to="/booking"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Rooms;
