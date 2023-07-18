// import { InputsDTO, OutputsDTO, RTU } from 'src/model/models';
// export var InputsDto: InputsDTO = {
//     AnalogInputs: [
//     //   {
//     //     Id: 1,
//     //     Name: 'Radijator',
//     //     Driver: 'sin',
//     //     Address: 1,
//     //     ScanTime: 250,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 5,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 25,
//     //         Unit: '°C'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 0,
//     //     HightLimit: 50,
//     //     Unit: '°C',
//     //     Value: 23
//     //   },
//     //   {
//     //     Id: 2,
//     //     Name: 'Cisterna',
//     //     Driver: 'cos',
//     //     Address: 2,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 10,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 50,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 65,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 3,
//     //         Treshold: 80,
//     //         Unit: 'l'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 0,
//     //     HightLimit: 100,
//     //     Unit: 'l',
//     //     Value: 82
//     //   },
//     //   {
//     //     Id: 3,
//     //     Name: 'Pumpa za vodu',
//     //     Driver: 'cos',
//     //     Address: 3,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 120,
//     //         Unit: 'lps'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 150,
//     //         Unit: 'lps'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 3,
//     //         Treshold: 180,
//     //         Unit: 'lps'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 100,
//     //     HightLimit: 200,
//     //     Unit: 'lps',
//     //     Value: 78
//     //   },
//     //   {
//     //     Id: 4,
//     //     Name: 'Cisterna',
//     //     Driver: 'cos',
//     //     Address: 4,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 10,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 50,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 65,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 3,
//     //         Treshold: 80,
//     //         Unit: 'l'
//     //       }
//     //     ],
//     //     ScanOn: false,
//     //     LowLimit: 0,
//     //     HightLimit: 100,
//     //     Unit: 'l',
//     //     Value: 78
//     //   },
//     //   {
//     //     Id: 5,
//     //     Name: 'Ventilator',
//     //     Driver: 'cos',
//     //     Address: 5,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 10,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 30,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 40,
//     //         Unit: '°C'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 0,
//     //     HightLimit: 45,
//     //     Unit: '°C',
//     //     Value: 78
//     //   },
//     //   {
//     //     Id: 6,
//     //     Name: 'Kotao',
//     //     Driver: 'cos',
//     //     Address: 6,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 45,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 55,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 75,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 3,
//     //         Treshold: 85,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 3,
//     //         Treshold: 96,
//     //         Unit: '°C'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 0,
//     //     HightLimit: 100,
//     //     Unit: '°C',
//     //     Value: 86
//     //   },
//     //   {
//     //     Id: 7,
//     //     Name: 'Radijator',
//     //     Driver: 'sin',
//     //     Address: 7,
//     //     ScanTime: 250,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 5,
//     //         Unit: '°C'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 0,
//     //     HightLimit: 50,
//     //     Unit: '°C',
//     //     Value: 4
//     //   },
//     //   {
//     //     Id: 8,
//     //     Name: 'Kotao',
//     //     Driver: 'cos',
//     //     Address: 8,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 45,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 55,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 75,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 3,
//     //         Treshold: 85,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 3,
//     //         Treshold: 96,
//     //         Unit: '°C'
//     //       }
//     //     ],
//     //     ScanOn: false,
//     //     LowLimit: 0,
//     //     HightLimit: 100,
//     //     Unit: '°C',
//     //     Value: 86
//     //   },
//     //   {
//     //     Id: 9,
//     //     Name: 'Ventilator',
//     //     Driver: 'cos',
//     //     Address: 9,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 10,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 30,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 40,
//     //         Unit: '°C'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 0,
//     //     HightLimit: 45,
//     //     Unit: '°C',
//     //     Value: 25
//     //   },
//     //   {
//     //     Id: 10,
//     //     Name: 'Bazen',
//     //     Driver: 'cos',
//     //     Address: 10,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 10,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 0,
//     //         Priority: 3,
//     //         Treshold: 5,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 30,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 40,
//     //         Unit: 'l'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 0,
//     //     HightLimit: 50,
//     //     Unit: 'l',
//     //     Value: 4
//     //   },
//     //   {
//     //     Id: 11,
//     //     Name: 'Ventilator',
//     //     Driver: 'cos',
//     //     Address: 11,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 10,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 30,
//     //         Unit: '°C'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 40,
//     //         Unit: '°C'
//     //       }
//     //     ],
//     //     ScanOn: false,
//     //     LowLimit: 0,
//     //     HightLimit: 45,
//     //     Unit: '°C',
//     //     Value: 25
//     //   },
//     //   {
//     //     Id: 12,
//     //     Name: 'Cisterna',
//     //     Driver: 'cos',
//     //     Address: 12,
//     //     ScanTime: 200,
//     //     Alarms: [
//     //       {
//     //         Type: 0,
//     //         Priority: 1,
//     //         Treshold: 10,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 1,
//     //         Treshold: 50,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 2,
//     //         Treshold: 65,
//     //         Unit: 'l'
//     //       },
//     //       {
//     //         Type: 1,
//     //         Priority: 3,
//     //         Treshold: 80,
//     //         Unit: 'l'
//     //       }
//     //     ],
//     //     ScanOn: true,
//     //     LowLimit: 0,
//     //     HightLimit: 100,
//     //     Unit: 'l',
//     //     Value: 82
//     //   }
//     // ],
//     // DigitalInputs: [
//     //   {
//     //     Id: 1,
//     //     Name: 'Peć',
//     //     Driver: 'cos',
//     //     Address: 13,
//     //     ScanTime: 300,
//     //     ScanOn: true
//     //   },
//     //   {
//     //     Id: 1,
//     //     Name: 'Plin',
//     //     Driver: 'cos',
//     //     Address: 14,
//     //     ScanTime: 300,
//     //     ScanOn: false
//     //   },
//     //   {
//     //     Id: 1,
//     //     Name: 'Ventilator',
//     //     Driver: 'cos',
//     //     Address: 15,
//     //     ScanTime: 300,
//     //     ScanOn: true
//     //   },
//     //   {
//     //     Id: 1,
//     //     Name: 'Pumpa za vodu',
//     //     Driver: 'cos',
//     //     Address: 16,
//     //     ScanTime: 300,
//     //     ScanOn: true
//     //   }
//     ]
//   }

