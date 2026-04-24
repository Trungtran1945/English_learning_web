using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EnglishLearningAPI.Models
{
    /// <summary>
    /// Model đại diện cho một câu hỏi quiz.
    /// Options được lưu dạng JSON string trong database, và chuyển thành List<string> khi dùng.
    /// </summary>
    public class Quiz
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(500)]
        public string Question { get; set; } = string.Empty;

        /// <summary>
        /// Danh sách các đáp án, lưu trong DB dạng JSON string.
        /// Ví dụ: ["Very rare","Found everywhere","Extremely loud","Very old"]
        /// </summary>
        [NotMapped]
        public List<string> Options { get; set; } = new List<string>();

        /// <summary>
        /// Property nội bộ dùng để lưu Options dưới dạng JSON vào database.
        /// EF Core sẽ đọc/ghi property này.
        /// </summary>
        [Column("Options")]
        public string OptionsJson
        {
            get => System.Text.Json.JsonSerializer.Serialize(Options);
            set => Options = string.IsNullOrEmpty(value)
                ? new List<string>()
                : System.Text.Json.JsonSerializer.Deserialize<List<string>>(value) ?? new List<string>();
        }

        /// <summary>
        /// Index của đáp án đúng trong danh sách Options (bắt đầu từ 0).
        /// </summary>
        public int CorrectAnswer { get; set; }
    }
}
