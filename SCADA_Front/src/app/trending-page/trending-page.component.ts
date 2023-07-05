import { Component } from '@angular/core';
import { Alarm, AnalogInput, InputsDTO } from 'src/model/models';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css']
})
export class TrendingPageComponent {

  isAlarmActive(alarm: Alarm, input: AnalogInput) : boolean {
    if(!input.ScanOn) return false
    if(alarm.Type == 0 && input.Value < alarm.Treshold) return true
    if(alarm.Type == 1 && input.Value > alarm.Treshold) return true
    return false
  }

  Inputs: InputsDTO = {
    AnalogInputs: [
      {
        Id: 1,
        Name: 'Radijator',
        Driver: 'sin',
        Address: 1,
        ScanTime: 250,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 5,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 25,
            Unit: '°C'
          }
        ],
        ScanOn: true,
        LowLimit: 0,
        HightLimit: 50,
        Unit: '°C',
        Value: 23
      },
      {
        Id: 2,
        Name: 'Cisterna',
        Driver: 'cos',
        Address: 2,
        ScanTime: 200,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 10,
            Unit: 'l'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 50,
            Unit: 'l'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 65,
            Unit: 'l'
          },
          {
            Type: 1,
            Priority: 3,
            Treshold: 80,
            Unit: 'l'
          }
        ],
        ScanOn: true,
        LowLimit: 0,
        HightLimit: 100,
        Unit: 'l',
        Value: 82
      },
      {
        Id: 3,
        Name: 'Pumpa za vodu',
        Driver: 'cos',
        Address: 3,
        ScanTime: 200,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 120,
            Unit: 'lps'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 150,
            Unit: 'lps'
          },
          {
            Type: 1,
            Priority: 3,
            Treshold: 180,
            Unit: 'lps'
          }
        ],
        ScanOn: true,
        LowLimit: 100,
        HightLimit: 200,
        Unit: 'lps',
        Value: 78
      },
      {
        Id: 4,
        Name: 'Cisterna',
        Driver: 'cos',
        Address: 4,
        ScanTime: 200,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 10,
            Unit: 'l'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 50,
            Unit: 'l'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 65,
            Unit: 'l'
          },
          {
            Type: 1,
            Priority: 3,
            Treshold: 80,
            Unit: 'l'
          }
        ],
        ScanOn: false,
        LowLimit: 0,
        HightLimit: 100,
        Unit: 'l',
        Value: 78
      },
      {
        Id: 5,
        Name: 'Ventilator',
        Driver: 'cos',
        Address: 5,
        ScanTime: 200,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 10,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 30,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 40,
            Unit: '°C'
          }
        ],
        ScanOn: true,
        LowLimit: 0,
        HightLimit: 45,
        Unit: '°C',
        Value: 78
      },
      {
        Id: 6,
        Name: 'Kotao',
        Driver: 'cos',
        Address: 6,
        ScanTime: 200,
        Alarms: [
          {
            Type: 1,
            Priority: 1,
            Treshold: 45,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 55,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 75,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 3,
            Treshold: 85,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 3,
            Treshold: 96,
            Unit: '°C'
          }
        ],
        ScanOn: true,
        LowLimit: 0,
        HightLimit: 100,
        Unit: '°C',
        Value: 86
      },
      {
        Id: 7,
        Name: 'Radijator',
        Driver: 'sin',
        Address: 7,
        ScanTime: 250,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 5,
            Unit: '°C'
          }
        ],
        ScanOn: true,
        LowLimit: 0,
        HightLimit: 50,
        Unit: '°C',
        Value: 4
      },
      {
        Id: 8,
        Name: 'Kotao',
        Driver: 'cos',
        Address: 8,
        ScanTime: 200,
        Alarms: [
          {
            Type: 1,
            Priority: 1,
            Treshold: 45,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 55,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 75,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 3,
            Treshold: 85,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 3,
            Treshold: 96,
            Unit: '°C'
          }
        ],
        ScanOn: false,
        LowLimit: 0,
        HightLimit: 100,
        Unit: '°C',
        Value: 86
      },
      {
        Id: 9,
        Name: 'Ventilator',
        Driver: 'cos',
        Address: 9,
        ScanTime: 200,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 10,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 30,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 40,
            Unit: '°C'
          }
        ],
        ScanOn: true,
        LowLimit: 0,
        HightLimit: 45,
        Unit: '°C',
        Value: 25
      },
      {
        Id: 10,
        Name: 'Bazen',
        Driver: 'cos',
        Address: 10,
        ScanTime: 200,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 10,
            Unit: 'l'
          },
          {
            Type: 0,
            Priority: 3,
            Treshold: 5,
            Unit: 'l'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 30,
            Unit: 'l'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 40,
            Unit: 'l'
          }
        ],
        ScanOn: true,
        LowLimit: 0,
        HightLimit: 50,
        Unit: 'l',
        Value: 4
      },
      {
        Id: 11,
        Name: 'Ventilator',
        Driver: 'cos',
        Address: 11,
        ScanTime: 200,
        Alarms: [
          {
            Type: 0,
            Priority: 1,
            Treshold: 10,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 1,
            Treshold: 30,
            Unit: '°C'
          },
          {
            Type: 1,
            Priority: 2,
            Treshold: 40,
            Unit: '°C'
          }
        ],
        ScanOn: false,
        LowLimit: 0,
        HightLimit: 45,
        Unit: '°C',
        Value: 25
      },
      // {
      //   Id: 12,
      //   Name: 'Cisterna',
      //   Driver: 'cos',
      //   Address: 12,
      //   ScanTime: 200,
      //   Alarms: [
      //     {
      //       Type: 0,
      //       Priority: 1,
      //       Treshold: 10,
      //       Unit: 'l'
      //     },
      //     {
      //       Type: 1,
      //       Priority: 1,
      //       Treshold: 50,
      //       Unit: 'l'
      //     },
      //     {
      //       Type: 1,
      //       Priority: 2,
      //       Treshold: 65,
      //       Unit: 'l'
      //     },
      //     {
      //       Type: 1,
      //       Priority: 3,
      //       Treshold: 80,
      //       Unit: 'l'
      //     }
      //   ],
      //   ScanOn: true,
      //   LowLimit: 0,
      //   HightLimit: 100,
      //   Unit: 'l',
      //   Value: 82
      // },
      // {
      //   Id: 12,
      //   Name: 'Cisterna',
      //   Driver: 'cos',
      //   Address: 12,
      //   ScanTime: 200,
      //   Alarms: [
      //     {
      //       Type: 0,
      //       Priority: 1,
      //       Treshold: 10,
      //       Unit: 'l'
      //     },
      //     {
      //       Type: 1,
      //       Priority: 1,
      //       Treshold: 50,
      //       Unit: 'l'
      //     },
      //     {
      //       Type: 1,
      //       Priority: 2,
      //       Treshold: 65,
      //       Unit: 'l'
      //     },
      //     {
      //       Type: 1,
      //       Priority: 3,
      //       Treshold: 80,
      //       Unit: 'l'
      //     }
      //   ],
      //   ScanOn: true,
      //   LowLimit: 0,
      //   HightLimit: 100,
      //   Unit: 'l',
      //   Value: 82
      // }
    ],
    DigitalInputs: []
  }

}
