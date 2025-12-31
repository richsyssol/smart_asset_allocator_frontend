import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { fadeIn, staggerContainer } from "../../utils/motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_Number: "",
    service: "",
    message: "",
  });

  // State for API data
  const [contactInfo, setContactInfo] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceOptions = [
    { value: "Mutual Fund", label: "Mutual Fund" },
    { value: "Life Insurance", label: "Life Insurance" },
    {
      value: "Portfolio Management System",
      label: "Portfolio Management System",
    },
    { value: "Fixed Deposits", label: "Fixed Deposits" },
    { value: "Bonds", label: "Bonds" },
    { value: "LiquiLoans", label: "LiquiLoans" },
    { value: "Other Inquiry", label: "Other Inquiry" },
  ];

  // Fetch contact data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://asset.demovoting.com/api/contact"
        );
        setContactInfo(response.data.data);

        // If team members are available in the response
        if (response.data.data.teamMembers) {
          setTeamMembers(response.data.data.teamMembers);
        }
      } catch (err) {
        console.error("Error fetching contact data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      url: contactInfo?.socialLinks?.facebook || "#",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      url: contactInfo?.socialLinks?.twitter || "#",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: contactInfo?.socialLinks?.linkedin || "#",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: contactInfo?.socialLinks?.instagram || "#",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      url: contactInfo?.whatsappNumber
        ? `https://wa.me/${contactInfo.whatsappNumber.replace(/\D/g, "")}`
        : "#",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name.trim()) newErrors.full_name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone_Number.trim()) {
      newErrors.phone_Number = "Contact number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone_Number)) {
      newErrors.phone_Number = "Contact number must be 10-15 digits";
    }
    if (!formData.service) newErrors.service = "Please select a service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const submissionData = {
        full_name: formData.full_name,
        email: formData.email,
        phone_Number: formData.phone_Number,
        service: formData.service,
        yourMessage: formData.message,
      };

      const response = await axios.post(
        "https://asset.demovoting.com/api/contact-forms",
        submissionData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitSuccess(true);
        setFormData({
          full_name: "",
          email: "",
          phone_Number: "",
          service: "",
          message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Laravel validation errors
        setErrors(error.response.data.errors);
      } else {
        // Other errors
        setErrors((prev) => ({
          ...prev,
          submit:
            error.message || "An error occurred while submitting the form.",
        }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {contactInfo?.companyName || "Sanjay Jadhav & Associates"}
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {contactInfo?.tagline ||
            "Your trusted partner for comprehensive financial solutions and wealth management services"}
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 w-full gap-12 ">
        {/* Left Column - Contact Form */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200"
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Thank you! Your message has been sent successfully.
              </div>
            </motion.div>
          )}

          {errors.submit && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200"
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.submit}
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.full_name
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Full Name"
                />
                {errors.full_name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.full_name}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Email Id"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone_Number"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  id="phone_Number"
                  name="phone_Number"
                  value={formData.phone_Number}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.phone_Number
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Contact No"
                />
                {errors.phone_Number && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.phone_Number}
                  </motion.p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service <span className="text-red-500">*</span>
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.service
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </motion.select>
                {errors.service && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.service}
                  </motion.p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Tell us about your requirements..."
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium text-white ${
                isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              } transition-colors shadow-md`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Send Message
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
