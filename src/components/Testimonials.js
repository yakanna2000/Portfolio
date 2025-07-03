import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Mentor at CodeAlpha",
    comment:
      "Yakanna is a fast learner and dedicated developer. His portfolio and projects showcase excellent technical and creative skills.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    data-aos="fade-up"
  >
    <h2 className="text-4xl font-bold mb-10 text-center">Testimonials</h2>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testi, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition transform hover:scale-105"
        >
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={testi.avatar}
              alt={testi.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">{testi.name}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">{testi.role}</span>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">“{testi.comment}”</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
