import { Component } from '@angular/core';
import { InputsDTO } from 'src/model/models';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css']
})
export class TrendingPageComponent {

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
        Value: 78
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
            Priority: 1,
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
            Priority: 1,
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
      }
    ],
    DigitalInputs: []
  }

}
