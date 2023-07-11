using Microsoft.EntityFrameworkCore;
using SCADA_Back.Context;
using SCADA_Back.Model.DTO;
using SCADA_Back.Model.Tags;
using SCADA_Back.Repository.IRepo;
using ValueType = SCADA_Back.Model.Tags.ValueType;

namespace SCADA_Back.Repository
{
    public class TagRepository : ITagRepository
	{
		private readonly SCADA_Context _context;
		public TagRepository(SCADA_Context context)
		{
			_context = context;
		}

		public List<Tag> GetAll()
		{
			List<Tag> allTags = GetAnalogInputs().Cast<Tag>().ToList();
			allTags.AddRange(GetDigitalInputs().Cast<Tag>());
			allTags.AddRange(GetDigitalOutputs().Cast<Tag>());
			allTags.AddRange(GetAnalogOutputs().Cast<Tag>());

			return allTags;
		}

		public Tag? GetById(int id)
		{
			return GetAll().FirstOrDefault(x => x.Id == id);
		}

		public List<AnalogInput> GetAnalogInputs()
		{
			return _context.AnalogInput.Include(ai => ai.Alarms).ToList();
		}

		public List<DigitalInput> GetDigitalInputs()
		{
			return _context.DigitalInput.ToList();
		}

		public List<AnalogOutput> GetAnalogOutputs()
		{
			return _context.AnalogOutput.ToList();
		}

		public List<DigitalOutput> GetDigitalOutputs()
		{
			return _context.DigitalOutput.ToList();
		}

		public List<Tag> GetInputs()
		{
			List<Tag> tags = new List<Tag>();
			tags.AddRange(GetAnalogInputs());
			tags.AddRange(GetDigitalInputs());
			return tags;
		}

		public async Task<List<Tag>> GetInputsAsync()
		{
			return await Task.Run(() =>
			{
				List<Tag> allTags = new List<Tag>();
				allTags.AddRange(GetAnalogInputs().Cast<Tag>());
				allTags.AddRange(GetDigitalInputs().Cast<Tag>());

				return allTags;
			});
		}

		public async Task<Tag?> GetInputByAddress(string address)
		{
			List<Tag> allTags = await GetInputsAsync();
			return allTags.FirstOrDefault(t => t.IOAddress == address);
		}

		public AnalogInput AddAnalogInput(AnalogInput analogInput)
		{
			_context.AnalogInput.Add(analogInput);
			_context.SaveChanges();

			return _context.AnalogInput.First(a => analogInput.IOAddress == a.IOAddress);
		}

		public void AddAnalogOutput(AnalogOutput analogOutput)
		{
			_context.AnalogOutput.Add(analogOutput);
			_context.SaveChanges();
		}

		public void AddDigitalInput(DigitalInput digitalInput)
		{
			_context.DigitalInput.Add(digitalInput);
			_context.SaveChanges();
		}

		public void AddDigitalOutput(DigitalOutput digitalOutput)
		{
			_context.DigitalOutput.Add(digitalOutput);
			_context.SaveChanges();
		}

		public void MoveTag(Tag tag)
		{
			_context.Update(tag);
			_context.SaveChanges();
		}

		public void RemoveTag(Tag tag)
		{
			if(tag is AnalogInput analogInput)
			{
				foreach(var alarm in analogInput.Alarms)
				{
					_context.Entry(alarm).State = EntityState.Deleted;
				}
			}
			_context.Entry(tag).State = EntityState.Deleted;
			_context.SaveChanges();
		}

		public void ToggleScan(Tag tag, bool on)
		{
			if(tag is AnalogInput analog)
			{
				analog.IsOn = on;
				_context.Attach(analog);
				_context.SaveChanges();
			}else if(tag is DigitalInput digital)
			{
				digital.IsOn = on;
				_context.Attach(digital);
				_context.SaveChanges();
			}
		}

		public void AddTagValue(InputsValue tagValue)
		{
			_context.InputsValues.Add(tagValue);
			_context.SaveChanges();
		}

		public Task<InputsValue?> GetTagValueByAddress(string address)
		{
			return _context.InputsValues.Where(x => x.IOAddress == address).OrderByDescending(x=>x.TimeStamp).FirstOrDefaultAsync();
		}

		public void AddOutputValue(OutputsValue outputsValue)
		{
			_context.OutputsValues.Add(outputsValue);
			_context.SaveChanges();
		}

		public List<InputsValue> GetLastValues(ValueType valueType)
		{
			var li = _context.InputsValues
				.Where(i => i.ValueType == valueType && i.TagId != 0)
				.GroupBy(i => i.TagId)
				.Select(g => g.OrderByDescending(iv => iv.TimeStamp).FirstOrDefault())
				.ToList();
			return li;

		}

		public List<OutputsValue> GetOutputValues(int id)
		{
			return _context.OutputsValues.Where(i => i.TagId == id).ToList();
		}

		public List<InputsValue> GetInputValues(int id)
		{
			return _context.InputsValues.Where(i => i.TagId == id).ToList();
		}

		public List<OutputsValue> GetOutputValues(DateTime start, DateTime end)
		{
			return _context.OutputsValues.Where(i => i.TimeStamp >=  start && i.TimeStamp <= end).ToList();
		}

		public List<InputsValue> GetInputsValues(DateTime start, DateTime end)
		{
			return _context.InputsValues.Where(i => i.TimeStamp >= start && i.TimeStamp <= end).ToList();
		}
	}
}
