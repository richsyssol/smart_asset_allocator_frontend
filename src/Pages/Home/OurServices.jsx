import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axiosInstance, { fileBaseURL } from "../../services/api";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const OurServices = () => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await axiosInstance.get("/insurance-solutions");
        if (response.data.success && Array.isArray(response.data.data)) {
          setSolutions(response.data.data);
        } else {
          throw new Error("Invalid data format from API");
        }
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to fetch insurance solutions"
        );
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  if (loading) {
    return (
      <ContentWrapper>
        <section className="py-16 px-4 md:px-10 bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </section>
      </ContentWrapper>
    );
  }

  if (error) {
    return (
      <ContentWrapper>
        <section className="py-16 px-4 md:px-10 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-2xl mx-auto"
            role="alert"
          >
            <strong className="font-bold">Error loading services!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Try Again
          </button>
        </section>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <section className="py-16 px-4 md:px-10 bg-gray-100">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="font-palanquin text-center text-xl md:text-3xl font-bold">
            Insurance
            <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              Provides You a Better
            </span>
            Future
          </h3>

          <p className="mt-4 text-2xl md:text-4xl text-gray-600">
            Pure Insurance Solutions
          </p>
          <p className="italic text-gray-500 mt-2">
            "The best time to buy Insurance was yesterday. The next best time is
            today."
          </p>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            When it comes to our family, we never compromise. That's why we
            offer a bouquet of pure insurance plans in every important category
            – term insurance, health insurance, critical illness insurance,
            personal accident insurance, home insurance, vehicle insurance, and
            much more. Our strength lies in in-depth knowledge, genuine
            guidance, and effortless claim support! Consult us and get
            benefited!
          </p>
        </div>

        {/* Solutions Grid */}
        {solutions.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={`${fileBaseURL}${solution.image}`}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentNode.innerHTML = `
                        <div class="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center text-gray-500">
                          Image unavailable
                        </div>
                      `;
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-xl">
              No insurance solutions available at the moment.
            </p>
          </div>
        )}
      </section>
    </ContentWrapper>
  );
};

export default OurServices;
