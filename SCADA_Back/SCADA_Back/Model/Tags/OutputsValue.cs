using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model.Tags
{
	public class OutputsValue
	{
		[Key]
		public int Id { get; set; }
		public string IOAddress { get; set; }
		public int TagId { get; set; }
		public DateTime TimeStamp { get; set; }
		public double Value { get; set; }
		public ValueType ValueType { get; set; }

		public OutputsValue() { }
		public OutputsValue(string iOAddress, int tagId, double value, ValueType valueType)
		{
			IOAddress = iOAddress;
			TagId = tagId;
			TimeStamp = DateTime.Now;
			Value = value;
			ValueType = valueType;
		}
	}
}
