import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
// import { OutputsDto } from 'src/model/data';
import { AnalogOutput, DigitalOutput, OutputsDTO } from 'src/model/models';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-outputs-manage',
  templateUrl: './outputs-manage.component.html',
  styleUrls: ['./outputs-manage.component.css']
})
export class OutputsManageComponent {
  constructor(private dialog: MatDialog, private tagService: TagService) {}
  //globals
  isEdit: boolean = false
  Outputs: OutputsDTO = {
    analogOutputs: [],
    digitalOutputs: []
  }
  showDeleteIconAnalog: boolean[] = Array(this.Outputs.analogOutputs.length).fill(false)
  showDeleteIconDigital: boolean[] = Array(this.Outputs.digitalOutputs.length).fill(false)

  ngOnInit(){
    this.tagService.getOutputs().subscribe({
      next: (val: any) => {
        this.Outputs = val;
      },
      error: (err: any) => {
        console.log(err.error);
      }
    })
  }

  //view
  deleteAnalog(input: AnalogOutput){
    this.tagService.deleteTag(input.id).subscribe({
      next: (val: any) =>{
        const index = this.Outputs.analogOutputs.indexOf(input)
        this.Outputs.analogOutputs.splice(index, 1)
      },
      error: (val: any) => {
        console.log(val.error);
      }
    })
    
  }

  deleteDigital(input: DigitalOutput){
    this.tagService.deleteTag(input.id).subscribe({
      next: (val: any) =>{
        const index = this.Outputs.digitalOutputs.indexOf(input)
        this.Outputs.digitalOutputs.splice(index, 1)
      },
      error: (val: any) => {
        console.log(val.error);
      }
    })
    
  }

  changeValue(output: any): void {
    const dialogRef = this.dialog.open(ChangeOutputDialog, { data: output.Value });
    dialogRef.afterClosed().subscribe(result => {
        if (result == null) {
          return
        }
        this.tagService.addOutputValue(output.ioAddress, result).subscribe({
          next: (val: any) =>{
            console.log(result);
            output.value = result;
          },
          error: (error: any)=> {
            console.log(error.error);
            alert(error)
          } 
        });
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
    for(var i = 11; i < 21; i++){
      if (this.Outputs.analogOutputs.some((input) => input.ioAddress == i.toString())) continue
      if(this.Outputs.digitalOutputs.some((input) => input.ioAddress == i.toString())) continue
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
        ioAddress: this.address?.toString() ?? "0",
        lowLimit: this.lowLimit ?? 0,
        highLimit: this.hightLimit ?? 0,
        units:this.unit,
        value: this.value ?? 0
      }
      this.tagService.addAnalogOutput(outputA).subscribe({
        next: (val: any) =>{
          this.Outputs.analogOutputs.push(outputA)

        },
        error: (error: any)=> {
          console.log(error.error);
        } 
      })
    }
    else{
      var outputD: DigitalOutput = {
        id: 1,
        name: this.name,
        ioAddress: this.address?.toString() ?? "0",
        value: this.value ?? 0
      }

      this.tagService.addDigitalOutput(outputD).subscribe({
        next: (val: any) =>{
          this.Outputs.digitalOutputs.push(outputD)

        },
        error: (error: any)=> {
          console.log(error.error);
        } 
      })
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
