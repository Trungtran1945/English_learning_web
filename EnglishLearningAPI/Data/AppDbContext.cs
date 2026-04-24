using Microsoft.EntityFrameworkCore;
using EnglishLearningAPI.Models;

namespace EnglishLearningAPI.Data
{
    /// <summary>
    /// DbContext chính của ứng dụng.
    /// 
    /// === GIẢI THÍCH CÁCH CẤU HÌNH EF CORE ===
    /// 
    /// 1. DbContext là cầu nối giữa code C# và database.
    ///    - Mỗi DbSet<T> tương ứng với một bảng trong database.
    ///    - EF Core tự động tạo bảng dựa trên properties của model class.
    /// 
    /// 2. OnModelCreating() dùng Fluent API để:
    ///    - Cấu hình chi tiết cho các bảng (tên cột, ràng buộc, index...)
    ///    - Seed data mẫu ban đầu (HasData)
    /// 
    /// 3. Để tạo database từ code:
    ///    - Bước 1: dotnet ef migrations add TenMigration
    ///    - Bước 2: dotnet ef database update
    /// </summary>
    public class AppDbContext : DbContext
    {
        // Constructor nhận DbContextOptions từ Dependency Injection
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Mỗi DbSet = 1 bảng trong database
        public DbSet<Vocabulary> Vocabularies { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }

        /// <summary>
        /// Cấu hình model và seed data mẫu.
        /// Dữ liệu này được lấy từ frontend (hardcoded) để đảm bảo nhất quán.
        /// </summary>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // ============================================
            // SEED DATA: Vocabulary (từ vựng)
            // ============================================
            modelBuilder.Entity<Vocabulary>().HasData(
                new Vocabulary { Id = 1, Word = "Accomplish", Phonetic = "/əˈkɑːm.plɪʃ/", Meaning = "To finish something successfully", Example = "She accomplished her goal of running a marathon.", Category = "Action" },
                new Vocabulary { Id = 2, Word = "Benevolent", Phonetic = "/bəˈnev.əl.ənt/", Meaning = "Kind and generous", Example = "The benevolent donor funded the school.", Category = "Adjective" },
                new Vocabulary { Id = 3, Word = "Diligent", Phonetic = "/ˈdɪl.ɪ.dʒənt/", Meaning = "Careful and persistent in work", Example = "She was diligent in her studies.", Category = "Adjective" },
                new Vocabulary { Id = 4, Word = "Eloquent", Phonetic = "/ˈel.ə.kwənt/", Meaning = "Fluent and persuasive in speaking", Example = "He gave an eloquent speech at the ceremony.", Category = "Adjective" },
                new Vocabulary { Id = 5, Word = "Flourish", Phonetic = "/ˈflɜː.rɪʃ/", Meaning = "To grow or develop successfully", Example = "The business began to flourish after the rebrand.", Category = "Action" },
                new Vocabulary { Id = 6, Word = "Meticulous", Phonetic = "/məˈtɪk.jə.ləs/", Meaning = "Showing great attention to detail", Example = "He is meticulous about his work.", Category = "Adjective" },
                new Vocabulary { Id = 7, Word = "Persevere", Phonetic = "/ˌpɜː.sɪˈvɪr/", Meaning = "To continue despite difficulties", Example = "She persevered through many challenges.", Category = "Action" },
                new Vocabulary { Id = 8, Word = "Resilient", Phonetic = "/rɪˈzɪl.i.ənt/", Meaning = "Able to recover quickly from difficulties", Example = "Children are often more resilient than adults.", Category = "Adjective" },
                new Vocabulary { Id = 9, Word = "Serendipity", Phonetic = "/ˌser.ənˈdɪp.ə.ti/", Meaning = "Finding good things by chance", Example = "It was pure serendipity that they met.", Category = "Noun" },
                new Vocabulary { Id = 10, Word = "Ubiquitous", Phonetic = "/juːˈbɪk.wɪ.təs/", Meaning = "Found everywhere", Example = "Smartphones have become ubiquitous.", Category = "Adjective" },
                new Vocabulary { Id = 11, Word = "Innovate", Phonetic = "/ˈɪn.ə.veɪt/", Meaning = "To introduce new methods or ideas", Example = "Companies that innovate tend to succeed.", Category = "Action" },
                new Vocabulary { Id = 12, Word = "Pragmatic", Phonetic = "/præɡˈmæt.ɪk/", Meaning = "Dealing with things practically", Example = "We need a pragmatic approach to this problem.", Category = "Adjective" }
            );

