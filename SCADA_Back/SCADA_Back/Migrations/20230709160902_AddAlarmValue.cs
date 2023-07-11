using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCADA_Back.Migrations
{
    /// <inheritdoc />
    public partial class AddAlarmValue : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DriverFunction",
                table: "DigitalInput");

            migrationBuilder.DropColumn(
                name: "DriverFunction",
                table: "AnalogInput");

            migrationBuilder.CreateTable(
                name: "AlarmsValue",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TimeStamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AlarmId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlarmsValue", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AlarmsValue_Alarms_AlarmId",
                        column: x => x.AlarmId,
                        principalTable: "Alarms",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AlarmsValue_AlarmId",
                table: "AlarmsValue",
                column: "AlarmId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AlarmsValue");

            migrationBuilder.AddColumn<string>(
                name: "DriverFunction",
                table: "DigitalInput",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DriverFunction",
                table: "AnalogInput",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
