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
  export class CreditService {
    public url: string;
    public token: Token;

    constructor(
        public _http: HttpClient
    ) {

        this.url = GLOBAL.url;
    }

    saveCredit(credit): Observable<any> {
 
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/credit',JSON.stringify(credit), {headers: headers});
    }

    listCredits(): Observable<any> {
        if (localStorage.getItem('token')) {
             this.token = new Token(localStorage.getItem('token'));
            
             let headers = new HttpHeaders().set('Authorization', localStorage.getItem('token') );

             return this._http.get(this.url + '/credit',{headers: headers});
         } else {
             return null;
         }
     }
  }