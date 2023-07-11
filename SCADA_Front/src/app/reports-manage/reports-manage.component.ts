import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TagService } from '../services/tag.service';
import { saveAs } from 'file-saver';
import { InputsDTO } from 'src/model/models';


@Component({
  selector: 'app-reports-manage',
  templateUrl: './reports-manage.component.html',
  styleUrls: ['./reports-manage.component.css']
})
export class ReportsManageComponent {

  constructor(private tagService:TagService) {}

  alarmsDate : boolean = false;
  alarmPriority: boolean = false;
  allTag: boolean = false;
  lastA: boolean = false;
  lastD: boolean = false;
  allId: boolean = false;

  alarmPriorityValue: string = "1";
  tagId: number = 1;

  rangeAlarms = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });
  rangeTag = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  alarmsDateRange(){
    this.alarmsDate = true;
    this.alarmPriority = false;
    this.allTag = false;
    this.allId = false;
    this.lastA = false;
    this.lastD = false;
  }

  alarmsPriority(){
    this.alarmsDate = false;
    this.alarmPriority = true;
    this.allTag = false;
    this.allId = false;
    this.lastA = false;
    this.lastD = false;
  }

  tagValuesRange() {
    this.alarmsDate = false;
    this.alarmPriority = false;
    this.allTag = true;
    this.allId = false;
    this.lastA = false;
    this.lastD = false;
  }

  lastAnalog(){
    this.alarmsDate = false;
    this.alarmPriority = false;
    this.allTag = false;
    this.allId = false;
    this.lastA = true;
    this.lastD = false;
  }

  lastDigital(){
    this.alarmsDate = false;
    this.alarmPriority = false;
    this.allTag = false;
    this.allId = false;
    this.lastA = false;
    this.lastD = true;
  }

  tagValuedID(){
    this.alarmsDate = false;
    this.alarmPriority = false;
    this.allTag = false;
    this.allId = true;
    this.lastA = false;
    this.lastD = false;
  }

  generateReport(){
    if(this.alarmsDate){
      const startDate = this.rangeAlarms.value.startDate;
      const endDate = this.rangeAlarms.value.endDate;
      if(startDate != null && endDate != null){
        this.tagService.alarmsRange(startDate!, endDate!).subscribe({
          next: (val : any) =>{
            console.log(val);
            this.downloadFile(val, "Alarms-"+startDate.toISOString()+"-"+endDate.toISOString() +".csv");
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }
    }else if(this.alarmPriority){
      this.tagService.alarmsPriority(parseInt(this.alarmPriorityValue)).subscribe({
        next:(val:any) => {
          console.log(val);
          this.downloadFile(val, "Alarms-"+this.alarmPriorityValue+".csv");
        },
        error: (val: any) => {
          console.log(val.error);
        }
      })
    }else if(this.allTag){
      const values = this.rangeTag.value;
      if(values.start != null && values.end != null){
        this.tagService.allTag(values.start, values.end).subscribe({
          next:(val:any) => {
            console.log(val);
          this.downloadInputs(val, "AllTags.csv");

          },
          error: (val: any) => {
            console.log(val.error);
          }
        });
      }
    }else if(this.lastA){
      this.tagService.lastAnalog().subscribe({
        next:(val:any) => {
          console.log(val);
          this.downloadFile(val, "LastAnalog-"+new Date().toISOString()+".csv")
        },
        error: (val: any) => {
          console.log(val.error);
        }
      })
    }else if(this.lastD){
      this.tagService.lastDigital().subscribe({
        next:(val:any) => {
          console.log(val);
          this.downloadFile(val, "LastDigital-"+new Date().toISOString()+".csv")

        },
        error: (val: any) => {
          console.log(val.error);
        }
      })
    }else{
      this.tagService.allByID(this.tagId).subscribe({
        next:(val:any) => {
          console.log(val);
          this.downloadFile(val, "Tag-"+this.tagId+"-"+new Date().toISOString()+".csv")

        },
        error: (val: any) => {
          console.log(val.error);
        }
      })
    }
  }

  downloadInputs(data: any, fName: string): void {
    const flattenObject = (obj: any): any => {
      const result: { [key: string]: any } = {};

      const flatten = (value: any, prefix = ''): void => {
        if (typeof value === 'object' && value !== null) {
          if (Array.isArray(value)) {
            value.forEach((item, index) => {
              flatten(item, `${prefix}${index}.`);
            });
          } else {
            Object.entries(value).forEach(([key, val]) => {
              flatten(val, `${prefix}${key}.`);
            });
          }
        } else {
          result[prefix.slice(0, -1)] = value;
        }
      };

      flatten(obj);
      return result;
    };

    const replacer = (key: any, value: any) => (value === null ? '' : value);

    // Flatten analogInputs
    const flattenedAnalogInputs = data.inputsValues.map((input:any) => flattenObject(input));
    const analogHeader = Object.keys(flattenedAnalogInputs[0] || {});
    const analogCsv = flattenedAnalogInputs.map((input:any) =>
      analogHeader.map((fieldName) => JSON.stringify(input[fieldName], replacer)).join(',')
    );

    // Flatten digitalInputs
    const flattenedDigitalInputs = data.outputsValues.map((input:any) => flattenObject(input));
    const digitalHeader = Object.keys(flattenedDigitalInputs[0] || {});
    const digitalCsv = flattenedDigitalInputs.map((input:any) =>
      digitalHeader.map((fieldName) => JSON.stringify(input[fieldName], replacer)).join(',')
    );

    // Combine the analog and digital CSV arrays
    const csv = [];
    if (analogCsv.length > 0) {
      csv.push(analogHeader.join(','));
      csv.push(...analogCsv);
    }
    if (digitalCsv.length > 0) {
      csv.push(digitalHeader.join(','));
      csv.push(...digitalCsv);
    }
    const csvArray = csv.join('\r\n');

    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fName;
    link.click();
    window.URL.revokeObjectURL(url);
    link.remove();
  }

  downloadFile(data: any[], fName: string): void {
    const flattenObject = (obj: any): any => {
      const result: { [key: string]: any } = {}; // Define the type of 'result' as an indexable object

      const flatten = (value: any, prefix = ''): void => {
        if (typeof value === 'object' && value !== null) {
          if (Array.isArray(value)) {
            value.forEach((item, index) => {
              flatten(item, `${prefix}${index}.`);
            });
          } else {
            Object.entries(value).forEach(([key, val]) => {
              flatten(val, `${prefix}${key}.`);
            });
          }
        } else {
          result[prefix.slice(0, -1)] = value;
        }
      };

      flatten(obj);
      return result;
    };

    const replacer = (key: any, value: any) => (value === null ? '' : value);
    const flattenedData = data.map((row) => flattenObject(row));
    const header = Object.keys(flattenedData[0]);
    const csv = flattenedData.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');

    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fName;
    link.click();
    window.URL.revokeObjectURL(url);
    link.remove();
  }

}
