using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model.Tags
{
    public class DigitalOutput : Tag
    {
        public int InitialValue { get; set; }
    }
}
