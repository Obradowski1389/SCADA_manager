using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCADA_Back.Migrations
{
    /// <inheritdoc />
    public partial class UpdateEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AnalogInput",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Driver = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IOAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ScanTime = table.Column<double>(type: "float", nullable: false),
                    IsOn = table.Column<bool>(type: "bit", nullable: false),
                    LowLimit = table.Column<double>(type: "float", nullable: false),
                    HighLimit = table.Column<double>(type: "float", nullable: false),
                    Units = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnalogInput", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AnalogOutput",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IOAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InitialValue = table.Column<double>(type: "float", nullable: false),
                    LowLimit = table.Column<double>(type: "float", nullable: false),
                    HighLimit = table.Column<double>(type: "float", nullable: false),
                    Units = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnalogOutput", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DigitalInput",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Driver = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IOAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ScanTime = table.Column<double>(type: "float", nullable: false),
                    IsOn = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DigitalInput", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DigitalOutput",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IOAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InitialValue = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DigitalOutput", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Alarms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Threshold = table.Column<double>(type: "float", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    Priority = table.Column<int>(type: "int", nullable: false),
                    TimeStamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AnalogInputId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alarms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Alarms_AnalogInput_AnalogInputId",
                        column: x => x.AnalogInputId,
                        principalTable: "AnalogInput",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Alarms_AnalogInputId",
                table: "Alarms",
                column: "AnalogInputId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Alarms");

            migrationBuilder.DropTable(
                name: "AnalogOutput");

            migrationBuilder.DropTable(
                name: "DigitalInput");

            migrationBuilder.DropTable(
                name: "DigitalOutput");

            migrationBuilder.DropTable(
                name: "AnalogInput");
        }
    }
}
