import { Component } from '@angular/core';
import { OutputsDto } from 'src/model/data';
import { OutputsDTO } from 'src/model/models';

@Component({
  selector: 'app-outputs-manage',
  templateUrl: './outputs-manage.component.html',
  styleUrls: ['./outputs-manage.component.css']
})
export class OutputsManageComponent {
  //globals
  isEdit: boolean = false
  Outputs: OutputsDTO = OutputsDto
  showDeleteIconAnalog: boolean[] = Array(this.Outputs.AnalogOutputs.length).fill(false)
  showDeleteIconDigital: boolean[] = Array(this.Outputs.DigitalOutputs.length).fill(false)

  //add inpts
  isAnalog: boolean = true

  getAddresses(): number[]{
    var addresses = []
    for(var i = 1; i < 21; i++){
      if (this.Outputs.AnalogOutputs.some((input) => input.Address == i)) continue
      if(this.Outputs.DigitalOutputs.some((input) => input.Address == i)) continue
      addresses.push(i)
    }
    return addresses
  }
}
