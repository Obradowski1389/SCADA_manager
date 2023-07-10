import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OutputsDto } from 'src/model/data';
import { AnalogOutput, DigitalOutput, OutputsDTO } from 'src/model/models';

@Component({
  selector: 'app-outputs-manage',
  templateUrl: './outputs-manage.component.html',
  styleUrls: ['./outputs-manage.component.css']
})
export class OutputsManageComponent {
  constructor(private dialog: MatDialog) {}
  //globals
  isEdit: boolean = false
  Outputs: OutputsDTO = OutputsDto
  showDeleteIconAnalog: boolean[] = Array(this.Outputs.AnalogOutputs.length).fill(false)
  showDeleteIconDigital: boolean[] = Array(this.Outputs.DigitalOutputs.length).fill(false)

  //view
  deleteAnalog(input: AnalogOutput){
    const index = this.Outputs.AnalogOutputs.indexOf(input)
    this.Outputs.AnalogOutputs.splice(index, 1)
  }

  deleteDigital(input: DigitalOutput){
    const index = this.Outputs.DigitalOutputs.indexOf(input)
    this.Outputs.DigitalOutputs.splice(index, 1)
  }

  changeValue(output: any): void {
    const dialogRef = this.dialog.open(ChangeOutputDialog, { data: output.Value });
    dialogRef.afterClosed().subscribe(result => {
        output.Value = result
    })
  }

  //add inpts
  isAnalog: boolean = true
  //form
  name: string = ''
  address: number|undefined = undefined 
  lowLimit: number|undefined = undefined
  hightLimit: number|undefined = undefined
  value: number|undefined = undefined
  unit: string = ''

  getAddresses(): number[]{
    var addresses = []
    for(var i = 1; i < 21; i++){
      if (this.Outputs.AnalogOutputs.some((input) => input.Address == i)) continue
      if(this.Outputs.DigitalOutputs.some((input) => input.Address == i)) continue
      addresses.push(i)
    }
    return addresses
  }

  isFormValid(): boolean {
    if(this.name == '' || this.address == undefined || this.value == undefined) {
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
    this.lowLimit = undefined
    this.hightLimit = undefined
    this.value = undefined
    this.unit = ''
    this.isEdit = false
  }

  createOutput() {
    if(!this.isFormValid()) return
    if(this.isAnalog) {
      var outputA: AnalogOutput = {
        Id: 0,
        Name: this.name,
        Address: this.address ?? 0,
        LowLimit: this.lowLimit ?? 0,
        HightLimit: this.hightLimit ?? 0,
        Unit:this.unit,
        Value: this.value ?? 0
      }
      this.Outputs.AnalogOutputs.push(outputA)
    }
    else{
      var outputD: DigitalOutput = {
        Id: 1,
        Name: this.name,
        Address: this.address ?? 0,
        Value: this.value ?? 0
      }
      this.Outputs.DigitalOutputs.push(outputD)
    }
    this.restartForm()
  }
}

@Component({
  selector: 'reject-dialog',
  templateUrl: 'change-output-dialog.html',
})
export class ChangeOutputDialog {
  value: number = 0

  constructor(
    public dialogRef: MatDialogRef<ChangeOutputDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.value = data
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  onYesClick() {
    this.dialogRef.close(this.value)
  }
}
