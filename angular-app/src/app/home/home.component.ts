import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { RegisterUser, UserData } from '../interfaces/user-data';
import { HttpClientService } from '../services/http-client.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userData: RegisterUser[] = [];
  constructor(private httpClientService: HttpClientService) {
  }
  ngOnInit() {
    this.httpClientService.getAllUsersDetails().subscribe({
      next: (res) => {
        this.userData = res;    
      }
    });
  }
}
