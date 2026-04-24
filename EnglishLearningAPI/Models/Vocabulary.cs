using System.ComponentModel.DataAnnotations;

namespace EnglishLearningAPI.Models
{
    /// <summary>
    /// Model đại diện cho một từ vựng tiếng Anh.
    /// Mỗi từ vựng có: word, phiên âm, nghĩa, ví dụ, và phân loại.
    /// </summary>
    public class Vocabulary
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Word { get; set; } = string.Empty;

        [MaxLength(100)]
        public string Phonetic { get; set; } = string.Empty;

        [Required]
        [MaxLength(500)]
        public string Meaning { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string Example { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Category { get; set; } = string.Empty;
    }
}
