import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getInputs(): any{
    return this.http.get(environment.apiUrl + "Tag/input");
  }

  startSimulation(): any{
    return this.http.post(environment.apiUrl+ "Tag/simulation", null);
  }
}
