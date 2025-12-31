import React from "react";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import {
  Eye,
  Target,
  Rocket,
  BarChart2,
  HeartHandshake,
  Globe,
  Users,
  ArrowRight,
} from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Vision{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              Mission
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guiding principles that drive our commitment to your financial
            success
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Graphic */}
            <motion.div
              className="lg:w-1/2 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-50 rounded-full">
                    <Eye className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  Our Vision
                </h2>
                <div className="flex justify-center">
                  <Rocket className="w-6 h-6 text-blue-500 mr-2" />
                  <p className="text-xl text-center text-gray-600 italic">
                    "To revolutionize financial empowerment through innovative
                    solutions that create lasting prosperity"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Details */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Financial Leadership
                    </h3>
                    <p className="text-gray-600">
                      To be the most trusted name in financial services, setting
                      industry benchmarks for performance and integrity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Global Impact
                    </h3>
                    <p className="text-gray-600">
                      Expanding our reach to empower individuals and businesses
                      worldwide with accessible financial solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg text-green-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Client-Centric Innovation
                    </h3>
                    <p className="text-gray-600">
                      Continuously evolving our offerings to anticipate and meet
                      the changing needs of our clients.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Right Side - Graphic */}
            <motion.div
              className="lg:w-1/2 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
              <div className="relative bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-50 rounded-full">
                    <Target className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  Our Mission
                </h2>
                <div className="flex justify-center">
                  <HeartHandshake className="w-6 h-6 text-green-500 mr-2" />
                  <p className="text-xl text-center text-gray-600 italic">
                    "Our mission is to understand our clients needs, wants, and
                    financial goals and develop tailor-made solutions for the
                    same.We believe providing services with honesty and
                    reliability and being constantly approachable and
                    responsive, to our customers."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Left Side - Details */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Client Empowerment
                    </h3>
                    <p className="text-gray-600">
                      Provide the knowledge and tools that enable clients to
                      make informed financial decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Performance Excellence
                    </h3>
                    <p className="text-gray-600">
                      Deliver consistent, superior returns through disciplined
                      investment strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg text-green-600">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Ethical Practice
                    </h3>
                    <p className="text-gray-600">
                      Maintain the highest standards of integrity, transparency,
                      and regulatory compliance.
                    </p>
                  </div>
                </div>

                <motion.a
                  href="services/services-overview"
                  className="inline-flex items-center mt-8 text-blue-600 font-medium group"
                  whileHover={{ x: 5 }}
                >
                  Learn more about our values
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
