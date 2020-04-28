import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  hide = true;
  constructor(private http: HttpClient, private router:Router) {
    this.http = http;
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)

    });
  }
  userRegistration() {
    this.registrationForm.getRawValue();
    console.log(this.registrationForm);
    
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(this.registrationForm.value);

    let options = {
      headers: httpHeaders
    };

    this.http
      .post(environment.baseUrl + '/register', this.registrationForm.value, options)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
          this.router.navigate(['/home']);
        },
        error => {
          console.log('Error', error);
        }
      );

  }
}
