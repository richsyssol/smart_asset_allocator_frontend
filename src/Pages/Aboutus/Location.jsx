import React from "react";

function Location() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Locations
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.440861985819!2d73.7804578!3d19.9900817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb6bb8f79091%3A0xa3b550b93d2e5afc!2sSMART+ASSET+ALLOCATORS!5e0!3m2!1sen!2sin!4v1744911612844!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location of Smart Asset Allocators"
              aria-label="Interactive map showing Smart Asset Allocators office location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
