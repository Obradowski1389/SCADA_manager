namespace SimulationDriver
{
	public class SimulationDriver
	{
		public double Sin(double low, double high)
		{
			double amplitude = high-low;
			double frequency = 0.01;

			double time = DateTime.Now.TimeOfDay.TotalSeconds;
			double angle = 2 * Math.PI * frequency * time;
			double value = amplitude * Math.Sin(angle); 
			return Math.Clamp(value, low, high);
		}

		public double Cos(double low, double high)
		{
			double amplitude = high - low;
			double frequency = 0.01;
			double time = DateTime.Now.TimeOfDay.TotalSeconds;
			double angle = 2 * Math.PI * frequency * time;
			double value = amplitude * Math.Sin(angle);
			return Math.Clamp(value, low, high);
		}
	}
}