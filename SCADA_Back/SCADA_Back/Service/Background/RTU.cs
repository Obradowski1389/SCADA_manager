using SCADA_Back.Model.Tags;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Service.IService;
using ValueType = SCADA_Back.Model.Tags.ValueType;

namespace SCADA_Back.Service.Background
{
    public class RTU : BackgroundService
    {
		private readonly IServiceProvider _serviceProvider;
		private Random random = new Random();

		public RTU(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

		protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            Console.WriteLine("Execute async");
            while (!stoppingToken.IsCancellationRequested)
            {
                using(var scope = _serviceProvider.CreateScope())
                {
                    var tagRepository = scope.ServiceProvider.GetRequiredService<ITagRepository>();

                    var inputTags = await tagRepository.GetInputsAsync();

                    foreach(var inputTag in inputTags)
                    {
                        if(int.Parse(inputTag.IOAddress) < 5) continue;

                        double value;
                        ValueType valueType;

                        Console.WriteLine(inputTag.IOAddress);

                        if(inputTag is AnalogInput analogInput)
                        {
                            value = analogInput.LowLimit + (random.NextDouble() * (analogInput.HighLimit - analogInput.LowLimit));
                            valueType = ValueType.ANALOG;
                        }else
                        {
                            value = random.NextInt64(0, 2);
                            valueType = ValueType.DIGITAL;
                        }

                        tagRepository.AddTagValue(new TagValue(inputTag.IOAddress, value, valueType));
                    }
                }

                await Task.Delay(5000, stoppingToken);
            }
        }
    }
}
