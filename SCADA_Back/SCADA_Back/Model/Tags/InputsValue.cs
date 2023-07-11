using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model.Tags
{

	public enum ValueType
	{
		ANALOG, DIGITAL
	}

	public class InputsValue
	{
		[Key]
		public int Id { get; set; }
		public string IOAddress { get; set; }
		public int TagId { get; set; }
		public DateTime TimeStamp { get; set; }
		public double Value { get; set; }
		public ValueType ValueType { get; set; }

		public InputsValue() { }

		public InputsValue(string address, int tagID, double value, ValueType valueType)
		{
			IOAddress = address;
			TagId = tagID;
			TimeStamp = DateTime.Now;
			Value = value;
			ValueType = valueType;
		}
	}
}
