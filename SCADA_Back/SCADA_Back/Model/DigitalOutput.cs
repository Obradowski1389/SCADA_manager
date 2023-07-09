using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model
{
	public class DigitalOutput : Tag
	{
		public int InitialValue { get; set; }
	}
}
