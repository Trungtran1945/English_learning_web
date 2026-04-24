using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnglishLearningAPI.Data;
using EnglishLearningAPI.Models;

namespace EnglishLearningAPI.Controllers
{
    /// <summary>
    /// Controller quản lý Courses (khóa học).
    /// Route: /api/courses
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CoursesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/courses - Lấy tất cả khóa học
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetAll()
        {
            var courses = await _context.Courses.ToListAsync();
            return Ok(courses);
        }

        // GET: api/courses/5 - Lấy khóa học theo ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetById(int id)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound(new { message = $"Course with id {id} not found." });
            }

            return Ok(course);
        }

        // POST: api/courses - Thêm khóa học mới
        [HttpPost]
        public async Task<ActionResult<Course>> Create([FromBody] Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = course.Id }, course);
        }

        // PUT: api/courses/5 - Cập nhật khóa học
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Course course)
        {
            if (id != course.Id)
            {
                return BadRequest(new { message = "ID in URL does not match ID in body." });
            }

            var existing = await _context.Courses.FindAsync(id);
            if (existing == null)
            {
                return NotFound(new { message = $"Course with id {id} not found." });
            }

            existing.Emoji = course.Emoji;
            existing.Level = course.Level;
            existing.Title = course.Title;
            existing.Description = course.Description;
            existing.Lessons = course.Lessons;
            existing.Duration = course.Duration;
            existing.Students = course.Students;
            existing.Color = course.Color;

            await _context.SaveChangesAsync();

            return Ok(existing);
        }

        // DELETE: api/courses/5 - Xóa khóa học
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound(new { message = $"Course with id {id} not found." });
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return Ok(new { message = $"Course '{course.Title}' deleted successfully." });
        }
    }
}
