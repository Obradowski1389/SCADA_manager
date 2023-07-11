// import { InputsDTO } from 'src/model/models';
// export var InputsDto: InputsDTO = {
//     analogInputs: [
//       {
//         id: 1,
//         name: 'Radijator',
//         driver: 'sin',
//         ioAddress: 1,
//         scanTime: 250,
//         alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 5,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 25,
//             Unit: '°C'
//           }
//         ],
//         isOn: true,
//         lowLimit: 0,
//         hightLimit: 50,
//         units: '°C',
//         value: 23
//       },
//       {
//         id: 2,
//         name: 'Cisterna',
//         driver: 'cos',
//         ioAddress: 2,
//         scanTime: 200,
//         alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 10,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 50,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 65,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 3,
//             Treshold: 80,
//             Unit: 'l'
//           }
//         ],
//         isOn: true,
//         lowLimit: 0,
//         hightLimit: 100,
//         units: 'l',
//         value: 82
//       },
//       {
//         id: 3,
//         name: 'Pumpa za vodu',
//         driver: 'cos',
//         ioAddress: 3,
//         scanTime: 200,
//         alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 120,
//             Unit: 'lps'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 150,
//             Unit: 'lps'
//           },
//           {
//             Type: 1,
//             Priority: 3,
//             Treshold: 180,
//             Unit: 'lps'
//           }
//         ],
//         isOn: true,
//         lowLimit: 100,
//         hightLimit: 200,
//         units: 'lps',
//         value: 78
//       },
//       {
//         id: 4,
//         name: 'Cisterna',
//         driver: 'cos',
//         ioAddress: 4,
//         scanTime: 200,
//         alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 10,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 50,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 65,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 3,
//             Treshold: 80,
//             Unit: 'l'
//           }
//         ],
//         isOn: false,
//         lowLimit: 0,
//         hightLimit: 100,
//         units: 'l',
//         value: 78
//       },
//       {
//         id: 5,
//         name: 'Ventilator',
//         driver: 'cos',
//         ioAddress: 5,
//         scanTime: 200,
//         alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 10,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 30,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 40,
//             Unit: '°C'
//           }
//         ],
//         isOn: true,
//         lowLimit: 0,
//         hightLimit: 45,
//         units: '°C',
//         value: 78
//       },
//       {
//         id: 6,
//         name: 'Kotao',
//         driver: 'cos',
//         ioAddress: 6,
//         scanTime: 200,
//         alarms: [
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 45,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 55,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 75,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 3,
//             Treshold: 85,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 3,
//             Treshold: 96,
//             Unit: '°C'
//           }
//         ],
//         isOn: true,
//         lowLimit: 0,
//         hightLimit: 100,
//         units: '°C',
//         value: 86
//       },
//       {
//         id: 7,
//         name: 'Radijator',
//         driver: 'sin',
//         ioAddress: 7,
//         scanTime: 250,
//         alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 5,
//             Unit: '°C'
//           }
//         ],
//         isOn: true,
//         lowLimit: 0,
//         hightLimit: 50,
//         units: '°C',
//         value: 4
//       },
//       {
//         id: 8,
//         name: 'Kotao',
//         driver: 'cos',
//         ioAddress: 8,
//         scanTime: 200,
//         alarms: [
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 45,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 55,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 75,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 3,
//             Treshold: 85,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 3,
//             Treshold: 96,
//             Unit: '°C'
//           }
//         ],
//         isOn: false,
//         lowLimit: 0,
//         HightLimit: 100,

//         Unit: '°C',
//         Value: 86
//       },
//       {
//         Id: 9,
//         Name: 'Ventilator',
//         Driver: 'cos',
//         Address: 9,
//         ScanTime: 200,
//         Alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 10,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 30,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 40,
//             Unit: '°C'
//           }
//         ],
//         ScanOn: true,
//         LowLimit: 0,
//         HightLimit: 45,
//         Unit: '°C',
//         Value: 25
//       },
//       {
//         Id: 10,
//         Name: 'Bazen',
//         Driver: 'cos',
//         Address: 10,
//         ScanTime: 200,
//         Alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 10,
//             Unit: 'l'
//           },
//           {
//             Type: 0,
//             Priority: 3,
//             Treshold: 5,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 30,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 40,
//             Unit: 'l'
//           }
//         ],
//         ScanOn: true,
//         LowLimit: 0,
//         HightLimit: 50,
//         Unit: 'l',
//         Value: 4
//       },
//       {
//         Id: 11,
//         Name: 'Ventilator',
//         Driver: 'cos',
//         Address: 11,
//         ScanTime: 200,
//         Alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 10,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 30,
//             Unit: '°C'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 40,
//             Unit: '°C'
//           }
//         ],
//         ScanOn: false,
//         LowLimit: 0,
//         HightLimit: 45,
//         Unit: '°C',
//         Value: 25
//       },
//       {
//         Id: 12,
//         Name: 'Cisterna',
//         Driver: 'cos',
//         Address: 12,
//         ScanTime: 200,
//         Alarms: [
//           {
//             Type: 0,
//             Priority: 1,
//             Treshold: 10,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 1,
//             Treshold: 50,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 2,
//             Treshold: 65,
//             Unit: 'l'
//           },
//           {
//             Type: 1,
//             Priority: 3,
//             Treshold: 80,
//             Unit: 'l'
//           }
//         ],
//         ScanOn: true,
//         LowLimit: 0,
//         HightLimit: 100,
//         Unit: 'l',
//         Value: 82
//       }
//     ],
//     digitalInputs: [
//       {
//         Id: 1,
//         Name: 'Peć',
//         Driver: 'cos',
//         Address: 13,
//         ScanTime: 300,
//         ScanOn: true
//       },
//       {
//         Id: 1,
//         Name: 'Plin',
//         Driver: 'cos',
//         Address: 14,
//         ScanTime: 300,
//         ScanOn: false
//       },
//       {
//         Id: 1,
//         Name: 'Ventilator',
//         Driver: 'cos',
//         Address: 15,
//         ScanTime: 300,
//         ScanOn: true
//       },
//       {
//         Id: 1,
//         Name: 'Pumpa za vodu',
//         Driver: 'cos',
//         Address: 16,
//         ScanTime: 300,
//         ScanOn: true
//       }
//     ]
//   }