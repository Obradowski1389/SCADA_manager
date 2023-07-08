namespace SimulationDriver
{
	public class SimulationDriver
	{
		public double Sin()
		{
			double amplitude = 100.0;
			double frequency = 1.0;

			double time = DateTime.Now.TimeOfDay.TotalSeconds;
			double angle = 2 * Math.PI * frequency * time;
			return amplitude * Math.Sin(angle); 
		}

		public double Cos()
		{
			double amplitude = 100.0;
			double frequency = 1.0;
			double time = DateTime.Now.TimeOfDay.TotalSeconds;
			double angle = 2 * Math.PI * frequency * time;
			return amplitude * Math.Cos(angle);
		}
	}
}