using Microsoft.EntityFrameworkCore;
using EnglishLearningAPI.Data;

/// <summary>
/// === GIẢI THÍCH CẤU HÌNH ASP.NET CORE ===
/// 
/// File Program.cs là điểm khởi đầu của ứng dụng ASP.NET Core.
/// Nó cấu hình tất cả các service (DI Container) và middleware pipeline.
/// 
/// CÁC BƯỚC CẤU HÌNH CHÍNH:
/// 1. Kết nối Database (EF Core + SQLite)
/// 2. CORS (cho phép Frontend gọi API)
/// 3. Swagger (tài liệu API tự động)
/// 4. Controllers (đăng ký các API controller)
/// </summary>

var builder = WebApplication.CreateBuilder(args);

// ============================================
// 1. CẤU HÌNH KẾT NỐI DATABASE
// ============================================
// Đọc connection string từ appsettings.json
// Đăng ký AppDbContext vào DI Container với SQLite provider
// → Khi controller cần AppDbContext, ASP.NET Core tự động tạo và truyền vào
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// ============================================
// 2. CẤU HÌNH CORS (Cross-Origin Resource Sharing)
// ============================================
// CORS cho phép frontend (chạy trên localhost:5173) gọi API (chạy trên localhost:5062)
// Nếu không có CORS, trình duyệt sẽ chặn request do khác "origin" (port khác nhau)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:3000") // URL của frontend (Vite mặc định: 5173)
              .AllowAnyHeader()   // Cho phép mọi header (Content-Type, Authorization...)
              .AllowAnyMethod();  // Cho phép mọi HTTP method (GET, POST, PUT, DELETE)
    });
});

// ============================================
// 3. ĐĂNG KÝ CONTROLLERS & SWAGGER
// ============================================
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // Cấu hình JSON: giữ tên property đúng như trong C# (PascalCase → camelCase)
        options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
    });

// Swagger: Tự động tạo tài liệu API, truy cập tại /swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ============================================
// 4. CẤU HÌNH MIDDLEWARE PIPELINE
// ============================================

// Swagger UI - chỉ bật trong môi trường Development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Bật CORS middleware với policy "AllowFrontend"
app.UseCors("AllowFrontend");

// Map các controller endpoints
app.MapControllers();

// ============================================
// 5. TỰ ĐỘNG TẠO DATABASE KHI KHỞI ĐỘNG (Development only)
// ============================================
// EnsureCreated() sẽ tạo database nếu chưa tồn tại
// Trong production, nên dùng migrations thay vì EnsureCreated()
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

// Chạy ứng dụng trên port 5062
app.Run();
