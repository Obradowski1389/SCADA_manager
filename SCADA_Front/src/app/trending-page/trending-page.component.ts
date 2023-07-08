import { Component } from '@angular/core';
import { Alarm, AnalogInput, InputsDTO } from 'src/model/models';
import { TagService } from '../services/tag.service';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';

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

  tags: any[] = [];

  private hubConnection: HubConnection;

  constructor( private tagService: TagService){
    this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:7073/hub/simulation", {skipNegotiation:true, transport: signalR.HttpTransportType.WebSockets}).build();
  }

  ngOnInit(){
    this.tagService.getInputs().subscribe({
      next: (val: any) => {
        console.log(val);
        this.Inputs = val;
        this.Inputs.analogInputs.forEach(x => this.tags.push(x));
        this.Inputs.digitalInputs.forEach(x => this.tags.push(x));
        console.log(this.tags);

        this.tagService.startSimulation().subscribe({
          error: (err: any) => {
            console.log(err.error);
          }
        });
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    

    this.connectHub();
  }

  connectHub(){
    this.hubConnection.start()
      .then(() => {
        console.log('SignalR connection established');
      })
      .catch((error) => {
        console.error('SignalR connection error:', error);
      });

    // Handle received simulation data
    this.hubConnection.on('SendSimulationData', (data) => {
      this.handleSimulationData(data);
    });
  }

  handleSimulationData(data: any){
    console.log(data);
    for(let tag of this.tags){
      if(tag.id == data.id) tag.value=data.value;
    }
  }

  isAlarmActive(alarm: Alarm, input: AnalogInput) : boolean {
    if(!input.isOn) return false
    if(alarm.type == 0 && input.value < alarm.threshold) return true
    if(alarm.type == 1 && input.value > alarm.threshold) return true
    return false
  }

}
