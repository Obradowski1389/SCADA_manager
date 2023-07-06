import { Component } from '@angular/core';
import { InputsDto } from 'src/model/data';
import { InputsDTO } from 'src/model/models';

@Component({
  selector: 'app-inputs-manage',
  templateUrl: './inputs-manage.component.html',
  styleUrls: ['./inputs-manage.component.css']
})
export class InputsManageComponent {
  Inputs: InputsDTO = InputsDto
}
