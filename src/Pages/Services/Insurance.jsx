import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Home,
  HeartPulse,
  GraduationCap,
  Calendar,
  PiggyBank,
  ShieldPlus,
  Users,
} from "lucide-react";

// Using available icons as substitutes
const Family = Users; // Using Users icon as Family substitute
const Baby = GraduationCap; // Using GraduationCap as Baby substitute (or choose another suitable icon)

function Insurance() {
  const familyProducts = [
    {
      icon: <Family size={24} className="text-blue-500" />,
      title: "Family Term Plan",
      path: "/insurance/family-term",
      description:
        "Comprehensive protection for your entire family under a single policy with individual coverage.",
    },
    {
      icon: <Home size={24} className="text-green-500" />,
      title: "Home Loan Protection",
      path: "/insurance/home-loan",
      description:
        "Ensure your family keeps their home even if something happens to you with mortgage protection.",
    },
    {
      icon: <HeartPulse size={24} className="text-purple-500" />,
      title: "Family Health Cover",
      path: "/insurance/family-health",
      description:
        "Complete health insurance for your spouse, children, and dependent parents with cashless hospitalization.",
    },
    {
      icon: <GraduationCap size={24} className="text-orange-500" />,
      title: "Child Education Plan",
      path: "/insurance/child-education",
      description:
        "Guaranteed funds for your child's education regardless of what happens to you.",
    },
    {
      icon: <Baby size={24} className="text-yellow-500" />,
      title: "Newborn Baby Plan",
      path: "/insurance/newborn",
      description:
        "Start your child's financial protection early with special infant coverage options.",
    },
    {
      icon: <Users size={24} className="text-red-500" />,
      title: "Multi-Generational Plan",
      path: "/insurance/multi-gen",
      description:
        "Coverage that extends to grandparents, parents, and children in one comprehensive plan.",
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
          <Family size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Life Insurance</h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {familyProducts.map((product, index) => (
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
            Protecting Your Family's Future
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <ShieldPlus className="text-blue-500" /> Complete Family Safety
              </h3>
              <p className="text-gray-600">
                Our family insurance solutions provide a safety net for all your
                loved ones. From newborn babies to elderly parents, we have
                coverage options for every life stage and family situation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <PiggyBank className="text-blue-500" /> Financial Stability
              </h3>
              <p className="text-gray-600">
                Ensure your family maintains their lifestyle even in your
                absence. Our plans help cover daily expenses, education costs,
                home loans, and other financial obligations.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
              <Calendar className="text-blue-500" /> Long-Term Security
            </h3>
            <p className="text-gray-600">
              Our family protection plans are designed to provide security for
              decades, with options to increase coverage as your family grows
              and your needs change over time.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *Insurance coverage is subject to terms and conditions. Please
              consult with our advisors to select the right protection plan for
              your family.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Insurance;
