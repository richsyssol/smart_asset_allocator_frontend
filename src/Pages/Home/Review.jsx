import React from "react";

const SimpleTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Turner",
      title: "CEO, Startup Inc",
      content:
        "Exceptional service and outstanding results. Highly recommended!",
      rating: "★★★★★",
    },
    {
      id: 2,
      name: "Maria Garcia",
      title: "Marketing Head, BrandCo",
      content:
        "Our conversion rates improved dramatically after working with them.",
      rating: "★★★★★",
    },
    {
      id: 3,
      name: "James Wilson",
      title: "Operations Manager, TechFlow",
      content: "Professional team that delivers on promises every single time.",
      rating: "★★★★☆",
    },
    {
      id: 4,
      name: "Lisa Park",
      title: "Product Lead, InnovateX",
      content: "Transformed our digital strategy with innovative solutions.",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Client Testimonials
        </h2>
        <p className="text-gray-600 text-center mb-10">
          See what our clients have to say about working with us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-yellow-400 text-lg mb-3">
                {testimonial.rating}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleTestimonials;
