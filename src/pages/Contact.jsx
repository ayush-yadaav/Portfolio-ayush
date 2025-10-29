import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1bec1e31-f1d4-4099-ab61-5ee9087820e9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message was sent successfully!",
        icon: "success",
      });
      event.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#030014] text-white relative overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-lg">
          Have a project in mind? Let’s create something amazing together
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md md:max-w-2xl bg-[#0B0F1C]/60 backdrop-blur-md border border-[#1f2937] rounded-2xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Let's work together"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="4"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-white resize-none focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-400 to-pink-500 hover:opacity-90 transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Send Message ✈️
            </button>
          </div>
        </form>
      </div>

      {/* Direct Email */}
      <p className="mt-10 text-gray-400">
        Or reach me directly at{" "}
        <a
          href="mailto:your@email.com"
          className="text-transparent bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text font-semibold hover:underline"
        >
          csayush27@email.com
        </a>
      </p>
    </section>
  );
}

export default Contact;
