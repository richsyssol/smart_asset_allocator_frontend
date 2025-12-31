import React from "react";
import { motion } from "framer-motion";
import {
  HardHat,
  ShieldCheck,
  HeartPulse, // Using HeartPulse as alternative
  Scale,
  Banknote,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ React Router hook

function WCInsurance() {
  const navigate = useNavigate(); // ✅ initialize navigate
  const wcProducts = [
    {
      icon: <HardHat size={24} className="text-blue-500" />,
      title: "Standard WC Policy",
      path: "/wc/standard",
      description:
        "Basic coverage for work-related injuries and illnesses as mandated by law, protecting both employees and employers.",
    },
    {
      icon: <HeartPulse size={24} className="text-green-500" />,
      title: "Medical Expense Cover",
      path: "/wc/medical",
      description:
        "Comprehensive medical coverage including hospitalization, treatment, and rehabilitation costs for injured workers.",
    },
    {
      icon: <Scale size={24} className="text-purple-500" />,
      title: "Legal Liability",
      path: "/wc/legal",
      description:
        "Protection against lawsuits and legal expenses arising from workplace accidents or occupational diseases.",
    },
    {
      icon: <Banknote size={24} className="text-orange-500" />,
      title: "Wage Replacement",
      path: "/wc/wages",
      description:
        "Coverage for lost wages during recovery period, ensuring employees' financial stability post-accident.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 pt-24 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex items-center gap-4 mb-8">
          <HardHat size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Workmen's Compensation Insurance
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {wcProducts.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {product.icon}
                <h2 className="text-xl font-semibold">{product.title}</h2>
              </div>
              <p className="text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Benefits of WC Insurance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <ShieldCheck className="text-blue-500" /> Employer Protection
              </h3>
              <p className="text-gray-600">
                Shields businesses from financial burdens of workplace injuries
                while ensuring compliance with labor laws and regulations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <HeartPulse className="text-blue-500" /> Employee Welfare
              </h3>
              <p className="text-gray-600">
                Guarantees medical care and financial support for injured
                workers, promoting faster recovery and morale.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="text-blue-500" /> Quick Claims Processing
            </h3>
            <p className="text-gray-600">
              Our dedicated WC claims team ensures timely settlements with
              minimal documentation for approved cases.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Workmen's Compensation Insurance is subject to jurisdictional
              regulations. Coverage varies by state and occupation type.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
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
            onClick={() => navigate("/contactus")} // ✅ navigate to Contact Us
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WCInsurance;
