import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TagService } from '../services/tag.service';

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
      if(this.rangeAlarms.value.startDate != null && this.rangeAlarms.value.endDate != null){
        this.tagService.alarmsRange(this.rangeAlarms.value.startDate!, this.rangeAlarms.value.endDate!).subscribe({
          next: (val : any) =>{
            console.log(val);
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
        },
        error: (val: any) => {
          console.log(val.error);
        }
      })
    }else if(this.lastD){
      this.tagService.lastDigital().subscribe({
        next:(val:any) => {
          console.log(val);
        },
        error: (val: any) => {
          console.log(val.error);
        }
      })
    }else{
      this.tagService.allByID(this.tagId).subscribe({
        next:(val:any) => {
          console.log(val);
        },
        error: (val: any) => {
          console.log(val.error);
        }
      })
    }
  }

}
