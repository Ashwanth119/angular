import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  reactiveForm!: FormGroup;
  
    constructor(private userDataService:UserDataService){}
    ngOnInit() {
      this.reactiveForm = new FormGroup({
        userName: new FormControl(null),
        password: new FormControl(null),
      });
    }
    
    onLogin(){
    this.userDataService.authUser(this.reactiveForm.value);
  }
}
