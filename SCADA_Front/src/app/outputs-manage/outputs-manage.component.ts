import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
// import { OutputsDto } from 'src/model/data';
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
  Outputs: OutputsDTO = {
    analogOutputs: [],
    digitalOutputs: []
  }
  showDeleteIconAnalog: boolean[] = Array(this.Outputs.analogOutputs.length).fill(false)
  showDeleteIconDigital: boolean[] = Array(this.Outputs.digitalOutputs.length).fill(false)

  //view
  deleteAnalog(input: AnalogOutput){
    const index = this.Outputs.analogOutputs.indexOf(input)
    this.Outputs.analogOutputs.splice(index, 1)
  }

  deleteDigital(input: DigitalOutput){
    const index = this.Outputs.digitalOutputs.indexOf(input)
    this.Outputs.digitalOutputs.splice(index, 1)
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
      if (this.Outputs.analogOutputs.some((input) => input.ioAddress == i)) continue
      if(this.Outputs.digitalOutputs.some((input) => input.ioAddress == i)) continue
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
        id: 0,
        name: this.name,
        ioAddress: this.address ?? 0,
        lowLimit: this.lowLimit ?? 0,
        highLimit: this.hightLimit ?? 0,
        units:this.unit,
        value: this.value ?? 0
      }
      this.Outputs.analogOutputs.push(outputA)
    }
    else{
      var outputD: DigitalOutput = {
        id: 1,
        name: this.name,
        ioAddress: this.address ?? 0,
        value: this.value ?? 0
      }
      this.Outputs.digitalOutputs.push(outputD)
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
