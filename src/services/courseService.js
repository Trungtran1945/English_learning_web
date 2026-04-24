import api from "./api";

/**
 * === COURSE SERVICE ===
 * 
 * | Hàm             | HTTP Method | Endpoint              |
 * |-----------------|-------------|-----------------------|
 * | getAll()        | GET         | /api/courses          |
 * | getById(id)     | GET         | /api/courses/{id}     |
 * | create(data)    | POST        | /api/courses          |
 * | update(id,data) | PUT         | /api/courses/{id}     |
 * | remove(id)      | DELETE      | /api/courses/{id}     |
 */

const courseService = {
  // GET - Lấy tất cả khóa học
  getAll: async () => {
    const response = await api.get("/courses");
    return response.data;
  },

  // GET - Lấy khóa học theo ID
  getById: async (id) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },

  // POST - Thêm khóa học mới
  create: async (data) => {
    const response = await api.post("/courses", data);
    return response.data;
  },

  // PUT - Cập nhật khóa học
  update: async (id, data) => {
    const response = await api.put(`/courses/${id}`, { ...data, id });
    return response.data;
  },

  // DELETE - Xóa khóa học
  remove: async (id) => {
    const response = await api.delete(`/courses/${id}`);
    return response.data;
  },
};

export default courseService;
