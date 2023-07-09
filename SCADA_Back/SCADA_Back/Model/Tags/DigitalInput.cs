using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model.Tags
{
    public class DigitalInput : Tag
    {
        public double ScanTime { get; set; }
        public bool IsOn { get; set; }
    }
}
