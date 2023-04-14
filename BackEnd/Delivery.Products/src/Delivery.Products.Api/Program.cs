using Delivery.Products.Domain.Interfaces;
using Delivery.Products.Infrastructure;
using Delivery.Products.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

#region Swagger Configuration
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1.0",
        Title = "Products Api",
        Description = "Service to get informations and manage the products for the Delivery"
    });

    var xmlFileName = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlFilePath = Path.Combine(AppContext.BaseDirectory, xmlFileName);
    options.IncludeXmlComments(xmlFilePath);
});
#endregion

#region Api Versioning Configuration
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.ReportApiVersions = true;
    options.AssumeDefaultVersionWhenUnspecified = true;
});

builder.Services.AddVersionedApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});
#endregion

#region Add MongoDb Connection
builder.Services.Configure<DbSettings>(builder.Configuration.GetSection("MongoDb"));
builder.Services.AddSingleton<MongoDbRepository>();
#endregion

#region Add Services
builder.Services.AddScoped<IProductService, ProductService>();
#endregion

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
