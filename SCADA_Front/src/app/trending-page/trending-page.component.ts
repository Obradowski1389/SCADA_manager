import { Component } from '@angular/core';
import { Alarm, AnalogInput, InputsDTO } from 'src/model/models';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css']
})
export class TrendingPageComponent {
  Inputs: InputsDTO = {
    analogInputs: [],
    digitalInputs: []
  };

  constructor( private tagService: TagService){}

  ngOnInit(){
    this.tagService.getInputs().subscribe({
      next: (val: any) => {
        console.log(val);
        this.Inputs = val;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  isAlarmActive(alarm: Alarm, input: AnalogInput) : boolean {
    if(!input.isOn) return false
    if(alarm.Type == 0 && input.value < alarm.Treshold) return true
    if(alarm.Type == 1 && input.value > alarm.Treshold) return true
    return false
  }

}
