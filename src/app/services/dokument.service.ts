import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DokumentService {


  constructor(private http: HttpClient,
  private tokenService: TokenStorageService) { }

  addDokument (dokument)  {
    console.log(dokument);
    let myParams = new HttpParams().set('uName', this.tokenService.getUsername());
    const newHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      ,
      params: myParams
    };
    // works fine but trying something else
   // return this.http.post('http://localhost:8080/add/docs', {name: dokument}, httpOptions).subscribe();
    return this.http.post('http://localhost:8080/user/add/doc', {name: dokument.toString()}, newHttpOptions).subscribe();
  }
}
