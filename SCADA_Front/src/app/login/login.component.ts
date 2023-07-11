import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { LoginDTO, User } from 'src/model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router) {}

  public login(){
    if(this.loginForm.value.username?.trim() != "" && this.loginForm.value.password?.trim() != ""){
      const values = this.loginForm.value;
      const loginDTO : LoginDTO = {
        "Password": values.password!,
        "Username" : values.username!
      }
      this.userService.login(loginDTO).subscribe({
        next: (value : User) => {
          console.log(value);
          if(value.role == 0) this.router.navigate(["/trending"]);
          else this.router.navigate(["/manager"])
        },
        error: (error: any) => {
          console.log(error);
          alert(error.error);
        }
      })
    }
  }
}
