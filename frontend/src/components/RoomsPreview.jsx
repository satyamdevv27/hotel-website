import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "$120 / night",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    id: 2,
    name: "Executive Suite",
    price: "$220 / night",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: "$450 / night",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  },
];

function RoomsPreview() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Rooms
        </h2>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition"
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

                <p className="text-gray-600 mb-4">
                  Enjoy luxury and comfort with premium amenities.
                </p>

                <p className="font-bold mb-4 text-yellow-600">
                  {room.price}
                </p>

                <Link
                  to="/rooms"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition"
                >
                  View Room
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Rooms Button */}
        <div className="text-center mt-10">
          <Link
            to="/rooms"
            className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RoomsPreview;
