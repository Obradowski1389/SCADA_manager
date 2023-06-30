using SCADA_Back.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using SCADA_Back.Model;
using SCADA_Back.Service;
using SCADA_Back.Repository;
using SCADA_Back.Exceptions;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("SCADADatabase");
builder.Services.AddDbContext<SCADA_Context>(options =>
	options.UseSqlServer(connectionString));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DI Repository
builder.Services.AddScoped<IUserRepository, UserRepository>();

// DI Service
builder.Services.AddScoped<IUserService, UserService>();


//builder.Services.Configure<KestrelServerOptions>(options =>
//{
//	options.Listen(IPAddress.Loopback, 7073); 
//});


//builder.Services.AddDefaultIdentity<User>(options => options.SignIn.RequireConfirmedAccount = true)
//	.AddRoles<IdentityRole>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
