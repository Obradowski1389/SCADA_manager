using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model.Tags
{
	public class OutputsValue
	{
		[Key]
		public int Id { get; set; }
		public string IOAddress { get; set; }
		public DateTime TimeStamp { get; set; }
		public double Value { get; set; }
		public ValueType ValueType { get; set; }

		public OutputsValue() { }
		public OutputsValue(string iOAddress, double value, ValueType valueType)
		{
			IOAddress = iOAddress;
			TimeStamp = DateTime.Now;
			Value = value;
			ValueType = valueType;
		}
	}
}
