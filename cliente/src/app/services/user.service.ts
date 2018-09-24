
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from '../config/globals';
import { User } from '../models/user';
import { Params } from '@angular/router';
import { Token } from './../models/token';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    public url: string;
    public token: Token;

    constructor(
        public _http: HttpClient
    ) {

        this.url = GLOBAL.url;
    }

    registrarUser(user): Observable<any> {
        let json = JSON.stringify(user);
        let params = 'json=' + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/users',JSON.stringify(user), {headers: headers});
    }

    signup (user): Observable<any> {
  
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/login',JSON.stringify(user), {headers: headers});
    }

    getIdentity(token): Observable<any> {
        if (localStorage.getItem('token')) {
            let json = JSON.stringify(token);
            let params = 'json=' + json;
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return this._http.post(this.url + '/api/getidentity', params, {headers: headers});
        } else {
            return null;
        }
    }

    getToken() {
        if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
        } else {
            this.token = null;
        }
        return this.token;
    }

}