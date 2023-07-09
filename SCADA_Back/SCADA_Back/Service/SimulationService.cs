using Azure;
using Microsoft.AspNetCore.SignalR;
using Microsoft.OpenApi.Validations;
using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Utility;
using Driver = SimulationDriver.SimulationDriver;

namespace SCADA_Back.Service
{
	public class SimulationService : BackgroundService
	{
		private readonly IServiceProvider _serviceProvider;
		private readonly Dictionary<string, Thread> scanTimers = new Dictionary<string, Thread>();
		private readonly Driver Driver;
		private CancellationTokenSource _cancellationTokenSource;
		private readonly IHubContext<SimulationHub, ISimulationClient> _simulationHub;

		public SimulationService(IServiceProvider serviceProvider, IHubContext<SimulationHub, ISimulationClient> hubContext)
		{
			_serviceProvider = serviceProvider;
			Driver = new Driver();
			_simulationHub = hubContext;
		}


		protected override async Task ExecuteAsync(CancellationToken stoppingToken)
		{
			await StartSimulation(stoppingToken);
		}


		public async Task StartSimulation(CancellationToken stoppingToken)
		{
			using (var scope = _serviceProvider.CreateScope())
			{
				var repo = scope.ServiceProvider.GetRequiredService<ITagRepository>();
				for (int i = 1; i < 5; i++)
				{
					Tag? tag = await repo.GetInputByAddress(i.ToString());
					if (i % 2 == 0)
					{
						_startThread(tag, i.ToString(), "sin");
					}else { _startThread(tag, i.ToString(), "cos"); }
				}
			}
		}

		private double getValue(string function)
		{
			switch (function)
			{
				case "sin":
					return Math.Round(Driver.Sin(), 2, MidpointRounding.AwayFromZero);
				case "cos":
					return Math.Round(Driver.Cos(), 2, MidpointRounding.AwayFromZero);
				default:
					return 0;
			}
		}

		private void _startThread(Tag? tag, string address, string function)
		{
			if (scanTimers.ContainsKey(address))
			{
				return;
			}
			Thread thread = new Thread(async () =>
			{
				while (true)
				{
					double val = getValue(function);
					await _simulationHub.Clients.All.SendSimulationData(new SimulationDataDTO(address, val));
					if (tag is not null)
					{
						if (tag is AnalogInput analog)
						{
							Thread.Sleep(TimeSpan.FromSeconds(analog.ScanTime));

						}
						else if (tag is DigitalInput digital)
						{
							Thread.Sleep(TimeSpan.FromSeconds(digital.ScanTime));
						}
					}
					else
					{
						Thread.Sleep(TimeSpan.FromSeconds(5));
					}

				}
			});
			thread.Start();
			scanTimers[address] = thread;
		}
	}
}
