import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 6,
    total: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const API_BASE_URL = "https://asset.demovoting.com/api";
  const IMAGE_PATH = "http://asset.demovoting.com/uploads";

  const fetchBlogs = async (page = 1, search = "", category = "") => {
    try {
      setLoading(true);
      let url = `${API_BASE_URL}/blog?page=${page}`;

      if (search) {
        url += `&search=${search}`;
      }

      if (category) {
        url += `&category=${category}`;
      }

      const response = await axios.get(url);

      setBlogs(response.data.data || []);
      setPagination({
        current_page: response.data.current_page || 1,
        last_page: response.data.last_page || 1,
        per_page: response.data.per_page || 6,
        total: response.data.total || 0,
      });

      // Extract unique categories
      const allCategories = (response.data.data || []).map(
        (post) => post.category
      );
      const uniqueCategories = [...new Set(allCategories)];
      setCategories(uniqueCategories);

      // Fetch recent posts separately
      const recentResponse = await axios.get(`${API_BASE_URL}/blog/recent`);
      setRecentPosts(recentResponse.data || []);

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.last_page) {
      fetchBlogs(page, searchQuery, selectedCategory);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBlogs(1, searchQuery, selectedCategory);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    fetchBlogs(1, searchQuery, category);
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage, endPage;

    if (pagination.last_page <= maxVisiblePages) {
      startPage = 1;
      endPage = pagination.last_page;
    } else {
      const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
      const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

      if (pagination.current_page <= maxPagesBeforeCurrent) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (
        pagination.current_page + maxPagesAfterCurrent >=
        pagination.last_page
      ) {
        startPage = pagination.last_page - maxVisiblePages + 1;
        endPage = pagination.last_page;
      } else {
        startPage = pagination.current_page - maxPagesBeforeCurrent;
        endPage = pagination.current_page + maxPagesAfterCurrent;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 border rounded-md ${
            i === pagination.current_page
              ? "bg-blue-500 text-white border-blue-500"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <nav className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(pagination.current_page - 1)}
          disabled={pagination.current_page === 1}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              1
            </button>
            {startPage > 2 && <span className="px-2">...</span>}
          </>
        )}

        {pages}

        {endPage < pagination.last_page && (
          <>
            {endPage < pagination.last_page - 1 && (
              <span className="px-2">...</span>
            )}
            <button
              onClick={() => handlePageChange(pagination.last_page)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              {pagination.last_page}
            </button>
          </>
        )}

        <button
          onClick={() => handlePageChange(pagination.current_page + 1)}
          disabled={pagination.current_page === pagination.last_page}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <motion.div
            className="flex justify-center mb-6"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </motion.div>
          <motion.h2
            className="text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading Blog Posts...
          </motion.h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <h2 className="text-xl font-semibold">Error loading blog posts</h2>
          <p className="mt-2">{error}</p>
          <button
            onClick={() => fetchBlogs()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-24">
          Our Blog
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Latest insights and articles on financial planning and investment
          strategies
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-2/3"
        >
          {/* Blog Grid */}
          {blogs.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-500">
                {selectedCategory
                  ? `No posts in the "${selectedCategory}" category`
                  : searchQuery
                  ? `No posts matching "${searchQuery}"`
                  : "No posts available"}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("");
                  fetchBlogs();
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link to={`${blog.slug}`}>
                      <img
                        src={`${IMAGE_PATH}/${blog.image_url}`}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src = "";
                        }}
                      />
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
                          {blog.category || "Uncategorized"}
                        </span>
                        <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                          {blog.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {new Date(blog.published_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                          <span className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {pagination.last_page > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-12 flex justify-center"
                >
                  {renderPagination()}
                </motion.div>
              )}
            </>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:w-1/3"
        >
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search
              </h3>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`${post.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <img
                        src={`${IMAGE_PATH}/${post.image_url}`}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                        onError={(e) => {
                          e.target.src = "";
                        }}
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(post.published_date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategorySelect("")}
                    className={`flex items-center justify-between w-full text-left ${
                      !selectedCategory
                        ? "text-blue-600 font-medium"
                        : "text-gray-600 hover:text-blue-600"
                    } transition-colors`}
                  >
                    <span>All Categories</span>
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {pagination.total}
                    </span>
                  </button>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategorySelect(category)}
                      className={`flex items-center justify-between w-full text-left ${
                        selectedCategory === category
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-blue-600"
                      } transition-colors`}
                    >
                      <span>{category || "Uncategorized"}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {blogs.filter((b) => b.category === category).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get the latest articles and news delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default BlogPage;
