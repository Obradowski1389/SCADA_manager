import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private hubConnection: HubConnection;
  private rtuConnection: HubConnection;

  constructor(private http: HttpClient) { 
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7073/hub/simulation", {skipNegotiation:true, transport: HttpTransportType.WebSockets})
      .build();

    this.rtuConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7073/hub/rtu", {skipNegotiation:true, transport: HttpTransportType.WebSockets})
      .build();
  }

  startConnection() {
    return this.hubConnection.start();
  }

  startRTU(){
    return this.rtuConnection.start();
  }

  stopConnection() {
    return this.hubConnection.stop();
  }

  stopRTU(){
    return this.rtuConnection.stop();
  }

  getHubConnection() {
    return this.hubConnection;
  }

  getRTU(){
    return this.rtuConnection;
  }

  getInputs(): any{
    return this.http.get(environment.apiUrl + "Tag/input");
  }

  toggleScan(on: boolean, id: number): any{

    if(on) { return this.http.put(environment.apiUrl+ "Tag/on/"+id, null);}

    return this.http.put(environment.apiUrl+"Tag/off/"+id, null);
  }

}
