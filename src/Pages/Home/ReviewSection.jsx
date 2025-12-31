import React, { useState, useEffect } from "react";
import axiosInstance, { fileBaseURL } from "../../services/api";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosInstance.get("/reviews"); // Using axios instance
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load reviews");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="max-container bg-blue-50 py-24 w-full text-gray-700">
      <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
        What Our
        <span className="m-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
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
        {reviews.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No reviews available yet.</p>
          </div>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </div>
    </section>
  );
};

const ReviewCard = ({ review }) => {
  // Get full video URL using the fileBaseURL from axios instance
  const getVideoUrl = () => {
    if (!review.video_url) return null;
    return `${fileBaseURL}${review.video_url}`;
  };

  const videoUrl = getVideoUrl();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
      {videoUrl ? (
        <video
          src={videoUrl}
          controls
          className="w-full h-60 rounded-lg object-cover"
        />
      ) : (
        <div className="w-full h-60 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">No video available</p>
        </div>
      )}
      <h4 className="font-semibold text-lg mt-3 text-gray-900">
        {review.customer_name}
      </h4>
      <p className="text-sm text-gray-600 mt-1">{review.review}</p>
      {review.rating && (
        <div className="flex justify-center mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                i < review.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
