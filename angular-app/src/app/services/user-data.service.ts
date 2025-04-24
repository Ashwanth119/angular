import { Injectable } from '@angular/core';
import { RegisterUser, UserData } from '../interfaces/user-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userDetails: UserData[] = [
    { userName: 'ashwanth132', password: '123' },
    { userName: 'abhilash', password: '123' },
    { userName: 'basha', password: '123' },
    { userName: 'damodhar', password: '123' },
    { userName: 'sameer', password: '123' },
    { userName: 'kasi', password: '123' },
    { userName: 'raviteja', password: '123' },
    { userName: 'harshith', password: '123' },
    { userName: 'sathya', password: '123' },
  ];

  constructor(private router: Router) {}

  getUserDetails(){
    return this.userDetails;
  }
  addUser(user: RegisterUser) {
    const existingUser = this.userDetails.find(
      (u) => u.userName === user.userName && u.password === user.password
    );
    console.log('existing user', existingUser);
    if (existingUser === undefined && user.password === user.confirmPassword) {
      this.userDetails.push({
        userName: user.userName,
        password: user.password,
      });
      console.log(this.userDetails);
    } else {
      if (existingUser === undefined) alert("Password doesn't match");
      else alert('Username already exists');
    }
  }

  authUser(user: UserData) {
    console.log(this.userDetails);
    const validUser = this.userDetails.find(
      (u) => u.userName === user.userName && u.password === user.password
    );
    if (validUser) this.router.navigate(['home']);
    else alert('userName or password is wrong!!');
  }
}
