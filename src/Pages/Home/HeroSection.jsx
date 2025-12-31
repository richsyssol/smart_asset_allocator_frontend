import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axiosInstance, { fileBaseURL } from "../../services/api";

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroItems = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/hero-items");
        const data = response.data;

        // Process image URLs
        const processedData = Array.isArray(data)
          ? data.map((item) => ({
              ...item,
              // Ensure image URL is properly formatted
              image: getImageUrl(item.image),
            }))
          : [];

        setHeroContent(processedData);
      } catch (error) {
        console.error("Error fetching hero items:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroItems();
  }, []);

  useEffect(() => {
    if (heroContent.length === 0) return;

    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, heroContent]);

  // Helper function to construct proper image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";

    // If it's already a full URL, return as is
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // Remove any leading slashes or uploads/ prefix to avoid double pathing
    const cleanPath = imagePath.replace(/^\/?uploads\//, "");

    // Construct full URL using the imported fileBaseURL
    return `${fileBaseURL}/${cleanPath}`;
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  if (isLoading)
    return (
      <div className="h-[550px] md:h-[650px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="h-[550px] md:h-[650px] flex items-center justify-center text-red-600">
        Error loading content: {error}
      </div>
    );

  if (heroContent.length === 0)
    return (
      <div className="h-[550px] md:h-[650px] flex items-center justify-center text-gray-500">
        No hero items available
      </div>
    );

  const { image, title, description } = heroContent[currentIndex];

  return (
    <div className="relative shadow-2xl w-full h-[450px] md:h-[760px] flex items-center justify-center text-white overflow-hidden mt-20">
      {/* Background Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
        }}
      ></motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 md:left-10 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 md:right-10 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={`content-${currentIndex}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-lg mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-200 drop-shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 py-3 px-8 rounded-lg text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform"
            onClick={() => (window.location.href = "/contactus")}
          >
            Book Your Consultation Today!
          </button>
        </motion.div>
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
