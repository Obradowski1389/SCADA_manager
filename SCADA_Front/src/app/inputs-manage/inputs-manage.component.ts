import { Component } from '@angular/core';
import { InputsDto } from 'src/model/data';
import { Alarm, AnalogInput, DigitalInput, InputsDTO } from 'src/model/models';

@Component({
  selector: 'app-inputs-manage',
  templateUrl: './inputs-manage.component.html',
  styleUrls: ['./inputs-manage.component.css']
})
export class InputsManageComponent {
  //globals
  isEdit: boolean = false
  Inputs: InputsDTO = InputsDto
  showDeleteIconAnalog: boolean[] = Array(this.Inputs.AnalogInputs.length).fill(false)
  showDeleteIconDigital: boolean[] = Array(this.Inputs.DigitalInputs.length).fill(false)

  //view inputs
  deleteAnalog(input: AnalogInput){
    const index = this.Inputs.AnalogInputs.indexOf(input)
    this.Inputs.AnalogInputs.splice(index, 1)
  }

  deleteDigital(input: DigitalInput){
    const index = this.Inputs.DigitalInputs.indexOf(input)
    this.Inputs.DigitalInputs.splice(index, 1)
  }

  switch(input: any){
    input.ScanOn = !input.ScanOn
  }

  //add inpts
  newAlarms: Alarm[] = []
  isAnalog: boolean = true
  //form
  name: string = ''
  address: number|undefined = undefined 
  scanTime: number|undefined = undefined
  driver: string = 'sin'
  lowLimit: number|undefined = undefined
  hightLimit: number|undefined = undefined
  unit: string = ''
  treshold: number|undefined = undefined
  alarmType: string = '0'
  alarmPriority: string = '1'

  getAddresses(): number[]{
    var addresses = []
    for(var i = 1; i < 21; i++){
      if (this.Inputs.AnalogInputs.some((input) => input.Address == i)) continue
      if(this.Inputs.DigitalInputs.some((input) => input.Address == i)) continue
      addresses.push(i)
    }
    return addresses
  }

  addAlarm(){
    if(this.treshold == undefined) {
      alert('Treashold are empty')
      return
    }
    this.newAlarms.push(
      {
        Type: parseInt(this.alarmType),
        Priority: parseInt(this.alarmPriority),
        Treshold: this.treshold,
        Unit: this.unit
      }
    )
  }

  isFormValid(): boolean {
    if(this.name == '' || this.address == undefined || this.scanTime == undefined) {
      alert('Some field is empty')
      return false
    }
    if(this.isAnalog && (this.lowLimit == undefined || this.hightLimit == undefined || this.unit == '')) {
      alert('Some field is empty')
      return false
    }
    return true
  }

  restartForm(){
    this.name = ''
    this.address = undefined 
    this.scanTime = undefined
    this.driver = 'sin'
    this.lowLimit = undefined
    this.hightLimit = undefined
    this.unit = ''
    this.treshold = undefined
    this.alarmType = '0'
    this.alarmPriority = '1'
    this.newAlarms = []
    this.isEdit = false
  }

  createInput() {
    if(!this.isFormValid()) return
    if(this.isAnalog) {
      var inputA: AnalogInput = {
        Id: 0,
        Name: this.name,
        Driver: this.driver,
        Address: this.address ?? 0,
        ScanTime: this.scanTime ?? 0,
        Alarms: this.newAlarms,
        ScanOn: true,
        LowLimit: this.lowLimit ?? 0,
        HightLimit: this.hightLimit ?? 0,
        Unit:this.unit,
        Value:0
      }
      this.Inputs.AnalogInputs.push(inputA)
    }
    else{
      var inputD: DigitalInput = {
        Id: 1,
        Name: this.name,
        Driver: this.driver,
        Address: this.address ?? 0,
        ScanTime: this.scanTime ?? 0,
        ScanOn: true
      }
      this.Inputs.DigitalInputs.push(inputD)
    }
    this.restartForm()
  }

}