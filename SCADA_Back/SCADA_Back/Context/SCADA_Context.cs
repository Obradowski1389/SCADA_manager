using Microsoft.EntityFrameworkCore;
using SCADA_Back.Model;
using SCADA_Back.Model.Tags;

namespace SCADA_Back.Context
{
    public class SCADA_Context : DbContext
	{
		public DbSet<Alarm> Alarms { get; set; }
		public DbSet<AlarmValue> AlarmsValue { get; set; }
		public DbSet<AnalogInput> AnalogInput { get; set; }
		public DbSet<AnalogOutput> AnalogOutput { get; set; }
		public DbSet<DigitalOutput> DigitalOutput { get; set; }
		public DbSet<DigitalInput> DigitalInput { get; set; }
		public DbSet<InputsValue> InputsValues { get; set; }
		public DbSet<OutputsValue> OutputsValues { get; set; }


		public SCADA_Context(DbContextOptions<SCADA_Context> options)
		: base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			builder.Entity<Alarm>()
				.HasOne(a => a.AnalogInput)
				.WithMany(t => t.Alarms)
				.HasForeignKey(a => a.AnalogInputId);
			builder.Entity<AnalogOutput>().HasKey(t => t.Id);
			builder.Entity<AnalogInput>().HasKey(t => t.Id);
			builder.Entity<DigitalOutput>().HasKey(t => t.Id);
			builder.Entity<DigitalInput>().HasKey(t => t.Id);
			
			base.OnModelCreating(builder);
		}
	}
}
