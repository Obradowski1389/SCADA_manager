using SCADA_Back.Model;

namespace SCADA_Back.Service.IService
{
	public interface ITagService
	{
		public List<AnalogInput> GetAnalogInputs();
		public List<AnalogOutput> GetAnalogOutputs();
		public List<DigitalInput> GetDigitalInputs();
		public List<DigitalOutput> GetDigitalOutputs();

	}
}
