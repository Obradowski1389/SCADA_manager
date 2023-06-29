using Microsoft.EntityFrameworkCore;

namespace SCADA_Back.Context
{
	public class SCADA_Context : DbContext
	{
		public SCADA_Context(DbContextOptions<SCADA_Context> options)
		: base(options)
		{
		}

	}
}
