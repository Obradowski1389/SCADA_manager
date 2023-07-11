using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCADA_Back.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTagsEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Driver",
                table: "DigitalInput",
                newName: "DriverFunction");

            migrationBuilder.RenameColumn(
                name: "Driver",
                table: "AnalogInput",
                newName: "DriverFunction");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DriverFunction",
                table: "DigitalInput",
                newName: "Driver");

            migrationBuilder.RenameColumn(
                name: "DriverFunction",
                table: "AnalogInput",
                newName: "Driver");
        }
    }
}
