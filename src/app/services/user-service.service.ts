import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUser(userId: number) {
    let myParams = new HttpParams();
    myParams = myParams.set('User', userId.toString());
    const httpOptions = {
      params: myParams
    };
    return this.http.get('http://localhost:8080/User' + httpOptions);
  }
}
