import axios from "axios";

// ✅ Define your API base URL
// export const API_BASE_URL = "http://127.0.0.1:8000/api";
export const API_BASE_URL = "https://asset.demovoting.com/api";

// ✅ Define your file base URL (for image paths, etc.)
// export const fileBaseURL = "http://127.0.0.1:8000/uploads/";
export const fileBaseURL = "https://asset.demovoting.com/uploads/";

// ✅ Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
