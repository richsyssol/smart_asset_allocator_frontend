import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChartPie, FaRegMoneyBillAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdInsights } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import VisionaryLeaders from "./VisionaryLeaders";
import Location from "./Location";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import { useLocation } from "react-router-dom";
import WhoWeAre from "./WhoWeAre";
import VisionMission from "./VisionMission";

const Aboutus = () => {
  const visionRef = useRef(null);
  const teamRef = useRef(null);
  const location = useLocation();
  const [current, setCurrent] = useState(0);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://asset.demovoting.com/api/about-us"
        );
        setApiData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.hash === "#vision" && visionRef.current) {
      visionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#team" && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const iconComponents = {
    FaChartPie: <FaChartPie className="text-2xl" />,
    GiReceiveMoney: <GiReceiveMoney className="text-2xl" />,
    FaRegMoneyBillAlt: <FaRegMoneyBillAlt className="text-2xl" />,
    MdInsights: <MdInsights className="text-2xl" />,
  };

  const next = () => {
    if (apiData?.company_images) {
      setCurrent((prev) => (prev + 1) % apiData.company_images.length);
    }
  };

  const prev = () => {
    if (apiData?.company_images) {
      setCurrent((prev) =>
        prev === 0 ? apiData.company_images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current, apiData]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  if (!apiData)
    return <div className="text-center py-20">No data available</div>;

  return (
    <ContentWrapper>
      {/* About Us Section */}
      <div ref={visionRef} className="mt-30 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16"
        >
          <div className="max-w-[1440px] w-full">
            {/* Enhanced Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                  Our Company
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Pioneering financial solutions with integrity and innovation
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
              {/* Enhanced Carousel */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden rounded-2xl shadow-xl">
                  {apiData.company_images.map((img, index) => (
                    <motion.img
                      key={index}
                      src={`https://asset.demovoting.com/uploads/${img}`}
                      alt={`Gallery ${index + 1}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === current ? 1 : 0 }}
                    />
                  ))}

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {apiData.company_images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === current ? "bg-white w-6" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={prev}
                    className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: apiData.company_description,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <WhoWeAre
          whyChooseUs={apiData.why_choose_us}
          bullets={apiData.why_choose_us_bullets}
        />

        {/* Enhanced Key Strengths */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-700">Key Strengths</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the financial services industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8">
            {apiData.key_strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-lg p-3 mr-4">
                    {item.icon && iconComponents[item.icon] ? (
                      iconComponents[item.icon]
                    ) : (
                      <FaChartPie className="text-2xl" />
                    )}
                  </div>
                  <div>
                    {item.title && (
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                    )}
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Mission */}

        <VisionMission />
        {/* Enhanced Our Expertise */}
        <motion.div
          className="mt-28 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-700">Areas of Expertise</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge to help you achieve your financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8">
            {apiData.expertise_areas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-blue-100"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Location />

      {/* Our Team */}
      <div ref={teamRef} className="mt-24">
        <VisionaryLeaders leaders={apiData.leaders} />
      </div>
    </ContentWrapper>
  );
};

export default Aboutus;
