using Microsoft.EntityFrameworkCore;
using SCADA_Back.Model;

namespace SCADA_Back.Context
{
	public class SCADA_Context : DbContext
	{
		public DbSet<User> Users { get; set; }
		public SCADA_Context(DbContextOptions<SCADA_Context> options)
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
