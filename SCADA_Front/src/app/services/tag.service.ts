import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private hubConnection: HubConnection;

  constructor(private http: HttpClient) { 
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7073/hub/simulation", {skipNegotiation:true, transport: HttpTransportType.WebSockets})
      .build();
  }

  startConnection() {
    return this.hubConnection.start();
  }

  stopConnection() {
    return this.hubConnection.stop();
  }

  getHubConnection() {
    return this.hubConnection;
  }

  getInputs(): any{
    return this.http.get(environment.apiUrl + "Tag/input");
  }

  toggleScan(on: boolean, id: number): any{
    
    if(on) { return this.http.put(environment.apiUrl+ "Tag/on/"+id, null);}

    return this.http.put(environment.apiUrl+"Tag/off/"+id, null);
  }

}
