import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { logosmart } from "../../assets";

const Footer = () => {
  const navItems = [
    { label: "HOME", path: "/" },
    {
      label: "ABOUT US",
      path: "/aboutus",
      submenu: [
        { label: "Vision & Mission", path: "/aboutus#vision" },
        { label: "Our Team", path: "/aboutus#team" },
      ],
    },
    {
      label: "SERVICES",
      submenu: [
        { label: "Services Overview", path: "/services/services-overview" },
        {
          label: "Portfolio Management System",
          path: "/services/portfolio-management",
        },
        { label: "Mutual Fund", path: "/services/mutual-funds" },
        { label: "Life Insurance", path: "/services/life-insurance" },
        { label: "Vehicle Insurance", path: "/services/car-insurance" },
        { label: "Fire Policy", path: "/services/factory-insurance" },
        { label: "WC Policy", path: "/services/wc-insurance" },
        { label: "Marine Insurance", path: "/services/marine-insurance" },
        { label: "Liability Insurance", path: "/services/liability-insurance" },
        { label: "Bonds", path: "/services/bonds" },
        { label: "LiquiLoans", path: "/services/liquiloans" },
      ],
    },
    {
      label: "PRODUCTS",
      submenu: [
        { label: "Mutual Funds", path: "/products/mutual-funds" },
        { label: "Life Insurance", path: "/products/life-insurance" },
        { label: "General Insurance", path: "/products/general-insurance" },
      ],
    },
    {
      label: "PERSONALIZED PLANNING",
      submenu: [
        { label: "Child's Education Planning", path: "/goals/child-education" },
        { label: "Child's Wedding Planning", path: "/goals/child-wedding" },
        { label: "Dream Home", path: "/goals/dream-home" },
        { label: "Dream Car", path: "/goals/dream-car" },
        { label: "Dream Vacation", path: "/goals/dream-vacation" },
        { label: "Retirement Plan", path: "/goals/retirement-plan" },
        { label: "SIP Plan", path: "/goals/sip-plan" },
      ],
    },
    { label: "BLOG", path: "/blog" },
    { label: "CONTACT US", path: "/contactus" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/share/1AWKbRpDJP/",
      name: "Facebook",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/yourhandle",
      name: "Twitter",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/yourcompany",
      name: "LinkedIn",
    },
    {
      icon: FaRss,
      url: "https://yourwebsite.com/blog/rss",
      name: "RSS Feed",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@sanjay2203sw",
      name: "YouTube",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/smart_asset_allocators/",
      name: "Instagram",
    },
  ];

  const contactInfo = {
    email: "sanjay.insurance@gmail.com",
    phone: "+91 9822770225",
    address:
      "Office No.302, Shreenath Enclave, Shrihari Kute Marg, Mumbai Naka, Nashik -422002",
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <img src={logosmart} alt="Company Logo" className="mb-6 w-36" />
          <p className="text-gray-300 text-sm mb-4">
            Your trusted financial partner for comprehensive wealth management
            solutions.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, url, name }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer text-gray-400 hover:text-blue-400"
                aria-label={name}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {navItems
              .filter((item) => !item.submenu)
              .map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            OUR SERVICES
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {navItems
              .find((item) => item.label === "SERVICES")
              ?.submenu?.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Personalized Planning */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">PLANNING</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {navItems
              .find((item) => item.label === "PERSONALIZED PLANNING")
              ?.submenu?.map((plan, index) => (
                <li key={index}>
                  <a
                    href={plan.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {plan.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            CONTACT US
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-start">
              <IoLocationOutline
                size={18}
                className="mt-1 mr-2 flex-shrink-0"
              />
              {contactInfo.address}
            </p>
            <p className="flex items-center">
              <IoCallOutline size={18} className="mr-2" />
              <a
                href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                className="hover:text-blue-400"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p className="flex items-center">
              <MdOutlineEmail size={18} className="mr-2" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-blue-400"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} All Rights Reserved by Asset Allocator.{" "}
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="text-blue-400 hover:underline">
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
