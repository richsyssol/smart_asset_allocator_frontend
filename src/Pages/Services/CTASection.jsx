import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // don't forget motion import!

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white"
    >
      <h3 className="text-3xl font-bold mb-4">
        Insurance Provides You a Better Future
      </h3>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Secure your family with trusted insurance plans for every need. Get
        expert guidance and hassle-free claim support today!
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-white text-blue-800 rounded-lg shadow-lg font-medium text-lg"
        onClick={() => navigate("/contactus")}
      >
        Contact Us
      </motion.button>
    </motion.div>
  );
};

export default CTASection;
