using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model.Tags
{
    public class AnalogOutput : Tag
    {
        public double InitialValue { get; set; }
        public double LowLimit { get; set; }
        public double HighLimit { get; set; }
        public string Units { get; set; }
    }
}
