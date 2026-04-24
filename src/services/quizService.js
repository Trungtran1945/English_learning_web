import api from "./api";

/**
 * === QUIZ SERVICE ===
 * 
 * | Hàm             | HTTP Method | Endpoint              |
 * |-----------------|-------------|-----------------------|
 * | getAll()        | GET         | /api/quizzes          |
 * | getById(id)     | GET         | /api/quizzes/{id}     |
 * | create(data)    | POST        | /api/quizzes          |
 * | update(id,data) | PUT         | /api/quizzes/{id}     |
 * | remove(id)      | DELETE      | /api/quizzes/{id}     |
 */

const quizService = {
  // GET - Lấy tất cả câu hỏi
  getAll: async () => {
    const response = await api.get("/quizzes");
    return response.data;
  },

  // GET - Lấy câu hỏi theo ID
  getById: async (id) => {
    const response = await api.get(`/quizzes/${id}`);
    return response.data;
  },

  // POST - Thêm câu hỏi mới
  create: async (data) => {
    const response = await api.post("/quizzes", data);
    return response.data;
  },

  // PUT - Cập nhật câu hỏi
  update: async (id, data) => {
    const response = await api.put(`/quizzes/${id}`, { ...data, id });
    return response.data;
  },

  // DELETE - Xóa câu hỏi
  remove: async (id) => {
    const response = await api.delete(`/quizzes/${id}`);
    return response.data;
  },
};

export default quizService;
