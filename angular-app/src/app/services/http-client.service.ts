import { Injectable } from '@angular/core';
import { RegisterUser } from '../interfaces/user-data';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  onUserRegister(userData: RegisterUser) {
    return this.httpClient.post(`https://httpclientdb-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json`, userData);
  }

  getAllUsersDetails() {
    return this.httpClient.get<{ [key: string]: RegisterUser }>(`https://httpclientdb-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json`).pipe(
      map((res)=>{
        let users=[];
        for(let key in res){
          if(res.hasOwnProperty(key))
          users.push({...res[key],id:key})
        }
        return users;
      })
    );
  }
}
