namespace SCADA_Back.Model.Tags
{
    public abstract class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string IOAddress { get; set; }

    }
}
