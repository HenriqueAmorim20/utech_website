import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root',
})

export class AccountService  {

    constructor(private httpClient: HttpClient){}

    getUsers(): Observable<Array<any>> {
      return this.httpClient.get<Array<any>>('/');
    }

    postUser(request: {name: string, cpf: string, email: string, phone: string, password: string}) {
      return this.httpClient.post('/', request).pipe(catchError((err) => of(err.error.message)));
    }

}