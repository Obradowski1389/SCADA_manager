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
            while (!stoppingToken.IsCancellationRequested)
            {
                using(var scope = _serviceProvider.CreateScope())
                {
                    var tagRepository = scope.ServiceProvider.GetRequiredService<ITagRepository>();

                    var inputTags = await tagRepository.GetInputsAsync();
                    for(int i = 5; i < 11; i++)
                    {
                        double value;
                        ValueType valueType;
                        Tag? tag = inputTags.FirstOrDefault(t => t.IOAddress == i.ToString());
                        if(tag == null)
                        {
                            value = random.NextDouble();
                            value = Math.Round(value, 2, MidpointRounding.AwayFromZero);
                            valueType = ValueType.ANALOG;
                        }else if(tag is AnalogInput analogInput)
                        {
                            value = analogInput.LowLimit + (random.NextDouble() * (analogInput.HighLimit - analogInput.LowLimit));
							value = Math.Round(value, 2, MidpointRounding.AwayFromZero);
							valueType = ValueType.ANALOG;
                        }
                        else
                        {
                            value = random.NextInt64(0, 2);
                            value = Math.Round(value, 2, MidpointRounding.AwayFromZero);
							valueType = ValueType.DIGITAL;
                        }

						tagRepository.AddTagValue(new TagValue(i.ToString(), value, valueType));
					}

                }

                await Task.Delay(10000, stoppingToken);
            }
        }
    }
}
