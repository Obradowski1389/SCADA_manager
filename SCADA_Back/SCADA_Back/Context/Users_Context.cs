using Microsoft.EntityFrameworkCore;
using SCADA_Back.Model;

namespace SCADA_Back.Context
{
	public class Users_Context : DbContext
	{
		public DbSet<User> Users { get; set; }
		public Users_Context(DbContextOptions<Users_Context> options)
		: base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<User>()
				.HasKey(u => u.Id);

		}
	}
}
