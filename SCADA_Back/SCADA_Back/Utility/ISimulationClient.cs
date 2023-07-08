namespace SCADA_Back.Utility
{
	public interface ISimulationClient
	{
		Task SendSimulationData(object data);
	}
}
