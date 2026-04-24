using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnglishLearningAPI.Data;
using EnglishLearningAPI.Models;

namespace EnglishLearningAPI.Controllers
{
    /// <summary>
    /// Controller quản lý Quizzes (câu hỏi trắc nghiệm).
    /// Route: /api/quizzes
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class QuizzesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public QuizzesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/quizzes - Lấy tất cả câu hỏi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quiz>>> GetAll()
        {
            var quizzes = await _context.Quizzes.ToListAsync();
            return Ok(quizzes);
        }

        // GET: api/quizzes/5 - Lấy câu hỏi theo ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Quiz>> GetById(int id)
        {
            var quiz = await _context.Quizzes.FindAsync(id);

            if (quiz == null)
            {
                return NotFound(new { message = $"Quiz with id {id} not found." });
            }

            return Ok(quiz);
        }

        // POST: api/quizzes - Thêm câu hỏi mới
        [HttpPost]
        public async Task<ActionResult<Quiz>> Create([FromBody] Quiz quiz)
        {
            _context.Quizzes.Add(quiz);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = quiz.Id }, quiz);
        }

        // PUT: api/quizzes/5 - Cập nhật câu hỏi
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Quiz quiz)
        {
            if (id != quiz.Id)
            {
                return BadRequest(new { message = "ID in URL does not match ID in body." });
            }

            var existing = await _context.Quizzes.FindAsync(id);
            if (existing == null)
            {
                return NotFound(new { message = $"Quiz with id {id} not found." });
            }

            existing.Question = quiz.Question;
            existing.OptionsJson = quiz.OptionsJson;
            existing.CorrectAnswer = quiz.CorrectAnswer;

            await _context.SaveChangesAsync();

            return Ok(existing);
        }

        // DELETE: api/quizzes/5 - Xóa câu hỏi
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var quiz = await _context.Quizzes.FindAsync(id);
            if (quiz == null)
            {
                return NotFound(new { message = $"Quiz with id {id} not found." });
            }

            _context.Quizzes.Remove(quiz);
            await _context.SaveChangesAsync();

            return Ok(new { message = $"Quiz '{quiz.Question}' deleted successfully." });
        }
    }
}
