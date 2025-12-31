import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/reviews"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="max-container bg-blue-50 py-24 w-full text-gray-700">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-container bg-blue-50 py-24 w-full text-gray-700">
        <div className="text-center text-red-500">{error}</div>
      </section>
    );
  }

  return (
    <section className="max-container bg-blue-50 py-24 w-full text-gray-700">
      <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
        What Our
        <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Customers
        </span>
        Say??
      </h3>
      <p className="info-text text-md md:text-lg text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      {/* Grid Layout for Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 text-center"
          >
            <video
              src={`http://127.0.0.1:8000/api/uploads/${review.video_url}`} // Adjust the URL format as needed
              controls
              className="w-full h-60 rounded-lg"
            />
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h4 className="font-semibold text-lg mt-3 text-gray-900">
              {review.customer_name}
            </h4>
            <p className="text-sm text-gray-600 mt-1">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
