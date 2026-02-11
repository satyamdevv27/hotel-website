function Contact() {
  return (
    <section className="relative py-20 text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="hotel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-500">
          Contact RoyalStay
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Get in Touch
            </h2>

            <p className="text-gray-300">
              Have questions or need assistance with booking?
              Our luxury hospitality team is available 24/7.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>📍 Mumbai, India</p>
              <p>📞 +91 9876543210</p>
              <p>✉️ info@royalstay.com</p>
              <p>🕒 24/7 Customer Support</p>
            </div>
          </div>

          {/* Form */}
          <form className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-4 border border-white/20">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold w-full hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>

    </section>
  );
}

export default Contact;
