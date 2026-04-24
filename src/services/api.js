import axios from "axios";

/**
 * === GIẢI THÍCH AXIOS INSTANCE ===
 * 
 * Axios là thư viện HTTP client phổ biến nhất cho JavaScript.
 * Thay vì dùng fetch() mặc định, Axios cung cấp:
 * - Tự động chuyển đổi JSON
 * - Interceptors (xử lý request/response tập trung)
 * - Timeout config
 * - Error handling tốt hơn
 * 
 * Tạo một instance riêng để cấu hình chung (baseURL, headers, interceptors)
 * cho tất cả các API call trong ứng dụng.
 */

// Tạo Axios instance với cấu hình mặc định
const api = axios.create({
  baseURL: "http://localhost:5062/api", // URL gốc của backend API
  timeout: 10000, // Timeout 10 giây
  headers: {
    "Content-Type": "application/json", // Gửi/nhận dữ liệu dạng JSON
  },
});

// ============================================
// REQUEST INTERCEPTOR
// Chạy TRƯỚC mỗi request gửi đi
// ============================================
api.interceptors.request.use(
  (config) => {
    // Có thể thêm token xác thực ở đây:
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    
    console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ============================================
// RESPONSE INTERCEPTOR
// Chạy SAU mỗi response nhận về
// ============================================
api.interceptors.response.use(
  (response) => {
    // Trả về data trực tiếp (bỏ qua wrapper)
    return response;
  },
  (error) => {
    // Xử lý lỗi tập trung
    if (error.response) {
      // Server trả về lỗi (4xx, 5xx)
      console.error(`[API Error] ${error.response.status}: ${error.response.data?.message || "Unknown error"}`);
    } else if (error.request) {
      // Không nhận được response (network error)
      console.error("[API Error] Network error - không kết nối được đến server");
    } else {
      console.error("[API Error]", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
