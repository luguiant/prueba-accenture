import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../config/globals';
import { Token } from './../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   public url: string;
   public token;

   constructor(
        public _http: HttpClient
    ) {

        this.url = GLOBAL.url;
    }

    checkAuth(token): Observable<any> {
     
        if (localStorage.getItem('token')) {
            let headers = new HttpHeaders().set('Content-Type', 'application/json');
            return this._http.post(this.url + '/auth', JSON.stringify(token), {headers: headers});
        }else{
            return null;
        } 
    }

 
}