namespace SCADA_Back.Utility.Hubs
{
    public interface ISimulationClient
    {
        Task SendSimulationData(object data);
    }
}
