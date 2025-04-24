import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { UserDataService } from '../services/user-data.service';
import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  reactiveForm!: FormGroup;

  constructor(private httpClientService:HttpClientService){}
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      userName: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
    });
  }

  ngOnDestroy() {
    console.log('Register destroyed');
  }

  onFormSubmit() {
    // console.log('Form submitted');
    // console.log('Form details', this.reactiveForm.value);
    this.httpClientService.onUserRegister(this.reactiveForm.value).subscribe({
      next : (res)=>{
        console.log(res);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }
}
