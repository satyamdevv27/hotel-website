function Amenities() {
  const amenities = [
    { title: "Luxury Spa", icon: "💆" },
    { title: "Infinity Pool", icon: "🏊" },
    { title: "Fine Dining", icon: "🍽️" },
    { title: "Free WiFi", icon: "📶" },
    { title: "Fitness Center", icon: "🏋️" },
    { title: "Airport Pickup", icon: "🚗" },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">
          Luxury Amenities
        </h2>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg text-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Amenities;