// export var OutputsDto: OutputsDTO = {
//   AnalogOutputs : [
// //     {
// //       Id: 1,
// //       Name: 'Ventilator',
// //       Address: 1,
// //       LowLimit: 0,
// //       HightLimit: 30,
// //       Unit: '°C',
// //       Value: 15
// //     },
// //     {
// //       Id: 5,
// //       Name: 'Grijalica',
// //       Address: 2,
// //       LowLimit: 0,
// //       HightLimit: 100,
// //       Unit: '°C',
// //       Value: 12
// //     },
// //     {
// //       Id: 5,
// //       Name: 'Cisterna',
// //       Address: 3,
// //       LowLimit: 0,
// //       HightLimit: 100,
// //       Unit: 'l',
// //       Value: 99
// //     }
// //   ],
// //   DigitalOutputs : [
// //     {
// //       Id: 1,
// //       Name: 'Pumpa',
// //       Address: 7,
// //       Value: 1
// //     },
// //     {
// //       Id: 1,
// //       Name: 'Bazen',
// //       Address: 8,
// //       Value: 0
// //     },
// //     {
// //       Id: 1,
// //       Name: 'Grijalica',
// //       Address: 9,
// //       Value: 0
// //     }
//   ]
// }

// export var RtuDto: RTU[] = [
//   {
//     Id: 1,
//     LowLimit: 1,
//     HightLimit: 111,
//     Address: 1,
//   },
//   {
//     Id: 2,
//     LowLimit: 1,
//     HightLimit: 33,
//     Address: 2,
//   },
//   {
//     Id: 3,
//     LowLimit: 1,
//     HightLimit: 55,
//     Address: 3,
//   },
//   {
//     Id: 4,
//     LowLimit: 1,
//     HightLimit: 22,
//     Address: 4,
//   }
// ]
