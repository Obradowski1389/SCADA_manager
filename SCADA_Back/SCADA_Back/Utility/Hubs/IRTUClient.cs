namespace SCADA_Back.Utility.Hubs
{
    public interface IRTUClient
    {
        Task SendRTUData(object data);
    }
}
