import api from "./api";

/**
 * === VOCABULARY SERVICE ===
 * 
 * Service layer chứa các hàm gọi API cho Vocabulary.
 * Mỗi hàm tương ứng với một endpoint trên backend:
 * 
 * | Hàm             | HTTP Method | Endpoint                          |
 * |-----------------|-------------|-----------------------------------|
 * | getAll()        | GET         | /api/vocabulary                   |
 * | getById(id)     | GET         | /api/vocabulary/{id}              |
 * | getByCategory() | GET         | /api/vocabulary/category/{cat}    |
 * | create(data)    | POST        | /api/vocabulary                   |
 * | update(id,data) | PUT         | /api/vocabulary/{id}              |
 * | remove(id)      | DELETE      | /api/vocabulary/{id}              |
 */

const vocabularyService = {
  // GET - Lấy tất cả từ vựng
  getAll: async () => {
    const response = await api.get("/vocabulary");
    return response.data;
  },

  // GET - Lấy từ vựng theo ID
  getById: async (id) => {
    const response = await api.get(`/vocabulary/${id}`);
    return response.data;
  },

  // GET - Lọc từ vựng theo category
  getByCategory: async (category) => {
    const response = await api.get(`/vocabulary/category/${category}`);
    return response.data;
  },

  // POST - Thêm từ vựng mới
  // data = { word, phonetic, meaning, example, category }
  create: async (data) => {
    const response = await api.post("/vocabulary", data);
    return response.data;
  },

  // PUT - Cập nhật từ vựng
  // data = { id, word, phonetic, meaning, example, category }
  update: async (id, data) => {
    const response = await api.put(`/vocabulary/${id}`, { ...data, id });
    return response.data;
  },

  // DELETE - Xóa từ vựng
  remove: async (id) => {
    const response = await api.delete(`/vocabulary/${id}`);
    return response.data;
  },
};

export default vocabularyService;