            // ============================================
            // SEED DATA: Courses (khóa học)
            // ============================================
            modelBuilder.Entity<Course>().HasData(
                new Course { Id = 1, Emoji = "🌱", Level = "Beginner", Title = "English Foundations", Description = "Build your basics with essential grammar, common phrases, and everyday vocabulary.", Lessons = 24, Duration = "8 weeks", Students = "3.2K", Color = "#10b981" },
                new Course { Id = 2, Emoji = "📚", Level = "Elementary", Title = "Everyday English", Description = "Master daily conversations, shopping, travel, and social interactions with confidence.", Lessons = 30, Duration = "10 weeks", Students = "2.8K", Color = "#3b82f6" },
                new Course { Id = 3, Emoji = "💼", Level = "Intermediate", Title = "Business English", Description = "Perfect your professional communication: emails, meetings, presentations, and negotiations.", Lessons = 28, Duration = "10 weeks", Students = "1.9K", Color = "#8b5cf6" },
                new Course { Id = 4, Emoji = "🎧", Level = "All Levels", Title = "Listening Mastery", Description = "Sharpen your ears with podcasts, news, movies, and real-world audio from native speakers.", Lessons = 36, Duration = "12 weeks", Students = "2.5K", Color = "#f59e0b" },
                new Course { Id = 5, Emoji = "🗣️", Level = "Intermediate", Title = "Speaking Confidence", Description = "Overcome speaking anxiety with guided practice, role-plays, and AI pronunciation coaching.", Lessons = 20, Duration = "8 weeks", Students = "1.6K", Color = "#ef4444" },
                new Course { Id = 6, Emoji = "🏆", Level = "Advanced", Title = "IELTS Preparation", Description = "Comprehensive IELTS prep covering all four skills: Listening, Reading, Writing, and Speaking.", Lessons = 40, Duration = "14 weeks", Students = "4.1K", Color = "#ec4899" }
            );

            // ============================================
            // SEED DATA: Quizzes (câu hỏi)
            // ============================================
            // Lưu ý: Options được lưu dạng JSON string qua OptionsJson property
            modelBuilder.Entity<Quiz>(entity =>
            {
                // Bỏ qua property Options (NotMapped), chỉ lưu OptionsJson
                entity.Property(q => q.OptionsJson).HasColumnName("Options");

                entity.HasData(
                    new Quiz
                    {
                        Id = 1,
                        Question = "What is the meaning of 'ubiquitous'?",
                        OptionsJson = "[\"Very rare\",\"Found everywhere\",\"Extremely loud\",\"Very old\"]",
                        CorrectAnswer = 1
                    },
                    new Quiz
                    {
                        Id = 2,
                        Question = "Choose the correct word: 'She _____ her goal after years of hard work.'",
                        OptionsJson = "[\"abandoned\",\"accomplished\",\"avoided\",\"accused\"]",
                        CorrectAnswer = 1
                    },
                    new Quiz
                    {
                        Id = 3,
                        Question = "Which word means 'kind and generous'?",
                        OptionsJson = "[\"Malevolent\",\"Benevolent\",\"Diligent\",\"Resilient\"]",
                        CorrectAnswer = 1
                    },
                    new Quiz
                    {
                        Id = 4,
                        Question = "'Serendipity' refers to:",
                        OptionsJson = "[\"A type of music\",\"Finding good things by chance\",\"A feeling of sadness\",\"An ancient language\"]",
                        CorrectAnswer = 1
                    },
                    new Quiz
                    {
                        Id = 5,
                        Question = "What does 'persevere' mean?",
                        OptionsJson = "[\"Give up easily\",\"Continue despite difficulties\",\"Celebrate success\",\"Feel confused\"]",
                        CorrectAnswer = 1
                    }
                );
            });
        }
    }
}
