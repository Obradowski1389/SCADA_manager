using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model.Tags
{

	public enum ValueType
	{
		ANALOG, DIGITAL
	}

	public class TagValue
	{
		[Key]
		public int Id { get; set; }
		public string IOAddress { get; set; }
		public DateTime TimeStamp { get; set; }
		public double Value { get; set; }
		public ValueType ValueType { get; set; }

		public TagValue() { }

		public TagValue(string address, double value, ValueType valueType)
		{
			IOAddress = address;
			TimeStamp = DateTime.Now;
			Value = value;
			ValueType = valueType;
		}
	}
}
