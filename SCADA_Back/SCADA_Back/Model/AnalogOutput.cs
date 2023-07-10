﻿using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model
{
	public class AnalogOutput
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public string IOAddress { get; set; }
		public double InitialValue { get; set; }
		public double LowLimit { get; set; }
		public double HighLimit { get; set; }
		public string Units { get; set; }
	}
}