using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnglishLearningAPI.Data;
using EnglishLearningAPI.Models;

namespace EnglishLearningAPI.Controllers
{
    /// <summary>
    /// Controller quản lý Vocabulary (từ vựng).
    /// 
    /// === GIẢI THÍCH CONTROLLER ===
    /// - [ApiController]: Đánh dấu đây là API controller (tự động validate model, trả JSON)
    /// - [Route("api/[controller]")]: Định nghĩa URL gốc. [controller] = "vocabulary"
    ///   → Tất cả endpoints bắt đầu bằng: /api/vocabulary
    /// - Mỗi method có attribute [HttpGet], [HttpPost], [HttpPut], [HttpDelete]
    ///   tương ứng với các phương thức HTTP.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class VocabularyController : ControllerBase
    {
        private readonly AppDbContext _context;

        // Constructor Injection: ASP.NET Core tự động truyền AppDbContext vào
        public VocabularyController(AppDbContext context)
        {
            _context = context;
        }

        // ============================================
        // GET: api/vocabulary
        // Lấy tất cả từ vựng
        // ============================================
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vocabulary>>> GetAll()
        {
            var vocabularies = await _context.Vocabularies.ToListAsync();
            return Ok(vocabularies);
        }

        // ============================================
        // GET: api/vocabulary/5
        // Lấy từ vựng theo ID
        // ============================================
        [HttpGet("{id}")]
        public async Task<ActionResult<Vocabulary>> GetById(int id)
        {
            var vocabulary = await _context.Vocabularies.FindAsync(id);

            if (vocabulary == null)
            {
                return NotFound(new { message = $"Vocabulary with id {id} not found." });
            }

            return Ok(vocabulary);
        }

        // ============================================
        // GET: api/vocabulary/category/Adjective
        // Lọc từ vựng theo category
        // ============================================
        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Vocabulary>>> GetByCategory(string category)
        {
            var vocabularies = await _context.Vocabularies
                .Where(v => v.Category.ToLower() == category.ToLower())
                .ToListAsync();

            return Ok(vocabularies);
        }

        // ============================================
        // POST: api/vocabulary
        // Thêm từ vựng mới
        // Body: { "word": "...", "phonetic": "...", "meaning": "...", "example": "...", "category": "..." }
        // ============================================
        [HttpPost]
        public async Task<ActionResult<Vocabulary>> Create([FromBody] Vocabulary vocabulary)
        {
            _context.Vocabularies.Add(vocabulary);
            await _context.SaveChangesAsync();

            // Trả về 201 Created với URL đến resource vừa tạo
            return CreatedAtAction(nameof(GetById), new { id = vocabulary.Id }, vocabulary);
        }

        // ============================================
        // PUT: api/vocabulary/5
        // Cập nhật từ vựng theo ID
        // Body: { "id": 5, "word": "...", ... }
        // ============================================
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Vocabulary vocabulary)
        {
            if (id != vocabulary.Id)
            {
                return BadRequest(new { message = "ID in URL does not match ID in body." });
            }

            var existing = await _context.Vocabularies.FindAsync(id);
            if (existing == null)
            {
                return NotFound(new { message = $"Vocabulary with id {id} not found." });
            }

            // Cập nhật các trường
            existing.Word = vocabulary.Word;
            existing.Phonetic = vocabulary.Phonetic;
            existing.Meaning = vocabulary.Meaning;
            existing.Example = vocabulary.Example;
            existing.Category = vocabulary.Category;

            await _context.SaveChangesAsync();

            return Ok(existing);
        }

        // ============================================
        // DELETE: api/vocabulary/5
        // Xóa từ vựng theo ID
        // ============================================
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var vocabulary = await _context.Vocabularies.FindAsync(id);
            if (vocabulary == null)
            {
                return NotFound(new { message = $"Vocabulary with id {id} not found." });
            }

            _context.Vocabularies.Remove(vocabulary);
            await _context.SaveChangesAsync();

            return Ok(new { message = $"Vocabulary '{vocabulary.Word}' deleted successfully." });
        }
    }
}
