import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ React Router hook

import {
  HeartPulse,
  ShieldCheck,
  Calendar,
  PiggyBank,
  Users,
  Gift,
  Home,
  GraduationCap,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

function LifeInsuranceserv() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const insuranceProducts = [
    {
      icon: <HeartPulse size={24} className="text-red-500" />,
      title: "Term Life Insurance",
      path: "/insurance/term",
      description:
        "Affordable pure protection plans offering high coverage at low premiums for your family's financial security.",
    },
    {
      icon: <ShieldCheck size={24} className="text-blue-500" />,
      title: "Whole Life Insurance",
      path: "/insurance/whole-life",
      description:
        "Lifetime coverage with savings component that builds cash value over time while protecting your loved ones.",
    },
    {
      icon: <PiggyBank size={24} className="text-green-500" />,
      title: "Endowment Plans",
      path: "/insurance/endowment",
      description:
        "Combination of protection and savings that pay out a lump sum after a specific period or upon death.",
    },
    // {
    //   icon: <Users size={24} className="text-purple-500" />, // Changed from Family to Users
    //   title: "Family Protection",
    //   path: "/insurance/family",
    //   description:
    //     "Comprehensive coverage solutions designed to protect your entire family under one plan.",
    // },
    {
      icon: <GraduationCap size={24} className="text-orange-500" />,
      title: "Child Education Plans",
      path: "/insurance/child-education",
      description:
        "Secure your child's future education with guaranteed payouts timed with important milestones.",
    },
    {
      icon: <Home size={24} className="text-yellow-500" />,
      title: "Retirement Plans",
      path: "/insurance/retirement",
      description:
        "Build a retirement corpus while enjoying life cover with guaranteed income options post-retirement.",
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
          <ShieldCheck size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Life Insurance Solutions
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
            Why Life Insurance Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <HeartPulse className="text-blue-500" /> Financial Protection
              </h3>
              <p className="text-gray-600">
                Life insurance provides a safety net for your loved ones,
                ensuring they maintain their standard of living and meet
                financial obligations even in your absence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <DollarSign className="text-blue-500" /> Wealth Creation
              </h3>
              <p className="text-gray-600">
                Many insurance plans offer dual benefits of protection and
                wealth creation through savings and investment components that
                grow over time.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Calendar className="text-blue-500" /> Long-Term Security
            </h3>
            <p className="text-gray-600">
              Insurance helps you plan for important life goals like children's
              education, marriage, and retirement with guaranteed benefits and
              disciplined savings.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Life insurance products are subject to terms and conditions.
              Please read all policy documents carefully before purchasing.
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

export default LifeInsuranceserv;
