import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Handshake,
  Clock,
  TrendingUp,
  Shield,
  Percent,
  DollarSign,
  Briefcase,
  Home,
  CreditCard,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ React Router hook

function LiquiLoans() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const loanProducts = [
    {
      icon: <Home size={24} className="text-blue-500" />,
      title: "Home Loans",
      path: "/liquiloans/home",
      description:
        "Competitive interest rates for buying, constructing, or renovating your dream home.",
    },
    {
      icon: <Briefcase size={24} className="text-green-500" />,
      title: "Personal Loans",
      path: "/liquiloans/personal",
      description:
        "Quick disbursal for weddings, travel, medical emergencies or other personal needs.",
    },
    {
      icon: <TrendingUp size={24} className="text-purple-500" />,
      title: "Business Loans",
      path: "/liquiloans/business",
      description:
        "Working capital and expansion financing for SMEs and entrepreneurs.",
    },
    {
      icon: <CreditCard size={24} className="text-orange-500" />,
      title: "Loan Against Property",
      path: "/liquiloans/lap",
      description:
        "Unlock the value of your property while retaining ownership.",
    },
    {
      icon: <User size={24} className="text-yellow-500" />,
      title: "Pre-Approved Loans",
      path: "/liquiloans/pre-approved",
      description:
        "Instant offers with minimal documentation for eligible customers.",
    },
    {
      icon: <Zap size={24} className="text-red-500" />,
      title: "Instant Cash Loans",
      path: "/liquiloans/instant",
      description:
        "Emergency funds disbursed within hours with flexible repayment options.",
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
          <Handshake size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            LiquiLoans - Quick & Easy Financing
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loanProducts.map((product, index) => (
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
                Apply now <ArrowUpRight size={16} />
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
            Why Choose LiquiLoans?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="text-blue-500" /> Fast Processing
              </h3>
              <p className="text-gray-600">
                Get loan approvals within 24 hours and disbursement in as little
                as 4 hours for emergency needs with our streamlined digital
                process.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Percent className="text-blue-500" /> Competitive Rates
              </h3>
              <p className="text-gray-600">
                Enjoy interest rates starting from 8.5% p.a. with no hidden
                charges or prepayment penalties on most loan products.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Shield className="text-blue-500" /> Flexible Options
            </h3>
            <p className="text-gray-600">
              Choose repayment tenures from 3 months to 15 years with EMI
              options that match your cash flow. Top-up and balance transfer
              facilities available.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Interest rates and loan amounts vary by product and applicant
              profile. Terms and conditions apply. All loans subject to credit
              approval.
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

export default LiquiLoans;
