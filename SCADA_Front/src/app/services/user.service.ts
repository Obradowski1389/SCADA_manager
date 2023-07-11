import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { LoginDTO, User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  login(loginDTO : LoginDTO) :Observable<User> {
    return this.httpClient.post<User>(environment.apiUrl + "User/login", loginDTO);
  }
}
