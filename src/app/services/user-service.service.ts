import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {catchError} from 'rxjs/operators';
import {RequestOptions} from '@angular/http';
import {DocVersion} from '../models/DocVersion';
import {TokenStorageService} from './token-storage.service';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  did;
  fileAsBase;

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  getUser(uId: number) {
    // httpOptions.headers.append({'Authorization: Bearer', this.tokenService.getToken());
    // httpOptions.headers.append('uname', this.tokenService.getUsername());
    // console.log(this.tokenService.getToken());
    let myParams = new HttpParams().set('uname', this.tokenService.getUsername());
    const newHttpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      ,
      params: myParams
    };
    return this.http.get('http://localhost:8080/user/get', newHttpOptions);
  }

  registerUser (user: User): Observable<User>  {
    return this.http.post<User>('http://localhost:8080/user/register', user, httpOptions);
  }

 async fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      // let fileAsBase;
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      formData.append('dokumentdid', this.did);
      formData.append('fileformatidfid', '1');
      formData.append('vtimestamp', new Date().toISOString().slice(0, 19).replace('T', ' '));
      console.log(formData);
      const headers = new HttpHeaders();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      headers.append('Content-Type', 'multipart/form-data');
      // headers.append('Accept', 'application/json');
      const options = { headers: headers };
      const newOptions = {
        headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
      };
      // this.http.post('http://localhost:8080/version/add', formData, options)
      const fileAsBlob = file as Blob;
      // this.fileAsBase = await this.getBase64(file);
      console.log(this.fileAsBase);
      /*const docVersionToAdd: DocVersion = {
        dokumentdid: 1,
        fileformatidfid: 1,
        vtimestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        file: this.fileAsBase
    };*/
      console.log(options);

      this.http.post('http://localhost:8080/version/save', formData, options/*, newOptions*/)
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        );
    }
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  setDokumentId(did) {
    this.did = did;
  }

  getDokumentId() {
    return this.did;
  }

  findUser(uName) {
    let myParams = new HttpParams().set('uname', uName);
    const newHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      ,
      params: myParams
    };
    return this.http.get('http://localhost:8080/user/find', newHttpOptions);
  }


  addDocToExistingUser(uName, did) {
    let myParams = new HttpParams().set('did', did).set('uname', uName);
    const newHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: myParams
    };
    return this.http.get('http://localhost:8080/user/doc/add', newHttpOptions).subscribe();
  }

  removeDocFromExistingUser(uName, did) {
    let myParams = new HttpParams().set('did', did).set('uname', uName);
    const newHttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: myParams
    };
    return this.http.get('http://localhost:8080/user/doc/remove', newHttpOptions).subscribe();
  }
 /* toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }*/
}
