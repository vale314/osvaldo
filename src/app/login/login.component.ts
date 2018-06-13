import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginData } from '../models/login';
import { LoginAdminService } from '../services/login/login-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private BackgroundService:BackgroundService, private LoginAdminService:LoginAdminService) {
    this.loginForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      loginData: new FormGroup({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required ,Validators.minLength(10)]),
      }),
    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: LoginData = Object.assign({}, this.loginForm.value);
    
    // Do useful stuff with the gathered data

    if(this.loginForm.valid){
      this.LoginAdminService.post(result)
    }

   
  
  }

  validPassword(){
    var loginData = this.loginForm.get('loginData')['controls']
    var password: boolean = loginData.password.dirty && loginData.password.valid
  
    if(password || !loginData.password.dirty)
      return true
    return false  
  }

  validEmail(){
    var loginData = this.loginForm.get('loginData')['controls']
    var username: boolean = loginData.username.dirty && loginData.username.valid
   
    if(username || !loginData.username.dirty)
      return true
    return false  
  }

}
