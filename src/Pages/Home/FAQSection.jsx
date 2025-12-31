import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { ChevronDown, ChevronUp } from "lucide-react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import axiosInstance, { fileBaseURL } from "../../services/api";
import { faq } from "../../public/assets/index";

export default function FAQSection() {
  const [expandedSections, setExpandedSections] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axiosInstance.get("/faqs");
        setFaqData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch FAQs");
        setLoading(false);
        console.error("Error fetching FAQs:", err);
      }
    };

    fetchFaqs();
  }, []);

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  if (loading) {
    return (
      <ContentWrapper>
        <div className="w-full relative mt-10 mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
          <p>Loading FAQs...</p>
        </div>
      </ContentWrapper>
    );
  }

  if (error) {
    return (
      <ContentWrapper>
        <div className="w-full relative mt-10 mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </ContentWrapper>
    );
  }

  return (
    <ParallaxProvider>
      <ContentWrapper>
        <div className="w-full relative mt-10 mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
          <motion.h1
            className="text-4xl font-extrabold mb-2 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Some Important FAQ's
          </motion.h1>

          <motion.h3
            className="font-palanquin text-center text-xl md:text-3xl font-bold mb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Common
            <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              Frequently Asked
            </span>
            Questions
          </motion.h3>

          <div className="flex flex-col mt-10 md:flex-row gap-5 justify-around items-center">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="p-4 shadow-md rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                    onClick={() => toggleSection(index)}
                  >
                    <span className="font-semibold text-gray-900">
                      {item.question}
                    </span>
                    {expandedSections.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-700" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-700" />
                    )}
                  </div>

                  {expandedSections.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 p-4 rounded-lg bg-gray-50 border-l-4 border-orange-500 shadow-md text-left"
                    >
                      <div
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 flex-shrink-0 w-[350px] h-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={faq}
                alt="life-insurance-faq"
                className="w-[350px] max-w-lg mx-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </ContentWrapper>
    </ParallaxProvider>
  );
}
