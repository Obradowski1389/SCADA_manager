import { Component } from '@angular/core';
import { InputsDto } from 'src/model/data';
import { Alarm, AnalogInput, InputsDTO } from 'src/model/models';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css']
})
export class TrendingPageComponent {

  isAlarmActive(alarm: Alarm, input: AnalogInput) : boolean {
    if(!input.ScanOn) return false
    if(alarm.Type == 0 && input.Value < alarm.Treshold) return true
    if(alarm.Type == 1 && input.Value > alarm.Treshold) return true
    return false
  }

  Inputs: InputsDTO = InputsDto
}
