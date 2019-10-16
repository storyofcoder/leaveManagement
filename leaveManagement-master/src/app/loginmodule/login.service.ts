import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseUrl = 'http://localhost:3000/';

 constructor(private http: HttpClient) { }

  getDetails(): Observable<any>{
    return this.http.get( this.baseUrl + 'users');
 }
}
