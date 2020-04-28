import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
    this.http = http;
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  constructor(private http: HttpClient,private router:Router) {
    this.http = http;
  }

  ngOnInit() {
    this.userLogin();
  }
  userLogin() {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.compose[Validators.required,Validators.name]),
      password: new FormControl('', Validators.compose[Validators.required,Validators.minLength[8],Validators.maxLength[32]]),
    })
  }
  Login() {
    this.loginForm.getRawValue();
    console.log(this.loginForm);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
      headers: httpHeaders
    };
    this.http.post(environment.baseUrl + '/login', this.loginForm.value, options)
      .subscribe(
        (data) => {
          console.log(data)
            console.log("POST IS SUCCESSFUL", data);
            alert("Logged in successfully");
            this.router.navigate(['/update-user']);
          
      
        },
        (error) => {
          console.log('Error', error);
          alert("Incorrect Username/Password");
        }
      );
  }
}
