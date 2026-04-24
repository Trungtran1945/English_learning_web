using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EnglishLearningAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Emoji = table.Column<string>(type: "TEXT", maxLength: 10, nullable: false),
                    Level = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Title = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Description = table.Column<string>(type: "TEXT", maxLength: 1000, nullable: false),
                    Lessons = table.Column<int>(type: "INTEGER", nullable: false),
                    Duration = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Students = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    Color = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Quizzes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Question = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    Options = table.Column<string>(type: "TEXT", nullable: false),
                    CorrectAnswer = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quizzes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vocabularies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Word = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Phonetic = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Meaning = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    Example = table.Column<string>(type: "TEXT", maxLength: 1000, nullable: false),
                    Category = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vocabularies", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Courses",
                columns: new[] { "Id", "Color", "Description", "Duration", "Emoji", "Lessons", "Level", "Students", "Title" },
                values: new object[,]
                {
                    { 1, "#10b981", "Build your basics with essential grammar, common phrases, and everyday vocabulary.", "8 weeks", "🌱", 24, "Beginner", "3.2K", "English Foundations" },
                    { 2, "#3b82f6", "Master daily conversations, shopping, travel, and social interactions with confidence.", "10 weeks", "📚", 30, "Elementary", "2.8K", "Everyday English" },
                    { 3, "#8b5cf6", "Perfect your professional communication: emails, meetings, presentations, and negotiations.", "10 weeks", "💼", 28, "Intermediate", "1.9K", "Business English" },
                    { 4, "#f59e0b", "Sharpen your ears with podcasts, news, movies, and real-world audio from native speakers.", "12 weeks", "🎧", 36, "All Levels", "2.5K", "Listening Mastery" },
                    { 5, "#ef4444", "Overcome speaking anxiety with guided practice, role-plays, and AI pronunciation coaching.", "8 weeks", "🗣️", 20, "Intermediate", "1.6K", "Speaking Confidence" },
                    { 6, "#ec4899", "Comprehensive IELTS prep covering all four skills: Listening, Reading, Writing, and Speaking.", "14 weeks", "🏆", 40, "Advanced", "4.1K", "IELTS Preparation" }
                });

            migrationBuilder.InsertData(
                table: "Quizzes",
                columns: new[] { "Id", "CorrectAnswer", "Options", "Question" },
                values: new object[,]
                {
                    { 1, 1, "[\"Very rare\",\"Found everywhere\",\"Extremely loud\",\"Very old\"]", "What is the meaning of 'ubiquitous'?" },
                    { 2, 1, "[\"abandoned\",\"accomplished\",\"avoided\",\"accused\"]", "Choose the correct word: 'She _____ her goal after years of hard work.'" },
                    { 3, 1, "[\"Malevolent\",\"Benevolent\",\"Diligent\",\"Resilient\"]", "Which word means 'kind and generous'?" },
                    { 4, 1, "[\"A type of music\",\"Finding good things by chance\",\"A feeling of sadness\",\"An ancient language\"]", "'Serendipity' refers to:" },
                    { 5, 1, "[\"Give up easily\",\"Continue despite difficulties\",\"Celebrate success\",\"Feel confused\"]", "What does 'persevere' mean?" }
                });

            migrationBuilder.InsertData(
                table: "Vocabularies",
                columns: new[] { "Id", "Category", "Example", "Meaning", "Phonetic", "Word" },
                values: new object[,]
                {
                    { 1, "Action", "She accomplished her goal of running a marathon.", "To finish something successfully", "/əˈkɑːm.plɪʃ/", "Accomplish" },
                    { 2, "Adjective", "The benevolent donor funded the school.", "Kind and generous", "/bəˈnev.əl.ənt/", "Benevolent" },
                    { 3, "Adjective", "She was diligent in her studies.", "Careful and persistent in work", "/ˈdɪl.ɪ.dʒənt/", "Diligent" },
                    { 4, "Adjective", "He gave an eloquent speech at the ceremony.", "Fluent and persuasive in speaking", "/ˈel.ə.kwənt/", "Eloquent" },
                    { 5, "Action", "The business began to flourish after the rebrand.", "To grow or develop successfully", "/ˈflɜː.rɪʃ/", "Flourish" },
                    { 6, "Adjective", "He is meticulous about his work.", "Showing great attention to detail", "/məˈtɪk.jə.ləs/", "Meticulous" },
                    { 7, "Action", "She persevered through many challenges.", "To continue despite difficulties", "/ˌpɜː.sɪˈvɪr/", "Persevere" },
                    { 8, "Adjective", "Children are often more resilient than adults.", "Able to recover quickly from difficulties", "/rɪˈzɪl.i.ənt/", "Resilient" },
                    { 9, "Noun", "It was pure serendipity that they met.", "Finding good things by chance", "/ˌser.ənˈdɪp.ə.ti/", "Serendipity" },
                    { 10, "Adjective", "Smartphones have become ubiquitous.", "Found everywhere", "/juːˈbɪk.wɪ.təs/", "Ubiquitous" },
                    { 11, "Action", "Companies that innovate tend to succeed.", "To introduce new methods or ideas", "/ˈɪn.ə.veɪt/", "Innovate" },
                    { 12, "Adjective", "We need a pragmatic approach to this problem.", "Dealing with things practically", "/præɡˈmæt.ɪk/", "Pragmatic" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Quizzes");

            migrationBuilder.DropTable(
                name: "Vocabularies");
        }
    }
}
