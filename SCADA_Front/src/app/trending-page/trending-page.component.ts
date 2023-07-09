import { Component, OnInit } from '@angular/core';
import { Alarm, AnalogInput, DigitalInput, InputsDTO } from 'src/model/models';
import { TagService } from '../services/tag.service';
import { NumberRangePipe } from '../number-range.pipe';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css']
})
export class TrendingPageComponent implements OnInit{
  Inputs: InputsDTO = {
    analogInputs: [],
    digitalInputs: []
  };

  tags: any[] = [];

  constructor( private tagService: TagService){
    this.connectHub();
  }

  ngOnInit(){
    this.tagService.getInputs().subscribe({
      next: (val: any) => {
        console.log(val);
        this.Inputs = val;
        this.Inputs.analogInputs.forEach(x => this.tags.push(x));
        this.Inputs.digitalInputs.forEach(x => this.tags.push(x));
        console.log(this.tags);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    
  }

  ngOnDestroy(){
    this.tagService.stopConnection();
  }

  connectHub(){
    this.tagService.startConnection()
      .then(() => {
        console.log('SignalR Simulation connection established');
      })
      .catch((error) => {
        console.error('SignalR Simulation connection error:', error);
      });
    // Handle received simulation data
    // Handle received simulation data
    this.tagService.getHubConnection().on('SendSimulationData', (data) => {
      this.handleSimulationData(data);
    });

    this.tagService.startRTU()
      .then(() => {
        console.log("SignalR RTU connection established");
      }).catch((error) => {
        console.error('SignalR RTU connection error:', error);
      });

    this.tagService.getRTU().on("SendRTUData", (data) => {
      this.handleRTU(data);
    });
  }

  handleSimulationData(data: any){
    console.log(data);
    for(let tag of this.tags){
      if(tag.ioAddress == data.address) tag.value=data.value;
    }
  }

  handleRTU(data: any){
    for (let tag of this.tags){
      if(tag.ioAddress == data.ioAddress) tag.value = data.value;
    }
  }

  isAlarmActive(alarm: Alarm, input: AnalogInput) : boolean {
    if(!input.isOn) return false
    if(alarm.type == 0 && input.value < alarm.threshold) return true
    if(alarm.type == 1 && input.value > alarm.threshold) return true
    return false
  }

  toggleScan(input: AnalogInput | DigitalInput){
    if(input.isOn){
      this.tagService.toggleScan(false, input.id).subscribe({
        next: (val: any) => {
          input.isOn = false;
        },
        error: (error: any) => {
          console.log(error.error);
        }
      })
    }else{
      this.tagService.toggleScan(true, input.id).subscribe({
        next:(val: any) => {
          input.isOn = true;
        },
        error: (error: any) => {
          console.log(error.error);
        }
      })
    }
  }

}
