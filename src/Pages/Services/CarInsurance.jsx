import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  ShieldCheck,
  Wrench,
  Clock,
  DollarSign,
  Zap,
  Users,
  Globe,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ React Router hook

function CarInsurance() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const insuranceProducts = [
    {
      icon: <Car size={24} className="text-blue-500" />,
      title: "Comprehensive Cover",
      path: "/car-insurance/comprehensive",
      description:
        "Complete protection against accidents, theft, fire, and third-party liabilities with optional add-ons for maximum security.",
    },
    {
      icon: <ShieldCheck size={24} className="text-green-500" />,
      title: "Third-Party Liability",
      path: "/car-insurance/third-party",
      description:
        "Basic coverage required by law that protects you against legal liabilities for injury or damage to others.",
    },
    {
      icon: <Wrench size={24} className="text-purple-500" />,
      title: "Zero Depreciation",
      path: "/car-insurance/zero-depreciation",
      description:
        "Get full claim amount without deduction for depreciation of parts during repairs in the first few years.",
    },
    // {
    //   icon: <Zap size={24} className="text-orange-500" />,
    //   title: "Engine Protection",
    //   path: "/car-insurance/engine",
    //   description:
    //     "Additional cover for engine damage due to flooding or water ingression that standard policies may exclude.",
    // },
    // {
    //   icon: <Users size={24} className="text-red-500" />,
    //   title: "Passenger Cover",
    //   path: "/car-insurance/passenger",
    //   description:
    //     "Protection for co-passengers in case of accidental injuries while traveling in your insured vehicle.",
    // },
    // {
    //   icon: <Globe size={24} className="text-yellow-500" />,
    //   title: "International Coverage",
    //   path: "/car-insurance/international",
    //   description:
    //     "Special policies that extend your protection when driving abroad in foreign countries.",
    // },
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
          <Car size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Vehicle Insurance Solutions
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {insuranceProducts.map((product, index) => (
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
              {/* <motion.a
                href={product.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-blue-600 font-medium flex items-center gap-1"
              >
                Learn more <ArrowUpRight size={16} />
              </motion.a> */}
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
            Why Choose Our Car Insurance?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <ShieldCheck className="text-blue-500" /> Hassle-Free Claims
              </h3>
              <p className="text-gray-600">
                Our 24/7 claims assistance and cashless repair network ensure
                quick settlements with minimal paperwork at authorized garages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <DollarSign className="text-blue-500" /> Competitive Premiums
              </h3>
              <p className="text-gray-600">
                Get the best rates with discounts for no-claim bonuses, safety
                features, and voluntary deductibles without compromising
                coverage.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="text-blue-500" /> Instant Policy Issuance
            </h3>
            <p className="text-gray-600">
              Purchase or renew your policy online in minutes with digital
              documentation and immediate coverage activation.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Car insurance is subject to terms and conditions. Please read the
              policy wordings carefully before purchasing. Own damage cover
              optional in third-party policies.
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

export default CarInsurance;
