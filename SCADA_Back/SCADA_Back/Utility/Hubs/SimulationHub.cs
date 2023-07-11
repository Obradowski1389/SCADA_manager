using Microsoft.AspNetCore.SignalR;

namespace SCADA_Back.Utility.Hubs
{
    public class SimulationHub : Hub<ISimulationClient>
    {
        public SimulationHub() { }
        public async Task SendSimulationData(object data)
        {
            await Clients.All.SendSimulationData(data);
        }
    }
}
