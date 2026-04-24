using System.ComponentModel.DataAnnotations;

namespace EnglishLearningAPI.Models
{
    /// <summary>
    /// Model đại diện cho một khóa học.
    /// </summary>
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(10)]
        public string Emoji { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Level { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        public int Lessons { get; set; }

        [MaxLength(50)]
        public string Duration { get; set; } = string.Empty;

        [MaxLength(20)]
        public string Students { get; set; } = string.Empty;

        [MaxLength(20)]
        public string Color { get; set; } = string.Empty;
    }
}
