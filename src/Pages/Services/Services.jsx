import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from "./ServiceHero";
import ServiceDataGrid from "./ServiceDataGrid";
import AboutSection from "./AboutSection";
import servicesData from "../../constants/servicesData.json";
import FinancialSidebar from "../../Components/Sidebar/FinancialSidebar";
import CTASection from "../Services/CTASection";

export default function Services() {
  const { slug } = useParams();
  const service = servicesData.services.find((s) => s.slug === slug);

  // Handle case when service is not found
  if (!service) {
    return (
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-red-500">Service Not Found</h2>
        <p className="mt-4 text-gray-600">
          The requested service does not exist or may have been moved.
        </p>
      </motion.div>
    );
  }

  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="container mx-auto py-12 px-4 md:px-6 mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-10">
          {/* Service Hero Section */}
          <motion.div variants={itemVariants}>
            <ServiceHero
              title={service.title}
              subtitle={service.subtitle}
              tagline={service.tagline}
              imageUrl={service.imageUrl}
            />
          </motion.div>

          {/* Service Data Grid */}
          <motion.div variants={itemVariants}>
            <ServiceDataGrid data={service.dataGrid || []} />
          </motion.div>

          {/* About Section */}
          {service.aboutContent && (
            <motion.div variants={itemVariants}>
              <AboutSection content={service.aboutContent} />
            </motion.div>
          )}

          {/* Key Features Section */}
          {service.features && service.features.length > 0 && (
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Why Choose Us Section */}
          {service.whyUsPoints && service.whyUsPoints.length > 0 && (
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Why Choose
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whyUsPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <motion.div
          className="w-full lg:w-80 flex-shrink-0"
          variants={itemVariants}
        >
          <FinancialSidebar />
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div variants={itemVariants}>
        <CTASection />
      </motion.div>
    </motion.div>
  );
}
