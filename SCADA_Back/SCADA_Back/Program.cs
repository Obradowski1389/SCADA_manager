using SCADA_Back.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using SCADA_Back.Model;
using SCADA_Back.Service;
using SCADA_Back.Repository;
using SCADA_Back.Exceptions;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using System.Net;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Service.IService;
using SCADA_Back.Utility;
using SCADA_Back.Service.Background;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("SCADADatabase");
builder.Services.AddDbContext<SCADA_Context>(options =>
	options.UseSqlServer(connectionString));

var usersConnectionString = builder.Configuration.GetConnectionString("UsersDatabase");
builder.Services.AddDbContext<Users_Context>(options =>
	options.UseSqlServer(usersConnectionString)
);

builder.Services.AddSignalR();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHostedService<SimulationService>();
builder.Services.AddHostedService<RTU>();

// DI Repository
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IAlarmRepository, AlarmRepository>();
builder.Services.AddScoped<ITagRepository, TagRepository>();


// DI Service
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IAlarmService, AlarmService>();
builder.Services.AddScoped<ITagService, TagService>();

builder.Services.AddCors(options =>
{
	options.AddDefaultPolicy(builder =>
	{
		builder.AllowAnyOrigin()
			   .AllowAnyMethod()
			   .AllowAnyHeader();
	});
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapHub<SimulationHub>("/hub/simulation");
app.MapHub<RTUHub>("/hub/RTU");

app.Run();
