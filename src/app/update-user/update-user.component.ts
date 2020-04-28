import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  updateDetailsform: FormGroup;
  hide = true;
  constructor(private http: HttpClient) {
    this.http = http;
  }


  ngOnInit() {
    this.createForm();
  }
  restrictPassword(event)
  {
    return( event.charCode>=65 && event.charCode <=97 && event.charCode >=48 && event.charCode<=57);
  }
  restrictNumeric(event){
    
    return ( event.charCode >= 48 && event.charCode <= 57);
  }
  createForm() {
    this.updateDetailsform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)

    });
  }
  updateDetails() {
    this.updateDetailsform.getRawValue();
    console.log(this.updateDetailsform);

    this.http
      .post(environment.baseUrl + '/update-user', this.updateDetailsform.value)
      .subscribe(
        (data) => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }
}
