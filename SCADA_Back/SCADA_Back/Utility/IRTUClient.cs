namespace SCADA_Back.Utility
{
	public interface IRTUClient
	{
		Task SendRTUData(object data);
	}
}
