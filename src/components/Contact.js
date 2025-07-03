import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    try {
      const response = await fetch("https://formspree.io/f/xblyqowo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message Sent ✅");
        e.target.reset();
      } else {
        setStatus("Failed ❌");
      }
    } catch (error) {
      setStatus("Error 🚫");
    }

    setTimeout(() => setStatus("Submit"), 3000); // Reset after 3s
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          {status}
        </button>
      </form>
    </section>
  );
};

export default Contact;
