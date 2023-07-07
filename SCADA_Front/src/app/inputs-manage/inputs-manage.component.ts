import { Component } from '@angular/core';
import { InputsDto } from 'src/model/data';
import { Alarm, InputsDTO } from 'src/model/models';

@Component({
  selector: 'app-inputs-manage',
  templateUrl: './inputs-manage.component.html',
  styleUrls: ['./inputs-manage.component.css']
})
export class InputsManageComponent {
  isEdit: boolean = true
  isAnalog: boolean = true
  Inputs: InputsDTO = InputsDto
  newAlarms: Alarm[] = [
    {
    Type: 0,
    Priority: 1,
    Treshold: 20,
    Unit: 'C'
    },
    {
      Type: 0,
      Priority: 1,
      Treshold: 34,
      Unit: 'C'
      }
  ]
}
