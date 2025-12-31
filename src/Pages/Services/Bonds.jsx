import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Landmark,
  Scale,
  Globe,
  TrendingUp,
  Shield,
  Clock,
  Percent,
  Handshake,
  Factory,
  Banknote,
  Leaf,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ React Router hook

function Bonds() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const bondProducts = [
    {
      icon: <Landmark size={24} className="text-blue-500" />,
      title: "Government Bonds",
      path: "/bonds/government",
      description:
        "Sovereign bonds issued by central governments with the highest safety and stable returns.",
    },
    {
      icon: <Factory size={24} className="text-green-500" />,
      title: "Corporate Bonds",
      path: "/bonds/corporate",
      description:
        "Debt securities issued by corporations offering higher yields than government bonds.",
    },
    {
      icon: <Scale size={24} className="text-purple-500" />,
      title: "Municipal Bonds",
      path: "/bonds/municipal",
      description:
        "Issued by local governments often with tax-free interest income benefits.",
    },
    {
      icon: <Globe size={24} className="text-orange-500" />,
      title: "International Bonds",
      path: "/bonds/international",
      description:
        "Foreign currency denominated bonds providing global diversification opportunities.",
    },
    {
      icon: <Leaf size={24} className="text-yellow-500" />,
      title: "Green Bonds",
      path: "/bonds/green",
      description:
        "Environmentally focused bonds financing climate and sustainability projects.",
    },
    {
      icon: <Banknote size={24} className="text-red-500" />,
      title: "Zero-Coupon Bonds",
      path: "/bonds/zero-coupon",
      description:
        "Deep discount bonds issued at a discount and redeemed at face value.",
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
            Bond Investment Solutions
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {bondProducts.map((product, index) => (
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
            Advantages of Bond Investing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Shield className="text-blue-500" /> Capital Preservation
              </h3>
              <p className="text-gray-600">
                Bonds provide principal protection (especially government bonds)
                while generating steady income, making them ideal for
                conservative investors.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Percent className="text-blue-500" /> Regular Income
              </h3>
              <p className="text-gray-600">
                Most bonds pay fixed interest (coupon) payments at regular
                intervals, creating predictable cash flow for investors.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <TrendingUp className="text-blue-500" /> Portfolio Diversification
            </h3>
            <p className="text-gray-600">
              Bonds typically have low correlation with equities, helping to
              reduce overall portfolio volatility and provide stability during
              market downturns.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Bond prices are subject to interest rate risk. Corporate bonds
              carry credit risk. Past performance is not indicative of future
              results. Consult your financial advisor before investing.
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

export default Bonds;
