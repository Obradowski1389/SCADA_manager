using Microsoft.AspNetCore.SignalR;

namespace SCADA_Back.Utility
{
	public class RTUHub : Hub<IRTUClient>
	{
		public RTUHub() { }
		public async Task SendRTUData(object data)
		{
			await Clients.All.SendRTUData(data);
		}
	}
}
