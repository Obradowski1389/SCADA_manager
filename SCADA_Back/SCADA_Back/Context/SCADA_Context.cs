using Microsoft.EntityFrameworkCore;
using SCADA_Back.Model;

namespace SCADA_Back.Context
{
	public class SCADA_Context : DbContext
	{
		public DbSet<Alarm> Alarms { get; set; }
		public DbSet<AnalogInput> AnalogInput { get; set; }
		public DbSet<AnalogOutput> AnalogOutput { get; set; }
		public DbSet<DigitalOutput> DigitalOutput { get; set; }
		public DbSet<DigitalInput> DigitalInput { get; set; }


		public SCADA_Context(DbContextOptions<SCADA_Context> options)
		: base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<Alarm>()
				.HasOne(a => a.AnalogInput)
				.WithMany(t => t.Alarms)
				.HasForeignKey(a => a.AnalogInputId);

		}
	}
}
