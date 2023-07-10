import { Component } from '@angular/core';
import { RtuDto } from 'src/model/data';
import { RTU } from 'src/model/models';

@Component({
  selector: 'app-rtu-manage',
  templateUrl: './rtu-manage.component.html',
  styleUrls: ['./rtu-manage.component.css']
})
export class RtuManageComponent {
  //globals
  isEdit: boolean = false
  RTUs: RTU[] = RtuDto
  showDeleteIcon: boolean[] = Array(this.RTUs.length).fill(false)

  //view
  deleteRTU(rtu: RTU){
    const index = this.RTUs.indexOf(rtu)
    this.RTUs.splice(index, 1)
  }

  //add inpts
  isAnalog: boolean = true
  //form
  address: number|undefined = undefined 
  lowLimit: number|undefined = undefined
  hightLimit: number|undefined = undefined
  
  getAddresses() {
    var addresses: number[] = []
    for(var i = 1; i < 21; i++) addresses.push(i)
    return addresses
  }

  isFormValid(): boolean {
    if(this.address == undefined || this.lowLimit == undefined || this.hightLimit == undefined) {
      alert('Some field is empty')
      return false
    }
    return true
  }

  restartForm(){
    this.address = undefined 
    this.lowLimit = undefined
    this.hightLimit = undefined
    this.isEdit = false
  }

  createRTU() {
    if(!this.isFormValid()) return
    var outputA: RTU = {
      Id: 0,
      Address: this.address ?? 0,
      LowLimit: this.lowLimit ?? 0,
      HightLimit: this.hightLimit ?? 0
    }
    this.RTUs.push(outputA)
    this.restartForm()
  }
}
