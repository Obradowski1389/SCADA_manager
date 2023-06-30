import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { LoginDTO } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  login(loginDTO : LoginDTO) {
    return this.httpClient.post(environment.apiUrl + "User/login", loginDTO);
  }
}
