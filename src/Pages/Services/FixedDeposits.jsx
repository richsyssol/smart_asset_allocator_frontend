import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Landmark,
  Lock,
  CalendarDays,
  Percent,
  BadgePercent,
  Wallet,
  Shield,
  Clock,
  TrendingUp,
  Repeat,
} from "lucide-react";

function FixedDeposits() {
  const fdProducts = [
    {
      icon: <Percent size={24} className="text-blue-500" />,
      title: "Regular FDs",
      path: "/fixed-deposits/regular",
      description:
        "Standard fixed deposits with competitive interest rates and flexible tenure options.",
    },
    {
      icon: <BadgePercent size={24} className="text-green-500" />,
      title: "Senior Citizen FDs",
      path: "/fixed-deposits/senior",
      description:
        "Higher interest rates specially designed for senior citizens with additional benefits.",
    },
    {
      icon: <CalendarDays size={24} className="text-purple-500" />,
      title: "Tax-Saving FDs",
      path: "/fixed-deposits/tax-saver",
      description:
        "Fixed deposits with tax benefits under Section 80C with 5-year lock-in period.",
    },
    {
      icon: <TrendingUp size={24} className="text-orange-500" />,
      title: "Cumulative FDs",
      path: "/fixed-deposits/cumulative",
      description:
        "Interest compounded quarterly and paid at maturity for higher returns.",
    },
    {
      icon: <Repeat size={24} className="text-yellow-500" />,
      title: "Non-Cumulative FDs",
      path: "/fixed-deposits/non-cumulative",
      description:
        "Receive interest payouts monthly, quarterly, half-yearly or annually as per your need.",
    },
    {
      icon: <Wallet size={24} className="text-red-500" />,
      title: "Flexi FDs",
      path: "/fixed-deposits/flexi",
      description:
        "Auto-renewal facility with option to withdraw interest while keeping principal intact.",
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
          <Landmark size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Fixed Deposit Solutions
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {fdProducts.map((product, index) => (
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
            Benefits of Fixed Deposits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Lock className="text-blue-500" /> Safety & Security
              </h3>
              <p className="text-gray-600">
                Fixed deposits offer one of the safest investment options with
                guaranteed returns and principal protection, ideal for
                risk-averse investors.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Shield className="text-blue-500" /> Stable Returns
              </h3>
              <p className="text-gray-600">
                Earn fixed interest rates unaffected by market fluctuations,
                providing predictable income and helping in financial planning.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="text-blue-500" /> Flexible Tenures
            </h3>
            <p className="text-gray-600">
              Choose from various tenure options ranging from 7 days to 10 years
              to match your financial goals and liquidity requirements.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Interest rates are subject to change. Premature withdrawals may
              attract penalties. Tax benefits are as per current regulations
              which are subject to change.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FixedDeposits;
